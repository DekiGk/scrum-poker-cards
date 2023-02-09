import styled from 'styled-components'

interface IQrCodeBtn {
  big?: boolean
}

export const QrCodeBtn = styled.button<IQrCodeBtn>`
  padding: ${(props) => (props.big ? '15px' : '5px')};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
`
