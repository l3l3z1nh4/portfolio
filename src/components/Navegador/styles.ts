import styled from 'styled-components'
import { cores } from '../../styles/cores'
import { breakpoint } from '../../styles/breakpoints'

export const NavStyled = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid ${cores.vermelho};
      width: 100%;
      height: 100%;
      text-align: center;
      box-sizing: border-box;
      font-size: 1.2em;
      color: ${cores.vermelho};
      font-weight: 500;

      &.active {
        background-color: ${cores.vermelhoGlass};
        color: ${cores.vermelho};
      }
      &:hover {
        background-color: ${cores.vermelho};
        color: ${cores.branco};
        cursor: pointer;
      }
      ${breakpoint.mobile} {
        &:first-child {
          width: 70%;
        }
      }
    }
    .projetos {
      border-left: none;
    }
  }
`
