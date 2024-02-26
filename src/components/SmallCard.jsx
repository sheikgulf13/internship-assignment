import Image from 'next/image'
import React from 'react'
import Button from './Button'

const SmallCard = ({ relatedImg, off, tag, title, description, offerPrice, originalPrice }) => {
  return (
    <div className='smallCard'>
      <Image src={relatedImg} width={141} height={103} className='img' alt='mainpic' />
      <div className='tags'>
        <p>{off} off</p>
        <p>{tag}</p>
      </div>
      <h6>{title}</h6>
      <p>{description}</p>
      <div className='offers'>
        <p className='offerPrice'>{offerPrice}</p>
        <p className='originalPrice'>{originalPrice}</p>
        <p className='off'>({off} off)</p>
      </div>
      <Button btnText='View Deal' btnClass='smallCardBtn' />
    </div>
  )
}

export default SmallCard