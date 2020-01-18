import React, { useState } from 'react'
import './App.css'
import { ColorPicker, DefaultColors } from './components/ColorPicker'
import { Card } from './components/Card'
import { BigCard } from './components/BigCard'
import styled from 'styled-components'
import { QrCode } from './components/QrCode'
import { QrCodeBtn } from './components/QrCodeBtn'
import { QrCodeImg } from './components/QrCodeImg'
import { Colors } from './components/Colors'
import { Cards } from './components/Cards'

const StyledApp = styled.div`
  text-align: center;
  min-height: 100vh;
  width: 100%;
  background: #4281a4;
  color: #ffffff;
`

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(DefaultColors.Green as string)
  const [currentCard, setCurrentCard] = useState()
  const [showQrCode, setShowQrCode] = useState(false)

  const handleColorPickerClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedColor(event.currentTarget.dataset.color || DefaultColors.Green)
  }

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentCard(event.currentTarget.dataset.number)
  }

  const handleBigCardClick = () => {
    setCurrentCard(null)
  }

  const toggleShowQrCode = () => {
    setShowQrCode(!showQrCode)
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
        />
      </BigCard>

      <QrCode>
        <QrCodeBtn onClick={toggleShowQrCode}>
          <QrCodeImg small={true} src="img/qr.svg" alt="" />
        </QrCodeBtn>
      </QrCode>

      <BigCard isShown={showQrCode}>
        <QrCodeBtn onClick={toggleShowQrCode}>
          <QrCodeImg big={true} src="img/qr.svg" alt="" />
        </QrCodeBtn>
      </BigCard>

      <Colors>
        <ColorPicker
          color={DefaultColors.Green}
          isActive={selectedColor === DefaultColors.Green}
          onClick={handleColorPickerClick}
        />
        <ColorPicker
          color={DefaultColors.Red}
          isActive={selectedColor === DefaultColors.Red}
          onClick={handleColorPickerClick}
        />
        <ColorPicker
          color={DefaultColors.Blue}
          isActive={selectedColor === DefaultColors.Blue}
          onClick={handleColorPickerClick}
        />
        <ColorPicker
          color={DefaultColors.Orange}
          isActive={selectedColor === DefaultColors.Orange}
          onClick={handleColorPickerClick}
        />
      </Colors>

      <Cards>
        <Card color={selectedColor} number={'0'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'0,5'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'1'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'2'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'3'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'5'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'8'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'13'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'20'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'40'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'100'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'?'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'∞'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'☕'} onClick={handleCardClick} />
      </Cards>
    </StyledApp>
  )
}

export default App
