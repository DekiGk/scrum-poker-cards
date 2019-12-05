import React from 'react'

export enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  Orange = 'orange',
}

interface IColorPicker {
  color: string
  isActive: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const ColorPicker: React.FC<IColorPicker> = props => {
  const { color, isActive, onClick } = props

  return (
    <button
      className={`color-picker color-${color} ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-color={color}
    >
      #
    </button>
  )
}
