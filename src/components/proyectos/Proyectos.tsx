import { Link } from "react-router-dom"

const proyectos = [
  {
    id: 1,
    nombre: "Proyecto 1",
    link: "proyecto-1",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    nombre: "Proyecto 2",
    link: "proyecto-2",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    nombre: "Proyecto 3",
    link: "proyecto-3",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 4,
    nombre: "Proyecto 4",
    link: "proyecto-4",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 5,
    nombre: "Proyecto 5",
    link: "proyecto-5",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

function Proyectos() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Encabezado opcional para contextualizar */}
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-100">Tus Proyectos</h2>
        <p className="text-sm text-neutral-400">Selecciona un proyecto para comenzar a trabajar</p>
      </header>

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {proyectos.map(proyecto => (
          <Link
            to={`/inicio/${proyecto.link}`}
            key={proyecto.id}
            className="group flex flex-col justify-between bg-neutral-800 p-5 rounded-xs border border-neutral-700/60 hover:border-violet-500/80 hover:bg-neutral-800/90 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-violet-500/5"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-violet-400 transition-colors">
                  {proyecto.nombre}
                </h3>
                {/* Flecha indicadora al hacer hover */}
                <span className="text-neutral-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                {proyecto.descripcion}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-700/40 flex items-center justify-between text-xs text-neutral-500">
              <span>Abrir proyecto</span>
              <span className="w-2 h-2 rounded-full bg-violet-500/80"></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Proyectos