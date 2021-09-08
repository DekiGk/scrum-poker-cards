import styled, { css } from 'styled-components'

export interface IColorPickerBtn {
  color: string
  isActive: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  colorPickerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const ColorPickerBtn = styled.button<IColorPickerBtn>`
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
  background: ${(props) =>
    props.color &&
    css`
      ${props.color};
    `};
  color: #ffffff;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.isActive &&
    css`
      border-color: #faf33e;
    `};

  input {
    display: none;
  }
`
