import ButtonClose from '../ButtonClose'
import Input from '../login/Input';
import Button from '../Button';

type Props = {
  isOpen: boolean
  onClose: () => void
}

function ModalNuevoAmbiente({ isOpen, onClose }: Props) {
  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
    >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-neutral-800 border border-neutral-700/60 rounded-xs shadow-lg shadow-black/40 flex flex-col"
        >
            <div className="flex items-center justify-between p-5 border-b border-neutral-700/60">
                <h1 className="text-xl font-bold text-neutral-100 font-serif">Nuevo Ambiente</h1>
                <ButtonClose onClick={onClose} ariaLabel="Cerrar modal" />
            </div>
            <form className="flex flex-col gap-4 p-5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre-ambiente" className="text-sm font-medium text-neutral-300">Nombre de ambiente:</label>
                    <Input type="text" placeholder="Nombre del ambiente" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="descripcion-ambiente" className="text-sm font-medium text-neutral-300">Descripción:</label>
                    <Input type="text" placeholder="Descripción del ambiente" />
                </div>
                <div className="flex justify-end pt-2">
                    <Button>Agregar</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ModalNuevoAmbiente