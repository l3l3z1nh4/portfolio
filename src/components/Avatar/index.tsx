import styled from 'styled-components'

const FotoPerfil = styled.img`
  border-radius: 50%;
  width: 100%;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    width: 40%;
    height: 40%;
    margin: 0 auto;
    display: block;
    margin-bottom: 10px;
`

const Avatar = () => (
  <FotoPerfil src="https://github.com/l3l3z1nh4.png" alt="imagem do usuário" />
)

export default Avatar
