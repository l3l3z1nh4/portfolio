import { Footer } from '../Footer/Footer'
import HeaderProjeto from '../HeaderProjeto/HeaderProjeto'
import {
  ConteudoCard,
  Descricao,
  Funconalidades,
  Links,
  TecLinks,
} from './styles'

export function CardProjeto() {
  return (
    <>
      <HeaderProjeto />
      <ConteudoCard className="conteudo">
        <Descricao>
          <h2>descrição</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            debitis nam veritatis quidem? Aliquid deleniti modi odit consectetur
            quos fugit temporibus. Quidem a beatae tempora soluta illum animi
            nesciunt assumenda!
          </p>
        </Descricao>
        <Funconalidades>
          <h2>funcionalidades</h2>
          <ul>
            <li>Funcionalidade 1</li>
            <li>Funcionalidade 2</li>
            <li>Funcionalidade 3</li>
          </ul>
        </Funconalidades>
        <TecLinks>
          <h2>tecnologias</h2>
          <ul>
            <li>Tecnologia 1</li>
            <li>Tecnologia 2</li>
            <li>Tecnologia 3</li>
          </ul>
          <Links>
            <a href="">veja online</a>
            <a href="">repositório</a>
          </Links>
        </TecLinks>
      </ConteudoCard>
      <Footer />
    </>
  )
}
