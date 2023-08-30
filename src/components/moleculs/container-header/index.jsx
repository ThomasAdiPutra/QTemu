import React from 'react'

export default function ContainerHeader({ title, seeAll }) {
  return (
    <div className='flex justify-between items-center my-2'>
        <span className='font-bold text-xl'>{ title }</span>
        {seeAll && <a href={`#${title.toLowerCase().replace(' ', '-')}`}>See all</a>}
    </div>
  )
}
