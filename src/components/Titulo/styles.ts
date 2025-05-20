import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h1<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}em` : '0.5em')};
  font-weight: bold;
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '14px'};
`
