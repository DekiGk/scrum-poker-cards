import React from 'react'
import styled, { css } from 'styled-components'

export enum DefaultColors {
  Red = '#ba1200',
  Green = '#618b4a',
  Blue = '#345995',
  Orange = '#ee6c4d',
}

interface IColorSelector {
  color: string
  isActive: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const StyledButton = styled.button<IColorSelector>`
  width: 70px;
  height: 70px;
  border: 5px solid #ffffff;
  margin: 0 15px 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2em;
  border-radius: 10px;
  padding: 0;
  background: ${props =>
    props.color &&
    css`
      ${props.color};
    `};
  color: #ffffff;
  cursor: pointer;
  outline: none;

  ${props =>
    props.isActive &&
    css`
      border-color: #faf33e;
    `};
`

export const ColorSelector: React.FC<IColorSelector> = props => {
  const { color } = props

  return <StyledButton {...props} data-color={color}></StyledButton>
}
