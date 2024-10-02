import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import './global.css'
import 'leaflet/dist/leaflet.css';
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
