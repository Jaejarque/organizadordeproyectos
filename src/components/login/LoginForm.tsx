import Input from "./Input"

function LoginForm() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-6 bg-neutral-900 rounded-xs min-w-100">
        <form className="flex flex-col gap-4 w-full max-w-sm">
            <Input type="email" placeholder="Correo electronico"/>
            <Input type="password" placeholder="Contraseña"/>
            <Input type="submit" placeholder="Iniciar sesión"/>
        </form>
        <a href="#" className="text-sm text-neutral-400 hover:text-violet-400 transition-colors">¿Olvidaste tu contraseña?</a>
    </section>
  )
}

export default LoginForm