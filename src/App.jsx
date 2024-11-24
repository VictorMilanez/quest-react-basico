import './App.css'
import Paragrafo from './components/paragrafo/paragrafo'
import Button from './components/button/button'

function App() {
  return (
    <>
      <Paragrafo color="red" textTransform="uppercase" fontWeight="700" text="Essa é a quest de React Básico, onde irei colocar meus aprendizados em prática e espero sempre estar em constante evolução dentro do mundo da programação" />

      <Button label="Baixar CV" />
    </>
  )
}

export default App
