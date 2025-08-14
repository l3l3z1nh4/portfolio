import { NavLink } from 'react-router-dom'
import { NavStyled } from './styles'

export const Navegador = () => {
  return (
    <NavStyled>
      <ul>
        <NavLink to="/" className="perfil">
          Perfil
        </NavLink>
        <NavLink to="/projetos-habilidades" className="projetos">
          Projetos & Habilidades
        </NavLink>
      </ul>
    </NavStyled>
  )
}
