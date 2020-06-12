import React, {useEffect} from 'react'
import {img, im} from '../../../utils/common/common'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import Button from '../../../components/Button/Button'
import DesignCard from '../../../components/MyDesignCard/MyDesignCard'
import {designAnimateCards} from '../../../utils/work/mydesign/mydesign'
import {cardData} from '../../../utils/work/mydesign/cardData'
import './MyDesigns.css'

function MyDesigns() {

  useEffect(()=>{
    designAnimateCards(document)
    renderCards()
  })

  const renderCards = () => {
    return cardData.map((card, i)=>{
      return <DesignCard 
                key={i} num={card.num}
                img={card.img}
                ttl={card.ttl}
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

        <div className="card-container">

          <div className="card-text card-one content-center">
            <article className='content-center'>
              <h4><span>Create</span> ipsum dolor sit amet consec tetur adipi sicing elit. Aperiam dolor cupidi tate sequi offic iis repudi andae. Lorem, ipsum dolor.</h4>
            </article>
          </div>

          {/* cards render in an object function */}
          {renderCards()}

          <div className="card-text card-six content-center">
            <article className='content-center'>
              <h4><span>Create</span> ipsum dolor sit amet consec tetur adipi sicing elit. Aperiam dolor cupidi tate sequi offic iis repudi andae. Lorem, ipsum dolor.</h4>
            </article>
          </div>
        </div>


        <Button 
          text={'View More'}
          image={false}/>
        

        </div>
      </section>
  )
}

export default MyDesigns


