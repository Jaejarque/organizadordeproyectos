import Input from "./Input"
import Button from "../Button"

function LoginForm() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-6 bg-neutral-800 border border-neutral-700/60 rounded-xs min-w-100 shadow-sm">
        <form className="flex flex-col gap-4 w-full max-w-sm">
            <Input type="email" placeholder="Correo electronico"/>
            <Input type="password" placeholder="Contraseña"/>
            <Button>Iniciar sesión</Button>
        </form>
        <a href="#" className="text-sm text-neutral-400 hover:text-violet-400 transition-colors">¿Olvidaste tu contraseña?</a>
        <a href="#" className="text-sm text-neutral-400 hover:text-violet-400 transition-colors">¿No tienes una cuenta? Regístrate</a>
    </section>
  )
}

export default LoginForm