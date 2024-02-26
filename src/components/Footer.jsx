import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='inner-footer'>
                <div>
                    <h6>Categories</h6>
                    <ul>
                        <li>Web Builder</li>
                        <li>Hosting</li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ul>
                </div>

                <div>
                    <h6>Contact</h6>
                    <ul>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>

            <div>
                <p>United States <Image src='/vector-footer.png' width={15} height={9} alt='vector' /></p>
            </div>
        </div>
    </div>
  )
}

export default Footer