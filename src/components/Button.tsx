import React from 'react'

function Button({children, onClick, className}: {children: React.ReactNode, onClick?: () => void, className?: string}) {
  return (
    <button className={className || "w-full mt-2 py-2 px-4 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-xs transition-colors flex items-center justify-center gap-2"} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button