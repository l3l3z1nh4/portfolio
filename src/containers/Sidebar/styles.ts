import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 8px;
  border: none;
  padding: 8px;
  color: ${(props) => props.theme.corFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;
`
