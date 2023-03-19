import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../images/logo.jpg'

const NavbarTop = () => {
  return (
    <div>
      <div className='bg-gradient-to-t from-gray-700 via-gray-800 to-gray-700 h-20 flex justify-evenly items-center text-gray-100'>
        <div>
          <Link href='/'>
              <Image
                src={logo}
                width={50}
                height={60}
                alt='logo'
              />
          </Link>
        </div>
        <div>
            <ul className='flex gap-2'>
                <li className='bg-gray-600 px-2 py-1 shadow-b hover:shadow hover:shadow-blue-400'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='bg-gray-600 px-2 py-1 shadow-b hover:shadow hover:shadow-blue-400'>
                    <Link href={'/blogs'}>Blogs</Link>
                </li>
                <li className='bg-gray-600 px-2 py-1 shadow-b hover:shadow hover:shadow-blue-400'>
                    <Link href={'/movie'}>Movies</Link>
                </li>
                <li className='bg-gray-600 px-2 py-1 shadow-b hover:shadow hover:shadow-blue-400'>
                    <Link href={'/contact-us'}>Contact Us</Link>
                </li>
                <li className='bg-gray-600 px-2 py-1 shadow-b hover:shadow hover:shadow-blue-400'>
                    <Link href={'/abouts'}>About Us</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
