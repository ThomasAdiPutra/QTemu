import React from 'react'

export default function Button({ children }) {
  return (
    <button className='bg-gray-500 text-white px-6 py-2 rounded-md'>
        { children }
    </button>
  )
}
