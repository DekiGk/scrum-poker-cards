import React from 'react'
import styled, { css } from 'styled-components'

interface IBigCard {
  isShown: boolean
}

const FullOverlay = styled.div<IBigCard>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #4281a4;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  transition: all 0.4s;
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.isShown &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`

export const BigCard: React.FC<IBigCard> = (props) => {
  const { children, isShown } = props

  return <FullOverlay isShown={isShown}>{children}</FullOverlay>
}
