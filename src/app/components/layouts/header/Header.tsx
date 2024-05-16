import React from 'react'
import NextLink from 'next/link';

const Header = () => {
  return (
    <div>
       <header className="text-gray-700 border-b border-gray-200">
      <nav>
        <div className="container flex mx-auto p-5 flex-col md:flex-row text-2xl font-bold text-gray-900">Portfolio
          <div className="ml-auto flex space-x-4 text-base font-light text-gray-700">
            <NextLink href="/login" className="mr-5 hover:text-blue-400 duration-300">Login</NextLink>
            <NextLink href="/info" className="mr-5 hover:text-blue-400 duration-300" >Info</NextLink>
            <NextLink href="/signup" className="mr-5 hover:text-blue-400 duration-300">signup</NextLink>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header
