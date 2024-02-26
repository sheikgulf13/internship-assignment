import Image from 'next/image'
import React from 'react'
import Button from "@/components/Button";
import MainCard from "@/components/MainCard";
import data from '../../data.json';

const Hero = () => {
  return (
    <div className='hero'>
        <h2>Best Website builders in the US</h2>
        <div className='box-div'>
          <div className='inner-box'>
            <div>
              <Image src='/tick.png' width={20} height={20} alt='tick' />
              <p>Last Updated - February 22,2020</p>
            </div>
            <div>
              <Image src='/info.png' width={20} height={20} alt='info' />
              <p>Advertising Disclosure</p>
            </div>
          </div>

          <div className='inner-box2'>
            <p>Top Relevant</p>
            <Image src='/downArrow.png' width={24} height={24} alt='vector' />
          </div>
        </div>

          <ul className='first-list'>
            <li>Tools</li>
            <li>AWS Builder</li>
            <li>Start Build</li>
            <li>Build Supplies</li>
            <li>Tooling</li>
            <li>BlueHosting</li>
          </ul>

          <ul className='second-list'>
            <li>Home</li>
            <li><Image src='/Vector.png' width={10} height={8.25} alt='vector' className='vector-img' /></li>
            <li>Hosting for all</li>
            <li><Image src='/Vector.png' width={10} height={8.25} alt='vector' className='vector-img' /></li>
            <li>Hosting</li>
            <li><Image src='/Vector.png' width={10} height={8.25} alt='vector' className='vector-img' /></li>
            <li>Hosting6</li>
            <li><Image src='/Vector.png' width={10} height={8.25} alt='vector' className='vector-img' /></li>
            <li>Hosting5</li>
          </ul>

        <div className='mainCardDiv'>
        {
          data && data?.map((item, index) => (
            <MainCard
              key={index}
              id={item?.id}
              labelText={item?.labelText} 
              labelImg={item?.labelImg} 
              src={item?.img} 
              name={item?.name} 
              title={item?.title} 
              description={item?.description}
              off={item?.off} 
              highlights={item?.highlights} 
              subhilights={item?.subhighlights}
              features={item?.features}
              rating={item?.rating} 
              review={item?.review} 
              ratingImage={item?.ratingImage} 
            />
          ))
        }
        </div>
    </div>
  )
}

export default Hero