import Avatar from '../../components/Avatar'
import { P } from '../../components/Paragrafo/styles'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={1.5} marginBottom={2}>
        letícia
      </Titulo>
      <P tipo="secundario" fontSize={16}>
        l3l3z1nh4
      </P>
      <Descricao fontSize={12}>dev front-end</Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
