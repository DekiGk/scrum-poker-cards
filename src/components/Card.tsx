import React from 'react'
import { CardBtn } from '../styledComponents/CardBtn'

interface ICard {
  color: string
  selected?: boolean
  number: string
  isShown?: boolean
  isBig?: boolean
  canPickCards?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Card: React.FC<ICard> = (props) => {
  const { color, number, onClick, isBig, isShown, selected, canPickCards } = props

  return (
    <CardBtn
      color={color}
      onClick={onClick}
      isBig={isBig}
      isShown={isShown}
      selected={selected}
      canPickCards={canPickCards}
    >
      {number}
    </CardBtn>
  )
}
