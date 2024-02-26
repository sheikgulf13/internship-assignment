"use client";

import Image from 'next/image'
import React from 'react'
import Rating from './Rating'
import Button from './Button'
import Label from './Label'

const MainCard = ({ labelText, labelImg, id, src, name, title, description, off, highlights, subhilights, features, rating, review, ratingImage }) => {
  
  return (
    <div className='mainCard'>
      {labelText && (
        <Label labelText={labelText} labelImg={labelImg} labelClass='labelClass' />
      )}

      <span className='no'>{id}</span>

      <div className='image-div'>
        <Image src={src} width={141} height={103} alt='mainpic' />
        <p>{name}</p>
      </div>

      <div className='details'>
        <p className='title'><span>{title}</span> {description}</p>
        {off && (
          <p className='offer'>{off} off</p>
        )}
        <h6>Main highlights</h6>
        <p className='highlights'>{highlights}</p>
        {
          subhilights && (
            <div className='subhighlights'>
              {
                subhilights?.map((item, index) => (
                  <div className='subhighlight' key={index}>
                    <p className='number'>{item?.no}</p>
                    <p className='subPoint'>{item?.subhighlight}</p>
                  </div>
                ))
              }
            </div>
        )}

        {
          features && (
            <div className='feature-div'>
              <h6>Why we love it</h6>

              {
                features?.map((feature, index) => (
                  <div className='feature' key={index}>
                    <Image src='/fullTick.png' width={24} height={24} alt='tick' />
                    <p>{feature}</p>
                  </div>
                ))
              }
            </div>
          )
        }
        <p className='showmore'>Show more <Image src='/blueArrow.png' width={16} height={16} alt='blueArrow' /></p>
      </div>

      <div className={`rating-div ${subhilights && 'rating-div2' }`}>
        <Rating rating={rating} review={review} ratingImage={ratingImage} ratingClass='ratingClass' />

        <Button btnText='View' btnClass='mainCardBtn' />
      </div>
    </div>
  )
}

export default MainCard