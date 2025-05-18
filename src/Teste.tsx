import styled from 'styled-components'

type BoataoProps = {
  principal?: boolean
}

const Boatao = styled.button<BoataoProps>`
  background-color: transparent;
  color: ${(props) => (props.principal ? 'blue' : 'red')};
  border: 2px solid ${(props) => (props.principal ? 'blue' : 'red')};
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`

function Teste() {
  return (
    <>
      <Boatao principal>Enviar</Boatao>
      <Boatao>Cancelar</Boatao>
    </>
  )
}

export default Teste
