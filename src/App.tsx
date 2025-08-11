import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Navegador } from './components/Navegador/Navegador'
import { Container } from './styles/global'
import ConteudoProjetos from './components/ConteudoProjetos/ConteudoProjeto'
//import Perfil from './pages/Perfil'

function App() {
  return (
    <>
      <Container>
        <Header />
        <Navegador />
        <ConteudoProjetos />
        <Footer />
      </Container>
    </>
  )
}

export default App
