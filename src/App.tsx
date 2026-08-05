import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Inicio from './pages/Inicio.tsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/inicio" element={ <Inicio /> } />
      </Routes>
    </>
  )
}

export default App
