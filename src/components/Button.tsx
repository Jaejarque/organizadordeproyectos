import React from 'react'

function Button({children, onClick, className}: {children: React.ReactNode, onClick?: () => void, className?: string}) {
  return (
    <button className={className || "w-full py-2.5 px-3 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-xs transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet-500"} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button