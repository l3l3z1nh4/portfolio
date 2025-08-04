import { createGlobalStyle } from 'styled-components'

import { cores } from './cores'

export const GlobalCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
    text-transform: uppercase;
}
  header{
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  border-radius: 47px 47px 0 0;
  height: 5em;
  font-weight: 700;
  align-items: center;
  display: flex;
  justify-content: center;
  }

`
