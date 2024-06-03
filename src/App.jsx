
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import logo from "./resources/logo (1).png"

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
 <Header logo={logo}/>
 <Outlet />
 <Footer />
    </>
  )
}

export default App
