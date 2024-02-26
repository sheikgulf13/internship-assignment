import React from 'react'

const Button = ({ btnClass, btnText }) => {
  return (
    <div className={btnClass}>{btnText}</div>
  )
}

export default Button