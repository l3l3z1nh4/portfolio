import { Container } from './styles/global'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  )
}

export default App
