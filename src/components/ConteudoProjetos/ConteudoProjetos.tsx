import { useState } from 'react'
import { projetos } from '../../utils/projetos'
import { ContainerProjetos, ContainerSkills, ProjetosStyled } from './styles'

import { Overlay } from '../CardProjeto/styles'
import { Container } from '../../styles/global'
import { CardProjeto } from '../CardProjeto/CardProjeto'

interface Projeto {
  id: number
  nome: string
  descricaoCurta: string
  descricaoCompleta: string
  linkRepositorio: string
  linkOnline: string
  funcionalidades: string[]
  tecnologias: string[]
}

export function ConteudoProjetos() {

  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null)

  const handleOpenCard = (projeto: Projeto) => {
    setProjetoSelecionado(projeto)
  }

  const handleCloseCard = () => {
    setProjetoSelecionado(null)
  }

  return (
    <>
      <ProjetosStyled className="conteudo">
        <ContainerProjetos>
          <h1>Projetos</h1>
          <ul>
            {projetos.map((projeto) => (
              <li key={projeto.id}>
                <div className="titulo-subtitulo">
                  <h2>{projeto.nome}</h2>
                  <span>•</span>
                  <p>{projeto.descricaoCurta}</p>
                </div>
                <div className="links">
                  <a className="codigo" target="blank" href={projeto.linkRepositorio}>
                    <img src="/public/assets/codigo_vermelho.png" alt="repositório" />
                  </a>
                  <a className="link" target="blank" href={projeto.linkOnline}>
                    <img src="/public/assets/link_vermelho.png" alt="link do projeto online" />
                  </a>
                  <button className="mais" onClick={() => handleOpenCard(projeto)}>
                    <img src="/public/assets/mais_vermelho.png" alt="ver mais" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </ContainerProjetos>
        <ContainerSkills>
          <h1>Skills</h1>
          <ul className="skills-grid">
            <li className="br">HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li className="br">react</li>
            <li>vue.js</li>
            <li>typescript</li>
            <li className="br">git</li>
            <li className="br">Sass</li>
            <li>less</li>
            <li>bootstrap</li>
            <li className="br">cypress</li>
            <li className="br">gulp</li>
            <li>grunt</li>
            <li className="br">figma</li>
            <li>photoshop</li>
          </ul>
        </ContainerSkills>
        {projetoSelecionado && (
          <Overlay onClick={handleCloseCard}>
            <Container>
              <CardProjeto
                projeto={projetoSelecionado}
                handleClose={handleCloseCard}
              />
            </Container>
          </Overlay>
        )}
      </ProjetosStyled>
    </>
  )
}

export default ConteudoProjetos
