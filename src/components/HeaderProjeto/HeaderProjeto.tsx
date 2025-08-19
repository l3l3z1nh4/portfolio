import { CloseBtn, Header, Titulo, TituloContainer } from './styles'

interface CardProjetoProps {
  handleClose: () => void
}

function HeaderProjeto({ handleClose }: CardProjetoProps) {
  return (
    <>
      <Header>
        <TituloContainer>
          <Titulo>titulo do projeto</Titulo>
        </TituloContainer>
        <CloseBtn onClick={handleClose}>x</CloseBtn>
      </Header>
    </>
  )
}

export default HeaderProjeto
