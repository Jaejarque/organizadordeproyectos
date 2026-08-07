import { useState } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { Plus, User, Menu, X } from 'lucide-react'
import Divisor from '../Divisor';
import ModalNuevoAmbiente from './ModalNuevoAmbiente';

const proyectos = [
  { id: 1, nombre: "Proyecto 1", link: "proyecto-1" },
  { id: 2, nombre: "Proyecto 2", link: "proyecto-2" },
  { id: 3, nombre: "Proyecto 3", link: "proyecto-3" },
  { id: 4, nombre: "Proyecto 4", link: "proyecto-4" },
  { id: 5, nombre: "Proyecto 5", link: "proyecto-5" }
]

function Navegacion() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
{/* Navbar Superior en Móvil (Botón Hamburguesa) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-neutral-800 border-b border-neutral-700/60 flex items-center justify-between px-4 z-40">
        <h1 className="text-lg font-bold text-neutral-100 font-serif">Organizador</h1>
        <button
          onClick={toggleMenu}
          className="p-2 text-neutral-300 hover:text-neutral-100 rounded-xs hover:bg-neutral-700 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop u Overlay para móviles cuando el menú está abierto */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
        />
      )}

{/* Sidebar (Fijo en desktop, desplegable en mobile) */}
      <nav
        className={`fixed top-0 left-0 bg-neutral-800 border-r border-neutral-700/60 p-4 h-screen w-64 flex flex-col justify-between gap-4 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Sección Superior: Título y Lista de proyectos */}
        <div className="flex flex-col gap-4 w-full overflow-y-auto flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-100 font-serif text-center w-full md:text-left">
              Organizador de proyectos
            </h1>
          </div>

          {/* Lista de proyectos */}
          <div className="flex flex-col gap-1 w-full mt-2">
            {proyectos.map(proyecto => (
              <Link
                key={proyecto.id}
                to={`/inicio/${proyecto.link}`}
                onClick={() => setIsOpen(false)}
                className="w-full p-2.5 rounded-xs text-sm text-neutral-300 hover:bg-violet-600/20 hover:text-violet-300 transition-colors font-medium"
              >
                {proyecto.nombre}
              </Link>
            ))}
          </div>
        </div>

        {/* Sección Inferior: Acciones y Perfil */}
        <div className="w-full pt-2 flex flex-col gap-3">
          <Button onClick={openModal}><Plus className="w-4 h-4" />Nuevo ambiente</Button>
          <Divisor />
          
          {/* Usuario */}
          <div className="flex items-center gap-3 w-full px-2">
            <div className="w-9 h-9 rounded-full bg-neutral-700 text-neutral-200 flex items-center justify-center shrink-0 border border-neutral-600">
              <User className="w-5 h-5 stroke-violet-300" />
            </div>
            <span className="text-sm font-medium text-neutral-200 truncate">
              Nombre Usuario
            </span>
          </div>

{/* Botón Cerrar Sesión */}
          <Button className="w-full py-2.5 px-3 bg-neutral-700/80 hover:bg-red-500/80 text-neutral-200 hover:text-white font-medium rounded-xs transition-colors text-sm">
            Cerrar sesión
          </Button>
        </div>
      </nav>
      <ModalNuevoAmbiente isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Navegacion