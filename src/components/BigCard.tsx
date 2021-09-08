import React from 'react'
import { FullOverlay, IFullOverlay } from '../styledComponents/FullOverlay'

export const BigCard: React.FC<IFullOverlay> = (props) => {
  const { children, isShown } = props

  return <FullOverlay isShown={isShown}>{children}</FullOverlay>
}
