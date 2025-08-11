import { NavStyled } from "./styles";

export const Navegador = () => {
  return (
    <NavStyled>
      <ul>
        <li className="perfil">Perfil</li>
        <li className="projetos active">Projetos & Habilidades</li>
      </ul>
    </NavStyled>
  );
};