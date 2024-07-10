import React from 'react'

function Input({
    label,
    placeholder,
    type = "text",
    className = "",
    ...props
}) {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2)
  return (
    <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            placeholder={placeholder}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
            id={id}
            />
        </div>
  )
}

export default Input