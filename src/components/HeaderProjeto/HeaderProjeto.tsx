import { CloseBtn, Header, Titulo, TituloContainer } from './styles'

interface CardProjetoProps {
  titulo: string
  handleClose: () => void
}

function HeaderProjeto({ titulo, handleClose }: CardProjetoProps) {
  return (
    <>
      <Header>
        <TituloContainer>
          <Titulo>{titulo}</Titulo>
        </TituloContainer>
        <CloseBtn onClick={handleClose}>x</CloseBtn>
      </Header>
    </>
  )
}

export default HeaderProjeto
