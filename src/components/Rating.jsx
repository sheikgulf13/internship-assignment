import Image from 'next/image'
import React from 'react'

const Rating = ({ ratingClass, rating, review, ratingImage }) => {
  return (
    <div className={ratingClass}>
        <h5>{rating}</h5>
        <p>{review}</p>
        <Image src={ratingImage} width={66} height={11} alt='rating' />
    </div>
  )
}

export default Rating