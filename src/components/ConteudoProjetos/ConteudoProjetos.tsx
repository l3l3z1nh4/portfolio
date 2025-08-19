import { CardProjeto } from '../CardProjeto/CardProjeto'
import { ContainerProjetos, ContainerSkills, ProjetosStyled } from './styles'

import { Overlay } from '../CardProjeto/styles'
import { Container } from '../../styles/global'

interface ConteudoProjetosProps {
  cardAberto: boolean
  handleToggleCard: () => void
}

export function ConteudoProjetos({
  cardAberto,
  handleToggleCard,
}: ConteudoProjetosProps) {
  return (
    <>
      <ProjetosStyled className="conteudo">
        <ContainerProjetos>
          <h1>Projetos</h1>
          <ul>
            {/* Contatos - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Contatos</h2>
                <span>•</span>
                <p>gerencie sua lista de Contatos</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/lista-contatos"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://lista-contatos-peach.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Contatos - Fim */}
            {/* Pearl - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Pearl</h2>
                <span>•</span>
                <p>landing page do filme “Pearl”</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/pearl"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://pearl-d80wpuzc7-l3l3z1nh4s-projects.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Pearl - Fim */}
            {/* Efood - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Efood</h2>
                <span>•</span>
                <p>delivery de comida</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/efood"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://efood-lemon-eta.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Efood - Fim */}
            {/* Calculadora - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Calculadora</h2>
                <span>•</span>
                <p>operações aritméticas</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/calculadora-vue"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://calculadora-vue-git-master-l3l3z1nh4s-projects.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Calculadora- Fim */}
            {/* Vesúvio - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Vesúvio</h2>
                <span>•</span>
                <p>landing page para o restaurante de "The Sopranos"</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/vesuvio"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://vesuvio-8ih1gs1nv-l3l3z1nh4s-projects.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Vesúvio - Fim */}
            {/* Média Escolar - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Média Escolar</h2>
                <span>•</span>
                <p>simplificando seu controle escolar</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/calculadora_media"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://calculadora-media-seven.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Média Escolar - Fim */}
            {/* Clone Disney+ - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Clone Disney+</h2>
                <span>•</span>
                <p>plataforma de streaming</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/clone_disney_plus"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://clone-disney-plus-ten-olive.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Clone Disney+ - Fim */}
            {/* Club do Vinho - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Club do Vinho</h2>
                <span>•</span>
                <p>catálogo e blog de vinhos</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/club_do_vinho"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://club-do-vinho-git-main-l3l3z1nh4s-projects.vercel.app/#"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Club do Vinho - Fim */}
            {/* E.shoes - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>E.shoes</h2>
                <span>•</span>
                <p>loja virtual de calçados</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/e_shoes"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://e-shoes-iota.vercel.app/#"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* E.shoes - Fim */}
            {/* Dreamy - Inicio */}
            <li>
              <div className="titulo-subtitulo">
                <h2>Dreamy</h2>
                <span>•</span>
                <p>diário de sonhos</p>
              </div>
              <div className="links">
                <a
                  className="codigo"
                  target="blank"
                  href="https://github.com/l3l3z1nh4/dreamy"
                >
                  <img
                    src="/src/assets/codigo_vermelho.png"
                    alt="repositório"
                  />
                </a>
                <a
                  className="link"
                  target="blank"
                  href="https://dreamy-git-main-l3l3z1nh4s-projects.vercel.app/"
                >
                  <img
                    src="/src/assets/link_vermelho.png"
                    alt="link do projeto online"
                  />
                </a>
                <button className="mais" onClick={handleToggleCard}>
                  <img src="/src/assets/mais_vermelho.png" alt="" />
                </button>
              </div>
            </li>
            {/* Dreamy - Fim */}
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
        {cardAberto && (
          <Overlay onClick={handleToggleCard}>
            <Container>
              <CardProjeto handleClose={handleToggleCard} />
            </Container>
          </Overlay>
        )}
      </ProjetosStyled>
    </>
  )
}

export default ConteudoProjetos
