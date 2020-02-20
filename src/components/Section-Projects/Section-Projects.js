import React, {useEffect} from 'react';
import './Section-Projects.css'
import Button from '../Button/Button'

import laptop_icon from '../../images/logo/laptop-icon.svg'
import camera_icon from '../../images/logo/camera-icon.svg'
import app_icon from '../../images/logo/app-icon.svg'

const Section_Projects = () => {


  useEffect(() => {
    window.addEventListener('scroll', (e)=>{
      const w = window.innerWidth
      const sectionProj = document.querySelector('.project-features')

      // console.log(e.path[1].pageYOffset)
      if (w > 900 && e.path[1].pageYOffset > 1180){
        sectionProj.classList.add('project-features-scroll')
      }
      if (w > 900 && e.path[1].pageYOffset < 1180) {
        sectionProj.classList.remove('project-features-scroll')
      }
      
    })
  })
    


  return (
    <div className="section-projects" >
      <div className="project-features project-features-scroll">
        <section className='features'>
          <h3>Websites</h3>
          <img src={laptop_icon} alt=""/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum animi cupiditate qui a laborum voluptas culpa, atque laudantium optio natus enim tenetur!</p>
        </section>
        <section className="features">
          <h3>Apps</h3>
          <img src={app_icon} alt=""/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum animi cupiditate qui a laborum voluptas culpa, atque laudantium optio natus enim tenetur!</p>
        </section>
        <section className="features">
          <h3>Photography</h3>
          <img src={camera_icon} alt=""/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum animi cupiditate qui a laborum voluptas culpa, atque laudantium optio natus enim tenetur!</p>
        </section>
      </div>
      <Button text={'View More'}/>

    </div>
  )
}
export default Section_Projects
