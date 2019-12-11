import React, { useState } from 'react'
import './App.css'
import { ColorPicker, Colors } from './components/ColorPicker'
import { Card } from './components/Card'
import { BigCard } from './components/BigCard'

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(Colors.Green as string)
  const [currentCard, setCurrentCard] = useState()

  const handleColorPickerClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedColor(event.currentTarget.dataset.color || Colors.Green)
  }

  const handleCardClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentCard(event.currentTarget.dataset.number)
  }

  const handleBigCardClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentCard(null)
  }

  return (
    <div className="App">
      <BigCard isShown={!!currentCard}>
        <Card
          color={selectedColor}
          number={currentCard}
          onClick={handleBigCardClick}
          isBig={true}
        />
      </BigCard>

      <div className="qr-code">
        <img src="img/qr.svg" alt="" />
      </div>

      <div className="colors">
        <ColorPicker
          color={Colors.Green}
          isActive={selectedColor === Colors.Green}
          onClick={handleColorPickerClick}
        />
        <ColorPicker
          color={Colors.Red}
          isActive={selectedColor === Colors.Red}
          onClick={handleColorPickerClick}
        />
        <ColorPicker
          color={Colors.Blue}
          isActive={selectedColor === Colors.Blue}
          onClick={handleColorPickerClick}
        />
        <ColorPicker
          color={Colors.Orange}
          isActive={selectedColor === Colors.Orange}
          onClick={handleColorPickerClick}
        />
      </div>

      <div className="cards">
        <Card color={selectedColor} number={'0'} onClick={handleCardClick} />
        <Card color={selectedColor} number={'0.5'} onClick={handleCardClick} />
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
      </div>
    </div>
  )
}

export default App
