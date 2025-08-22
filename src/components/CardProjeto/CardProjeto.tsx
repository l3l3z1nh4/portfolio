import { Footer } from '../Footer/Footer'
import HeaderProjeto from '../HeaderProjeto/HeaderProjeto'
import {
  ConteudoCard,
  Descricao,
  Funconalidades,
  Links,
  TecLinks,
} from './styles'

interface Props {
  projeto: {
    nome: string
    descricaoCompleta: string
    funcionalidades: string[]
    tecnologias: string[]
    linkOnline: string
    linkRepositorio: string
  }
  handleClose: () => void
}

export function CardProjeto({ projeto, handleClose }: Props) {
  if (!projeto) {
    return null 
  }
  return (
    <>
      <HeaderProjeto titulo={projeto.nome} handleClose={handleClose} />
      <ConteudoCard className="conteudo">
        <Descricao>
          <h2>descrição</h2>
          <p>{projeto.descricaoCompleta}</p>
        </Descricao>
        <Funconalidades>
          <h2>funcionalidades</h2>
          <ul>
            {projeto.funcionalidades.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Funconalidades>
        <TecLinks>
          <h2>tecnologias</h2>
          <ul>
            {projeto.tecnologias.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Links>
            <a href={projeto.linkOnline} target="_blank" rel="noopener noreferrer">veja online</a>
            <a href={projeto.linkRepositorio} target="_blank" rel="noopener noreferrer">repositório</a>
          </Links>
        </TecLinks>
      </ConteudoCard>
      <Footer />
    </>
  )
}
