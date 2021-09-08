import React, { useRef, useState } from 'react'
import './App.css'
import { ColorSelector } from './components/ColorSelector'
import { Card } from './components/Card'
import { BigCard } from './components/BigCard'
import { QrCode } from './styledComponents/QrCode'
import { QrCodeBtn } from './styledComponents/QrCodeBtn'
import { Colors } from './styledComponents/Colors'
import { Cards } from './styledComponents/Cards'
import { ColorPicker } from './components/ColorPicker'
import QRCode from 'react-qr-code'
import { StyledApp } from './styledComponents/StyledApp'
import { initialCardNumberValues, initialCardShirtValues } from './constants/cardConstants'
import { useStickyState, useStickyStateForMap } from './utils/utils'
import { DefaultColors } from './enums/DefaultColors'

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useStickyState(
    DefaultColors.Green as string,
    'selectedColor'
  )
  const [currentCard, setCurrentCard] = useState('')
  const [showQrCode, setShowQrCode] = useState(false)
  const [isColorPickerActive, setIsColorPickerActive] = useState(false)
  const [canPickCards, setCanPickCards] = useState(false)
  const [cards, setCards] = useStickyStateForMap(initialCardNumberValues, 'cards')
  const [isWakeLockOn, setIsWakeLockOn] = useState(false)

  const wakeLock = useRef<WakeLockSentinel | null>(null)

  const handleColorSelectorClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedColor(event.currentTarget.dataset.color || DefaultColors.Green)
    setIsColorPickerActive(false)
  }

  const handleColorPickerClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.currentTarget.getElementsByTagName('input')[0].click()
    setIsColorPickerActive(true)
  }

  const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.currentTarget.value)
  }

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentCard(event.currentTarget.innerText)
  }

  const handleBigCardClick = () => {
    setCurrentCard('')
  }

  const toggleShowQrCode = () => {
    setShowQrCode(!showQrCode)
  }

  const toggleCardSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedCardValue = event.currentTarget.textContent || ''

    setCards(new Map(cards.set(clickedCardValue, !cards.get(clickedCardValue))))
  }

  const setNumberCards = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    initialCardNumberValues.forEach((value, key) => {
      initialCardNumberValues.set(key, true)
    })

    setCards(new Map(initialCardNumberValues))
  }

  const setTShirtCards = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    initialCardShirtValues.forEach((value, key) => {
      initialCardShirtValues.set(key, true)
    })

    setCards(new Map(initialCardShirtValues))
  }

  const toggleWakeLock = async (): Promise<undefined | void> => {
    if ('wakeLock' in navigator) {
      if (wakeLock.current && isWakeLockOn) {
        wakeLock?.current?.release()
        console.log('Screen lock released.')
        return
      }

      try {
        wakeLock.current = await navigator.wakeLock.request('screen')
        console.log('Screen lock obtained.')
        setIsWakeLockOn(true)

        wakeLock.current.addEventListener('release', () => {
          wakeLock.current = null
          setIsWakeLockOn(false)
        })
      } catch (error) {
        // Wake lock was not allowed.
        alert(error)
        setIsWakeLockOn(false)
      }
    }
  }

  return (
    <StyledApp>
      <BigCard isShown={!!currentCard}>
        <Card
          color={selectedColor}
          number={currentCard}
          onClick={handleBigCardClick}
          isBig={true}
          isShown={!!currentCard}
          selected={true}
        />
      </BigCard>

      <BigCard isShown={showQrCode}>
        <QrCodeBtn onClick={toggleShowQrCode} big>
          <QRCode value="https://scrum-poker-cards.kodeskills.com/" size={270} />
        </QrCodeBtn>
      </BigCard>

      <header>
        <QrCode>
          <QrCodeBtn onClick={toggleShowQrCode}>
            <QRCode value="https://scrum-poker-cards.kodeskills.com/" size={40} />
          </QrCodeBtn>
        </QrCode>

        <button onClick={() => setCanPickCards(!canPickCards)}>
          {canPickCards ? 'Save Card Sequence' : 'Edit Card Sequence'}
        </button>

        <button onClick={setNumberCards} disabled={canPickCards}>
          Number Cards
        </button>
        <button onClick={setTShirtCards} disabled={canPickCards}>
          T-Shirt Cards
        </button>
        <button onClick={toggleWakeLock} disabled={canPickCards}>
          Turn {isWakeLockOn ? 'off' : 'on'} Wake Lock
        </button>

        <Colors>
          <ColorSelector
            color={DefaultColors.Green}
            isActive={selectedColor === DefaultColors.Green}
            onClick={handleColorSelectorClick}
          />
          <ColorSelector
            color={DefaultColors.Red}
            isActive={selectedColor === DefaultColors.Red}
            onClick={handleColorSelectorClick}
          />
          <ColorSelector
            color={DefaultColors.Blue}
            isActive={selectedColor === DefaultColors.Blue}
            onClick={handleColorSelectorClick}
          />
          <ColorSelector
            color={DefaultColors.Orange}
            isActive={selectedColor === DefaultColors.Orange}
            onClick={handleColorSelectorClick}
          />
          <ColorPicker
            onClick={handleColorPickerClick}
            color={selectedColor}
            isActive={isColorPickerActive}
            colorPickerChange={handleColorPickerChange}
          />
        </Colors>
      </header>

      <Cards>
        {Array.from(cards).map((card: [string, boolean]) => {
          // card[0] = cardValue
          // card[1] = isCardSelected

          return (
            <Card
              key={card[0]}
              color={selectedColor}
              number={card[0]}
              onClick={canPickCards ? toggleCardSelection : handleCardClick}
              selected={card[1]}
              canPickCards={canPickCards}
            />
          )
        })}
      </Cards>
    </StyledApp>
  )
}

export default App
