import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
  font-size: 1em;
  color: ${(props) =>
    (props.tipo ?? 'principal') === 'principal' ? ' #282a35' : '#949494'};
  line-height: 1.5;
`
