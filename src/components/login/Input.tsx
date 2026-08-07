import React from "react"
import { EyeOff, Eye } from "lucide-react"
type Props = {
    type: string,
    placeholder: string,
    className?: string
}
function Input({ type, placeholder, className }: Props) {
    //Estado para manejar la visibilidad de la contraseña
    const [showPassword, setShowPassword] = React.useState(false)


  return (
    <>
      {type === "email" || type === "text" ? (
        <input
          type={type}
          placeholder={placeholder}
          className={className || "w-full py-2.5 px-3 rounded-xs bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-neutral-700/60 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"}
        />
      ) : null}
      {type === "password" && (
        <div className={className ||"flex items-center justify-between w-full py-2.5 px-3 rounded-xs bg-neutral-800 text-neutral-100 border border-neutral-700/60 focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-500 focus-within:border-violet-500 transition-colors"}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className="w-full bg-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none"
            />
            <div
            className="cursor-pointer text-neutral-400 hover:text-neutral-100 transition-colors"
            >
                {showPassword ? (
                    <Eye className="w-5 h-5" onClick={() => setShowPassword(false)}/>
                ) : (
                    <EyeOff className="w-5 h-5" onClick={() => setShowPassword(true)}/>
                )}
            </div>
        </div>
      )}
    </>
  )
}

export default Input