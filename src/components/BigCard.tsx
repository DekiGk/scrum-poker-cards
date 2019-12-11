import React from 'react'

interface IBigCard {
  isShown: boolean
}

export const BigCard: React.FC<IBigCard> = props => {
  const { children, isShown } = props

  return (
    <div className={`full-overlay ${isShown ? 'show-overlay' : ''}`}>
      {children}
    </div>
  )
}
