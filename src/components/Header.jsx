import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='inner-header'>
        <div className='search'>
            <Image src='/search.png' width={24} height={24} alt='search'  />
            <input type="text" />
        </div>

        <Link href='/' className='link' >Categories</Link>
        <Link href='/' className='link' >Website Builders</Link>
        <Link href='/' className='link' >{`Today's deals`}</Link>
      </div>
    </div>
  )
}

export default Header