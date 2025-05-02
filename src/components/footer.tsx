import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
<div>
<div className='top'>
<Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Anthony La Rocca Logo" 
            width={24} 
            height={24} 
          />

        <span className="text-gray-800 font-medium">Anthony La Rocca</span>
</Link>
</div>
<div className='bottom'>
<Link href="/" className="flex items-center">
  hOME
</Link>
<Link href="/" className="flex items-center">
  meet anthony
</Link>
<Link href="/" className="flex items-center">
  Elevate Unlimited
</Link>
<Link href="/" className="flex items-center">Support</Link>
</div>
<div className='middle  font-bold text-white flex space-x-4'>
<Link href="/" className="border rounded-full p-2 px-3">
  F
</Link>
<Link href="/" className="border rounded-full p-2">
  X
</Link>
<Link href="/" className="border rounded-full p-2">
  In
</Link>
<Link href="/" className="border rounded-full p-2">Sk</Link>
</div>
</div>
  )
}

export default footer
