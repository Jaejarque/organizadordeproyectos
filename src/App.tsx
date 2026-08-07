import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Inicio from './pages/Inicio.tsx'
import Registrarse from './pages/Registrarse.tsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/inicio" element={ <Inicio /> } />
        <Route path="/registrarse" element={ <Registrarse /> } />
      </Routes>
    </>
  )
}

export default App
