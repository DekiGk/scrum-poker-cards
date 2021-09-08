import React from 'react'
import { ColorSelectorBtn, IColorSelectorBtn } from '../styledComponents/ColorSelectorBtn'

export const ColorSelector: React.FC<IColorSelectorBtn> = (props) => {
  const { color } = props

  return <ColorSelectorBtn {...props} data-color={color}></ColorSelectorBtn>
}
