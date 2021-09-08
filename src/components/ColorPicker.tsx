import React from 'react'
import { ColorPickerBtn, IColorPickerBtn } from '../styledComponents/ColorPickerBtn'

export const ColorPicker: React.FC<IColorPickerBtn> = (props) => {
  const { color, colorPickerChange } = props

  return (
    <ColorPickerBtn {...props} data-color={color}>
      <input type="color" onChange={colorPickerChange} />
    </ColorPickerBtn>
  )
}
