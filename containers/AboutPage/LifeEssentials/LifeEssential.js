import React from 'react'
// import {findBackground} from '../../../helpers/common/common'
import {img, im} from '../../../utils/common/common'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'

function LifeEssential() {
  const imL = [25,26,27,28,29,30,31,32]
  const es = () => {
    let a = imL.map((i, x) => {
    return ( <li className='content-center' key={x}>
              <figure className='content-center'>
                <img src={img(i)} alt={`${im[i]} icon`} />
              </figure>
            </li> )
      })
    return a
  }

  return (
    <section className="my-essentials">
      <div className='my-essentials-container content-center'>

        <SectionHeader 
          color='green'
          title='My Life Essentials.'
          quote='Men who try to do something and fail are infinitely better than those who do nothing and succeed.'
          author='Lloyd Jones' />

          <div className="essential-icons content-align content-center">
            <ul className=''>
              {es()}
            </ul>
          </div>

      </div>
    </section>
  )
}

export default LifeEssential
