import { X } from 'lucide-react'

type Props = {
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

function ButtonClose({ onClick, className, ariaLabel = "Cerrar" }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={className || "p-1.5 rounded-xs text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"}
    >
      <X className="w-5 h-5" />
    </button>
  )
}

export default ButtonClose