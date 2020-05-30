import React from 'react'
import {findBackground} from '../../../helpers/common/common'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import './LifeEssential.css'

function LifeEssential() {

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
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('bib')} alt="" />
                </figure>
              </li>
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('boo')} alt="" />
                </figure>
              </li>
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('foo')} alt="" />
                </figure>
              </li>
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('han')} alt="" />
                </figure>
              </li>
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('hea')} alt="" />
                </figure>
              </li>
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('lap')} alt="" />
                </figure>
              </li>
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('run')} alt="" />
                </figure>
              </li>
              <li className='content-center'>
                <figure className='content-center'>
                  <img src={findBackground('sle')} alt="" />
                </figure>
              </li>

            </ul>
          </div>

      </div>
    </section>
  )
}

export default LifeEssential
