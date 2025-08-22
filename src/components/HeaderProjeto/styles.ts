import styled from 'styled-components'
import { cores } from '../../styles/cores'
import { breakpoint } from '../../styles/breakpoints'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Titulo = styled.h1`
  font-weight: 700;
  font-size: 50px;
  margin-left: 4em;
  ${breakpoint.mobile} {
    font-size: 8em;
    margin-left: 4em;
  }
`

export const CloseBtn = styled.button`
  border: 2px solid ${cores.vermelho};
  cursor: pointer;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 0.5rem 2.8rem 0.5rem 2.5rem;
  border-left: 2px solid ${cores.branco};
  height: 100%;
  font-size: 1.8em;
  font-weight: 600;
  border-radius: 0 47px 0 0;
  flex-shrink: 0;
  &:hover {
    background: ${cores.branco};
    color: ${cores.vermelho};
    border-left: 2px solid ${cores.vermelho};
  }

  ${breakpoint.mobile} {
    padding: 0.5rem 1.2em 0.5rem 1.2em;
    font-size: 1.5em;
    font-weight: 600;
  }
`
