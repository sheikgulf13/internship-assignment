import React from 'react'
import RelatedCardData from '../../RelatedCardData.json';
import SmallCard from './SmallCard';

const Related = () => {
  return (
    <div className='related-section'>
        <h4>Related deals you might like for</h4>

        <div className='smallCardContainer'>
            {
                RelatedCardData && RelatedCardData.map((item, index) => (
                    <SmallCard
                        key={index}
                        relatedImg={item?.img}
                        off={item?.off}
                        offerPrice={item?.offerPrice}
                        originalPrice={item?.originalPrice}
                        tag={item?.tag}
                        title={item?.title}
                        description={item?.description} 
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Related