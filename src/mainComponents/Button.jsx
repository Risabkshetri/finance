import React from 'react'

function Button({children, onClick, className = ""}) {
  return (
    <button className={`bg-blue-700 rounded-lg h-10 w-24 ${className}`} onClick={onClick}>
       {children}
    </button>
  )
}

export default Button