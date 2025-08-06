import { NavStyled } from "./styles";

export const Navegador = () => {
  return (
    <NavStyled>
      <ul>
        <li className="active">Perfil</li>
        <li className="projetos">Projetos & Habilidades</li>
      </ul>
    </NavStyled>
  );
};