import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import './global.css'
import 'leaflet/dist/leaflet.css';
import { Outlet } from 'react-router-dom'


function App() {

  // const usuario = {
  //   nome: "tina",
  //   sobrenome: "moraes",
  // }

  // const x = "sobrenome"

  // console.log("nome acessando com colchete",usuario[x])
  // console.log("nome acessando com ponto", usuario.nome)

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
