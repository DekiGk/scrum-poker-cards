import React from 'react'

interface ICard {
  color: string
  number: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Card: React.FC<ICard> = props => {
  const { color, number, onClick } = props

  return <div className={`color-${color}`}>{number}</div>
}
