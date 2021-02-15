import React, {useContext} from 'react'
import {AppData} from '../context'
import Link from 'next/link'
import {Anim} from '../utils/animations'

function index({page}) {
  const {SetAppState} = useContext(AppData)

  return (
    <div>
      <div className="one1 sample-container">
        <h1>{page}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
        <Link href='/' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to Home</a>
        </Link>
      </div>
      <div className="two sample-container">
        <Link href='/contact' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to Contacts</a>
        </Link>
        <button onClick={()=> {
          Anim.Helpers.hidshowbody('hidden')
          SetAppState.setMessageModalState({isOpen: true, sender: 'Juan Bautista'})
        }}>Open message</button>
      </div>
      <div className="two two2 sample-container">
        <Link href='/about' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to About</a>
        </Link>
      </div>
      <div className="one1 sample-container">
        <Link href='/projects/artwork' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to Artwork</a>
        </Link>
      </div>
      <div className="two two2 sample-container">
        <Link href='/projects/webdev' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to Webdev</a>
        </Link>
      </div>
      <div className="one1 sample-container">
        <Link href='/know-more' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to knowmore</a>
        </Link>
      </div>
      <div className="two two2 sample-container parallax" >
        <Link href='/projects/webdev/book-worm' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to book worm</a>
        </Link>
      </div>
      <div className="one sample-container">
        <Link href='/projects/webdev/foto-pics' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to FotoPics</a>
        </Link>
      </div>
      <div className="one1 sample-container">
        <Link href='/projects/webdev/movie-box' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to Movie-Box</a>
        </Link>
      </div>
      <div className="two two2 sample-container">
        <Link href='/projects/webdev/news-box' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to News-Box</a>
        </Link>
      </div>
      <div className="one1 sample-container">
        <Link href='/projects/webdev/radio-live' scroll={false}>
          <a onClick={()=>{
            Anim.Helpers.hidshowbody('hidden')
            SetAppState.setMenuTransitions({
              isTransitioning: true,
              delay: 800
            })
          }}>Go to Radio-Live</a>
        </Link>
      </div>
      <div className="three sample-container">
        <h1>Home Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
      </div>
    </div>
  )
}

export default index
