import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full h-20 bg-yellow-400'>
        <Link href="/">
            <h1 className='text-3xl font-bold cursor-pointer p-5 brightness-125 text-white'>Tracking App</h1>        
        </Link>
    </header>
  )
}

export default Header