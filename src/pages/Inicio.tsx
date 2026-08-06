import React from 'react'
import Navegacion from '../components/navegacion/Navegacion';
import Proyectos from '../components/proyectos/Proyectos';

function Inicio() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col md:flex-row w-full">
      <Navegacion />
      
      {/* Área de contenido principal con offset para el sidebar en desktop */}
      <main className="flex-1 w-full md:pl-64 pt-14 md:pt-0 transition-all">
        <Proyectos />
      </main>
    </div>
  )
}

export default Inicio