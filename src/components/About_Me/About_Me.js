import React from 'react';
import './About_Me.css'
import aiman from '../../images/photos/aiman-adlawan-slider-photo.png'

import {about_section} from '../../animate'

const About_Me = () => {

  window.addEventListener('scroll', (e) => {
    const w = window.innerWidth
    const left = document.querySelector('.section-about-photo')
    const right = document.querySelector('.section-about-text')

    about_section(w, left, right, e.path[1].pageYOffset)
  })

  return (
    <div className="section-about">
      <div className="section-about-photo">
        <img src={aiman} alt=""/>
      </div>
      <div className="section-about-text">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus illo, at voluptas natus ex est ea esse vitae ipsa alias incidunt, accusamus pariatur eaque architecto ipsam aperiam officia itaque deserunt consectetur asperiores! Nihil adipisci id ipsam eaque temporibus voluptatibus accusantium magnam illo corrupti porro, nam qui dolores quidem molestiae quod cumque praesentium laboriosam labore facere hic molestias a incidunt dicta. Dolore adipisci corrupti mollitia dolores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus illo, at voluptas natus ex est ea esse vitae ipsa alias incidunt, accusamus pariatur eaque architecto ipsam aperiam officia itaque deserunt consectetur asperiores! Nihil adipisci id ipsam eaque temporibus voluptatibus accusantium magnam illo corrupti porro, nam qui dolores quidem molestiae quod cumque praesentium laboriosam labore facere hic molestias a incidunt dicta. Dolore adipisci corrupti mollitia dolores.</p>
        <button>Lets Talk</button>
      </div>
    </div>
  )
}
export default About_Me
