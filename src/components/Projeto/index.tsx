import styled from 'styled-components'

import { P } from '../Paragrafo/styles'
import Titulo from '../Titulo'

// nessa versão o css é feito dentro do próprio arquivo, sem necessidade de importar o estilo

const Card = styled.div`
  border: 1px solid rgb(131, 98, 98);
  padding: 16px;
  border-radius: 4px;
`
const LinkBotao = styled.a`
  color: #fff;
  background-color: rgb(36, 33, 45);
  display: inline-block;
  margin-top: 24px;
  padding: 8px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
`

const Projeto = () => (
  <Card>
    <Titulo>Projeto Titulo</Titulo>
    <P tipo="secundario">descrição do projeto</P>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
