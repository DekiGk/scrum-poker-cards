import React, { useState } from 'react'
import './App.css'
import { ColorSelector, DefaultColors } from './components/ColorSelector'
import { Card } from './components/Card'
import { BigCard } from './components/BigCard'
import styled from 'styled-components'
import { QrCode } from './components/QrCode'
import { QrCodeBtn } from './components/QrCodeBtn'
import { QrCodeImg } from './components/QrCodeImg'
import { Colors } from './components/Colors'
import { Cards } from './components/Cards'
import { ColorPicker } from './components/ColorPicker'
import qr from './img/qr.svg'

const StyledApp = styled.div`
  text-align: center;
  min-height: 100vh;
  width: 100%;
  background: red;
  color: #ffffff;
`

const initialCardValues = new Map([
  ['0', true],
  ['0,5', true],
  ['1', true],
  ['2', true],
  ['3', true],
  ['5', true],
  ['8', true],
  ['13', true],
  ['20', true],
  ['40', true],
  ['100', true],
  ['?', true],
  ['∞', true],
  ['☕', true],
])

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(DefaultColors.Green as string)
  const [currentCard, setCurrentCard] = useState('')
  const [showQrCode, setShowQrCode] = useState(false)
  const [isColorPickerActive, setIsColorPickerActive] = useState(false)
  const [canPickCards, setCanPickCards] = useState(false)
  const [cards, setCards] = useState(initialCardValues)

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

      <QrCode>
        <QrCodeBtn onClick={toggleShowQrCode}>
          <QrCodeImg small={true} src={qr} alt="" />
        </QrCodeBtn>
      </QrCode>

      <BigCard isShown={showQrCode}>
        <QrCodeBtn onClick={toggleShowQrCode}>
          <QrCodeImg big={true} src={qr} alt="" />
        </QrCodeBtn>
      </BigCard>

      <button onClick={() => setCanPickCards(!canPickCards)}>Edit Card Sequence</button>

      <button>test</button>

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

      <Cards>
        {Array.from(cards).map((card) => {
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
