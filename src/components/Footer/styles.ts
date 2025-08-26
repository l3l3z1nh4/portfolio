import styled from 'styled-components'
import { cores } from '../../styles/cores'
import { breakpoint } from '../../styles/breakpoints'

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;

  height: 5em;
  border-radius: 0 0 47px 47px;
  color: ${cores.branco};
  width: 100%;
  box-sizing: border-box;
`

export const EmailContent = styled.div`
  background-color: ${cores.vermelho};
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 0 0 0 47px;
  padding: 0 2em; 
  flex-grow: 1; 
  flex-shrink: 1; 
  min-width: 0; 
`

export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5em;
  font-weight: 500;
  font-size: 0.8em;


  ${breakpoint.mobile} {
    font-size: 0.58em;
  }
`
export const SocialContent = styled.div`
  background-color: ${cores.vermelho}; 
  display: flex;
  align-items: center;
  height: 100%; 
  border-radius: 0 0 47px 0; /* Borda direita */
  padding: 0 2em; 
  flex-shrink: 0; 

  ${breakpoint.mobile}{
    padding: 0 1.3em;
  }
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  img {
    max-width: 2em;
    height: auto;

    ${breakpoint.mobile} {
      max-width: 1.5em;
    }
  }
`
