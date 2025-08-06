import styled from 'styled-components'
import { cores } from '../../styles/cores'
import { breakpoint } from '../../styles/breakpoints'

export const PerfilStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.vermelho};

  ${breakpoint.mobile} {
    flex-direction: column;
  }
`

export const CardPerfil = styled.div`
  width: 100%;
  height: 100%;
  border-right: 2px solid ${cores.vermelho};
  text-align: center;

  ${breakpoint.mobile} {
    border-right: none;
    border-bottom: 2px solid ${cores.vermelho};
    height: 90%;
  }

  .avatar-nome {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40%;

    .avatar {
      border-right: 2px solid ${cores.vermelho};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 30%;
      img {
        width: 80%;
        height: auto;
        border-radius: 50%;

        ${breakpoint.mobile} {
          max-width: 50px
        }
      }
    }
    .nome {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
    }
  }

  .cargo {
    border-top: 2px solid ${cores.vermelho};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    padding: 1em;

    ${breakpoint.mobile} {
     padding: 0;
     font-size: 1.3em;
     height: 60%;
    }
  }
`
export const CardDescricao = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    max-width: 80%;
    text-transform: none;
    font-size: 1.3em;
    text-align: justify;
  }

  ${breakpoint.mobile} {
    p {
      font-size: 1em;
    }
  }
`
