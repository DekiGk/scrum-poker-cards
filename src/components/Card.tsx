import React from 'react'
import styled, { css } from 'styled-components'

interface ICard {
  color: string
  selected?: boolean
  number: string
  isShown?: boolean
  isBig?: boolean
  canPickCards?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IStyledButton {
  color: string
  selected?: boolean
  isShown?: boolean
  isBig?: boolean
  canPickCards?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const StyledButton = styled.button<IStyledButton>`
  width: 100px;
  height: 150px;
  border: 5px solid #ffffff;
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2.7em;
  display: ${(props) => (props.selected ? 'flex' : 'none')};
  ${(props) =>
    props.canPickCards &&
    css`
      display: flex;
      opacity: ${props.selected ? '1' : '0.5'};
    `};

  color: #ffffff;
  cursor: pointer;
  outline: none;
  transition: all 1s;
  backface-visibility: hidden;

  background: ${(props) =>
    props.color &&
    css`
      ${props.color};
    `};

  ${(props) =>
    props.isBig &&
    css`
      width: 300px;
      height: 450px;
      font-size: 10em;
    `};

  ${(props) =>
    props.isShown === false &&
    css`
      transform: rotate3d(0, 1, 0, 180deg);
    `};

  ${(props) =>
    props.isShown &&
    css`
      transform: rotate3d(0, 1, 0, 0deg);
    `};
`

export const Card: React.FC<ICard> = (props) => {
  const { color, number, onClick, isBig, isShown, selected, canPickCards } = props

  return (
    <StyledButton
      color={color}
      onClick={onClick}
      isBig={isBig}
      isShown={isShown}
      selected={selected}
      canPickCards={canPickCards}
    >
      {number}
    </StyledButton>
  )
}
