import RegistrarseForm from "../components/registrarse/RegistrarseForm.tsx"
function Registrarse() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-900 text-neutral-100">
        <h1
        className="text-4xl font-bold text-neutral-100 mb-8 font-serif text-center"
        >Organizador de proyectos</h1>
        <RegistrarseForm />
    </main>
  )
}

export default Registrarse