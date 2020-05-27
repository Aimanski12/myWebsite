import React, {useEffect} from 'react'
import {findBackground} from '../../../helpers/common/common'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import Button from '../../../components/Button/Button'
import DesignCard from '../../../components/MyDesignCard/MyDesignCard'
import {cardData} from '../../../helpers/mydesign/cardData'
import './MyDesigns.css'

function MyDesigns() {

  useEffect(()=>{
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
          style={{background: `url('${findBackground('mywork')}') center center`}}>

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


