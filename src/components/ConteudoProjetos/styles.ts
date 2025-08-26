import styled from 'styled-components'
import { cores } from '../../styles/cores'
import { breakpoint } from '../../styles/breakpoints'

export const ProjetosStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.vermelho};
  overflow: hidden;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 11%;
    border-bottom: 2px solid ${cores.vermelho};
    font-size: 1.3em;

    ${breakpoint.mobile} {
      font-size: 1.1em;
    }
  }

  ${breakpoint.mobile} {
    flex-direction: column;
    height: 100%;
    max-height: 55vh;
  }
`

export const ContainerProjetos = styled.div`
  width: 75%;
  border-right: 2px solid ${cores.vermelho};
  height: 100%;

  ${breakpoint.mobile} {
    width: 100%;
    border-right: none;
    height: 100%;
  }

  ul {
    height: 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      padding: 0.3em 0.5em;
      border-bottom: 2px solid ${cores.vermelho};
      height: 8.9%;
      cursor: default;

      ${breakpoint.mobile} {
        height: 8.5%;
        font-size: 0.6em;
      }

      &:hover {
        background-color: ${cores.vermelho};
        color: white;

        .links {
          .codigo img {
            filter: brightness(0) invert(1);
          }
          .link img {
            filter: brightness(0) invert(1);
          }
          .mais img {
            filter: brightness(0) invert(1);
          }
        }
      }

      .titulo-subtitulo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        gap: 0.5em;

        h2 {
          font-size: 1em;
        }
        p {
          text-transform: none;
          margin-top: -3px;
          ${breakpoint.mobile} {
            font-size: 0.95em;
          }
        }
      }

      .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.8em;

        button {
          border: none;
          background: none;
          cursor: pointer;
        }

        img {
          height: 1em;
        }
      }
    }
  }
`

export const ContainerSkills = styled.div`
  width: 25%;
  height: 100%;

  ${breakpoint.mobile} {
    width: 100%;
    height: 30%;

    h1 {
      padding-top: 4px;
      padding-bottom: 16px;

      ${breakpoint.mobile} {
        padding-bottom: 14px;
      }
    }
  }

  ul.skills-grid {
    display: flex;
    flex-wrap: wrap;

    ${breakpoint.desktop} {
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

    ${breakpoint.mobile} {
      height: 82%;
      width: 111.2%;
    }

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid ${cores.vermelho};
      font-size: 0.8em;
      border-right: 2px solid ${cores.vermelho};

      ${breakpoint.desktop} {
        width: 100%;
        height: 5.94%;
        &:nth-of-type(1n) {
          border-right: none;
        }
        font-size: 0.8em;
      }

      ${breakpoint.mobile} {
        width: 18%;
        border-right: 2px solid ${cores.vermelho};
        font-size: 0.59em;

        &:nth-of-type(5n) {
          border-right: none;
        }
      }
    }
  }
`
