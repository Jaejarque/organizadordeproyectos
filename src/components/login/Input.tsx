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
      {type === "email" && (
        <input
          type={type}
          placeholder={placeholder}
          className={className || "w-full p-2 rounded-xs bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-violet-500"}
        />
      )}
      {type === "password" && (
        <div className={className ||"flex items-center justify-between w-full p-2 rounded-xs bg-neutral-800 text-neutral-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-500"}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className="w-full bg-neutral-800 text-neutral-100 focus:outline-none"
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
      {type === "submit" && (
        <input
          type={type}
          placeholder={placeholder}
          value={placeholder}
          className={className || "w-full p-2 rounded-xs bg-violet-500 text-neutral-100 font-bold cursor-pointer hover:bg-violet-600 transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-500"}
        />
      )}
    </>
  )
}

export default Input