import Image from 'next/image'
import React from 'react'

const Label = ({ labelText, labelImg, labelClass }) => {
  return  (
    <div className={labelClass}>
        <Image src={labelImg} width={20} height={20} alt='label' />
        <span>{labelText}</span>
    </div>
  )
}

export default Label