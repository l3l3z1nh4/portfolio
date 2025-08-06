import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { cores } from './cores'

export const GlobalCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    list-style: none;
}
  header{
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  border-radius: 47px 47px 0 0;
  height: 5em;
  width: 100%;
  font-weight: 700;
  align-items: center;
  display: flex;
  justify-content: center;
}

.conteudo{
  height: 50vh;
  border-left: 2px solid ${cores.vermelho};
  border-right: 2px solid ${cores.vermelho};
}
`
export const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
