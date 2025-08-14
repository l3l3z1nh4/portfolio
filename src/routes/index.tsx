import { Routes, Route } from 'react-router-dom'
import Perfil from '../pages/Perfil'
import ProjetosHabilidades from '../pages/ProjetosHabilidades'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Perfil />} />
      <Route path="/projetos-habilidades" element={<ProjetosHabilidades />} />
    </Routes>
  )
}

export default Rotas
