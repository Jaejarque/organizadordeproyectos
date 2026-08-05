import LoginForm from "../components/login/LoginForm";
function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-800">
        <h1
        className="text-4xl font-bold text-white mb-8 font-serif text-center"
        >Organizador de proyectos</h1>
        <LoginForm />
    </main>
  )
}

export default Login