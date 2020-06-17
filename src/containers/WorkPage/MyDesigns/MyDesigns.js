import React, {useEffect} from 'react'
import {img, im} from '../../../utils/common/common'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import Button from '../../../components/Button/Button'
import DesignCard from '../../../components/MyDesignCard/MyDesignCard'
// import {designAnimateCards} from '../../../utils/work/mydesign/mydesign'
import {cardData} from '../../../utils/work/mydesign/cardData'
import './MyDesigns.css'

function MyDesigns() {

  useEffect(()=>{
    // designAnimateCards(document)
    // renderCards()
  })

  const renderCards = () => {
    return cardData.map((card, i)=>{
      return <DesignCard 
                key={i} num={card.num}
                index={i}
                img={card.img}
                ttl={card.ttl}
                link={card.link}
                prg={card.prg}/>
    })
  }

  return (
     <section className="my-work content-center">
        <div className='my-work-container content-center'
          alt={im[7]}
          style={{background: `url('${img(7)}') center center`}}>

        <SectionHeader 
          color='yellow'
          title='My Design.'
          quote='Without labor, nothing prospers'
          author='Sophocles' />

        <div className="content-align card-container">
          {renderCards()}
        </div>

        <Button 
          text={'See More'}
          external={true}
          link={'https://www.behance.net/aimanadlawan'}
          image={false}/>

        </div>
      </section>
  )
}

export default MyDesigns


