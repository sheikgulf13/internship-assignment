import React from 'react'
import Button from './Button'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h5>Sign up and get exclusive special deals</h5>

        <div>
            <input type="text" className='input' />
            <Button btnText='Search' btnClass='newsletterBtn' />
        </div>
    </div>
  )
}

export default NewsLetter