import styled, { css } from 'styled-components'

interface IQrCodeImg {
  small?: boolean
  big?: boolean
}

export const QrCodeImg = styled.img<IQrCodeImg>`
  ${(props) =>
    props.small &&
    css`
      height: 50px;
    `};

  ${(props) =>
    props.big &&
    css`
      width: 300px;
    `};
`
