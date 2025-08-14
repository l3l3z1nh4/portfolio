import { CloseBtn, Header, Titulo, TituloContainer } from './styles'

function HeaderProjeto() {
  return (
    <>
      <Header>
        <TituloContainer>
          <Titulo>titulo do projeto</Titulo>
        </TituloContainer>
        <CloseBtn>x</CloseBtn>
      </Header>
    </>
  )
}

export default HeaderProjeto
