import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h1<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}em` : '1em')};
  font-weight: bold;
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '14px'};
`
