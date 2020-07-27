import React from 'react'
// import {imageUrl } from '../../../utils/common/common'
// import './Hero.css'

function Hero(props) {
  return (
    <figure className='hero-wrapper'>
      <span className='show-container hero-cover show'>
        <img className='reveal img-reveal' src={props.data.image} alt=""/>
        <div className="runner"></div>
      </span>
      <style jsx>{`
        .hero-wrapper {
          width: 250px;
          height: 250px;
          position: absolute;
          top: calc(100vh - 65vh);
          left: calc(100% - 40%)
        }

        .hero-cover {
          display: inline-block;
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .img-reveal {
          display: block;
          width: 100%;
          height: 100%;
        }

        @media (max-width:  1468px){
          .hero-wrapper {
            width: 235px;
            height: 235px;
            top: calc(100vh - 67vh);
            left: calc(100% - 40%)
          }
        }

        @media (max-width: 1368px) {
          .hero-wrapper {
            width: 230px;
            height: 230px;
            left: calc(100% - 38%);
          }
        }

        @media (max-width: 1268px) {
          .hero-wrapper {
            width: 225px;
            height: 225px;
            left: calc(100% - 40%);
          }
        }

        @media (max-width: 1168px) {
          .hero-wrapper {
            width: 220px;
            height: 220px;
            left: calc(100% - 42%);
          }
        }

        @media (max-width: 1068px) {
          .hero-wrapper {
            width: 210px;
            height: 210px;
            left: calc(100% - 44%);
          }
        }
        @media screen and (max-width: 1070px) and (orientation: landscape) {
          .hero-wrapper {
            top: calc(100vh - 74vh);
          }
        }

        @media (max-width: 968px) {
          .hero-wrapper {
            width: 210px;
            height: 210px;
            top: calc(100vh - 67vh);
          }
        }


        @media (max-width: 868px) {
          .hero-wrapper {
            width: 200px;
            height: 200px;
            left: calc(100% - 46%);
          }
        }

        @media (max-width: 768px) {
          .hero-wrapper {
            width: 190px;
            height: 190px;
          }
        }


        @media (max-width: 668px) {
          .hero-wrapper {
            width: 180px;
            height: 180px;
            left: calc(100% - 48%);
          }
        }

        @media (max-width: 568px) {
          .hero-wrapper {
            left: calc(100% - 67%);
          }
        }

        @media (max-width: 468px) {
          .hero-wrapper {
            top: calc(100vh - 79vh);
            left: calc(100% - 72%);
          }
        }

        @media (max-width: 368px) {
          .hero-wrapper {
            left: calc(100% - 76%);
            top: calc(100vh - 80vh);

          }
        }
      `}</style>
    </figure>
  )
}

export default Hero

