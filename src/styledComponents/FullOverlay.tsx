import styled, { css } from 'styled-components'

export interface IFullOverlay {
  isShown: boolean
}

export const FullOverlay = styled.div<IFullOverlay>`
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
