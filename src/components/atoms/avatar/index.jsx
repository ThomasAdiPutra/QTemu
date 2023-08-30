import React from 'react'

export default function Avatar({ size = 80, rounded = false, bgColor = 'bg-transparent', border}) {
  return (
    <div 
      className={`${rounded && 'rounded-full'} ${bgColor} ${border && 'border-2 border-black'}`} 
      style={{ height: size, width: size }}>

    </div>
  )
}
