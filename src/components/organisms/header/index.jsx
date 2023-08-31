import React from 'react'

export default function Header() {
  return (
    <nav className='bg-gray-700 text-gray-500 flex justify-between py-5 px-12'>
        <ul className='flex gap-4'>
            <li className='text-white'>QTemu</li>
            <li>Create Meetup</li>
            <li>Explore</li>
        </ul>
        <span className=''>Login</span>
    </nav>
  );
}
