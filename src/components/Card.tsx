import React from 'react'

interface ICard {
  color: string
  number: string
  isBig?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Card: React.FC<ICard> = props => {
  const { color, number, onClick, isBig } = props

  return (
    <button
      className={`card color-${color} ${isBig && 'card-big'}`}
      onClick={onClick}
      data-number={number}
    >
      {number}
    </button>
  )
}
