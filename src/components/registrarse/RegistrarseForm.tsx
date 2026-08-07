import Input from "../login/Input"
import Button from "../Button"
import { Link } from "react-router-dom"

function RegistrarseForm() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-6 bg-neutral-800 border border-neutral-700/60 rounded-xs min-w-100 shadow-sm">
        <form className="flex flex-col gap-4 w-full max-w-sm">
            <Input type="text" placeholder="Nombre" />
            <Input type="email" placeholder="Correo electronico" />
            <Input type="password" placeholder="Contraseña" />
            <Input type="password" placeholder="Confirmar contraseña" />
            <Button>Registrarse</Button>
        </form>
        <Link
            to="/"
            className="text-sm text-neutral-400 hover:text-violet-400 transition-colors"
        >
            ¿Ya tienes una cuenta? Inicia sesión
        </Link>
    </section>
  )
}

export default RegistrarseForm