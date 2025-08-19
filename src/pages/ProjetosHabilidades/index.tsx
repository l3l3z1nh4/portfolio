import { useState } from 'react'
import Header from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Navegador } from '../../components/Navegador/Navegador'
import ConteudoProjetos from '../../components/ConteudoProjetos/ConteudoProjetos'

const ProjetosHabilidades = () => {
  const [cardAberto, setCardAberto] = useState(false)

  const handleToggleCard = () => {
    setCardAberto(!cardAberto)
  }

  return (
    <>
      <Header />
      <Navegador />
      <ConteudoProjetos
        cardAberto={cardAberto}
        handleToggleCard={handleToggleCard}
      />
      <Footer />
    </>
  )
}

export default ProjetosHabilidades
