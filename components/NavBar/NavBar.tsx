import React from 'react'
import Image from "next/image";
import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function NavBar() {
  return (
    <div className='w-full h-20 bg-casper flex'>
      <div className='w-full px-4 inline-flex items-center justify-between'>
        <div className="">
          <Image
            src="/img/trip-trax-logo.png"
            height={50}
            width={150}
            alt="Logo"
            priority={true}
            placeholder="empty"
          />
        </div>
        <div>
          <ThemeToggle />
        </div>
    </div>
  </div>
  )
}
