import React, { useState } from 'react'
import './App.css'
import { ColorPicker, Colors } from './components/ColorPicker'
import { Card } from './components/Card'

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('')

  const handleColorPickerClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedColor(event.currentTarget.dataset.color || Colors.Green)
  }

  return (
    <div className="App">
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
        <Card color={selectedColor} number={'0'} />
        <Card color={selectedColor} number={'0/2'} />
        <Card color={selectedColor} number={'1'} />
        <Card color={selectedColor} number={'2'} />
        <Card color={selectedColor} number={'3'} />
        <Card color={selectedColor} number={'5'} />
        <Card color={selectedColor} number={'8'} />
      </div>
    </div>
  )
}

export default App
