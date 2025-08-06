import { CardDescricao, CardPerfil, PerfilStyled } from './styles'

export function ConteudoPerfil() {
  return (
    <PerfilStyled className="conteudo">
      <CardPerfil>
        <div className="avatar-nome">
          <div className="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/148493822?v=4"
              alt="avatar"
            />
          </div>
          <div className="nome">
            <h2>Letícia Pessotti</h2>
          </div>
        </div>
        <h2 className="cargo">
          Desenvolvedora
          <br />
          Front-end
        </h2>
      </CardPerfil>
      <CardDescricao>
        <p>
          Com um olhar apurado para o design e a experiência do usuário,
          encontro soluções visuais criativas e funcionais para aplicações web.
          Minha abordagem combina estética e construção de código otimizada,
          garantindo interfaces que se destacam pela beleza e pela performance.
        </p>
      </CardDescricao>
    </PerfilStyled>
  )
}
