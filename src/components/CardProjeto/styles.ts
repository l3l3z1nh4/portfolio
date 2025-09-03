import styled from 'styled-components'
import { cores } from '../../styles/cores'
import { breakpoint } from '../../styles/breakpoints'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.branco};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
  ${breakpoint.smartphone} {
    max-width: 100%;
  }
`

export const Card = styled.div`
  ${breakpoint.smartphone} {
    overflow: auto;
  }
`

export const ConteudoCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${cores.vermelho};
  height: 56.5vh;

  ${breakpoint.mobile} {
    height: 61.2vh;
  }
  ${breakpoint.smartphone} {
    height: 60.5vh;
  }
`

export const Descricao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35%;
  width: 100%;
  border-bottom: 2px solid ${cores.vermelho};

  ${breakpoint.mobile} {
    flex-direction: column;
    border-bottom: 2px solid ${cores.vermelho};
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 583px;
    height: 100%;
    border-right: 2px solid ${cores.vermelho};

    ${breakpoint.mobile} {
      border-bottom: 2px solid ${cores.vermelho};
      width: 100%;
      border-right: none;
      height: 30%;
      padding: 0.5em;
    }
  }
  p {
    padding: 1em;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: justify;
    ${breakpoint.mobile} {
      font-size: 0.7em;
    }
  }
`
export const Funconalidades = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35%;
  width: 100%;
  border-bottom: 2px solid ${cores.vermelho};

  ${breakpoint.mobile} {
    flex-direction: column;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23.7em;
    height: 100%;
    border-right: 2px solid ${cores.vermelho};

    ${breakpoint.mobile} {
      width: 100%;
      border-right: none;
      border-bottom: 2px solid ${cores.vermelho};
      height: 30%;
      padding: 0.5em;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5em;
      border-bottom: 2px solid ${cores.vermelho};

      &:nth-of-type(3n),
      &:nth-of-type(4n) {
        border-bottom: none;
      }

      &:nth-of-type(4n) {
        border-top: 2px solid ${cores.vermelho};
      }

      ${breakpoint.mobile} {
        font-size: 0.8em;
      }
    }
  }
`
export const TecLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35%;
  width: 100%;

  ${breakpoint.smartphone} {
    flex-direction: column; // [NOVO] empilha
    font-size: 0.8em; // [NOVO]
    max-width: 100%; // [NOVO]
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.6em;
    height: 100%;
    border-right: 2px solid ${cores.vermelho};

    ${breakpoint.mobile} {
      width: 13.6em;
      font-size: 0.8em;
    }

    ${breakpoint.smartphone} {
      width: 100%;
      border-right: none;
      border-bottom: 2px solid ${cores.vermelho};
      height: 30%;
      padding: 0.2em 0;
      font-size: 2em;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 32.3%;
    height: 100%;

    ${breakpoint.mobile} {
      width: 50%;
    }

    ${breakpoint.smartphone} {
      width: 100%;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5em;
      border-bottom: 2px solid ${cores.vermelho};

      &:nth-of-type(3n),
      &:nth-of-type(4n) {
        border-bottom: none;
      }

      &:nth-of-type(4n) {
        border-top: 2px solid ${cores.vermelho};
      }

      ${breakpoint.mobile} {
        font-size: 0.8em;
      }

      ${breakpoint.smartphone} {
        font-size: 0.8em;
        width: 100%;

        &:nth-of-type(3n),
        &:nth-of-type(4n) {
          border-bottom: 2px solid ${cores.vermelho};
        }

        &:nth-of-type(4n) {
          border-top: none;
        }
      }
    }
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border-left: 2px solid ${cores.vermelho};
  font-weight: 700;

  ${breakpoint.mobile} {
    width: 40%;
  }

  ${breakpoint.smartphone} {
    width: 100%;
    border-left: none;
    flex-direction: row;
    height: 60%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 102%;
    border-bottom: 2px solid ${cores.vermelho};
    color: ${cores.vermelho};

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: ${cores.vermelho};
      color: ${cores.branco};
      &:last-child {
        border-bottom: 2px solid ${cores.branco};
      }
    }
    ${breakpoint.mobile} {
      width: 100%;
    }
    ${breakpoint.smartphone} {
      border-bottom: none;
      &:last-child {
        border-left: 2px solid ${cores.vermelho};
      }
    }
  }
`
