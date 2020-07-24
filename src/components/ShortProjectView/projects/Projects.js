import React, {Fragment, useEffect} from 'react'
import * as action from '../../../store/actions/index'
import {connect} from 'react-redux'
import {imageUrl} from '../../../utils/common/common'
import { mouseEnter, mouseOut, resize } from '../../../utils/pageAnimation/projectsHoverAnimations'

function Projects(props) {
  
  useEffect(()=>{
    resize()
    // window.addEventListener('resize', resizeEls)
  })
  

  let projects = props.projects.map((proj, i)=>{
    return (
       <div className="short-project-wrapper"
       style={{background: `url('${imageUrl(proj.theme, 'png')}') no-repeat center center`}} key={i} >
        <div className="projects-wrapper" 
          onMouseLeave={(e)=>mouseOut(e)}
          onMouseEnter={(e)=>mouseEnter(e, proj.bkgColor)}
          >

          <div className="project-img-desc">
            <div className="sub-reveal-container project-image show">
              <div className='sub-reveal project-img' 
              style={{background: `url('${imageUrl(proj.photo.teaser, 'png')}') no-repeat center top`, backgroundSize: 'cover'}}> </div>
            </div>
            <div className="img-backer"
               style={{backgroundColor: proj.bkgColor}}></div>
          </div>

          <div className="project-text-desc">
            <div className="project-text-wrapper">

              <div className="project-text-alignleft">
                <h3 className="p-wrapper head2">
                  <span className="show-container p-container show"
                    style={{color: proj.textColor}}>
                    <div className="reveal p-reveal">{proj.title}</div>
                    <div className="runner p-runner"></div>
                  </span>
                </h3>
                <p className="sub-reveal-container p-desc desc show">
                  <span className="sub-reveal p-desc-content"
                    style={{color: proj.textColor}}>{proj.shortDesc}</span>
                </p>
              </div>
              <div className="project-text-alignright">
                <a href={`${proj.projectlinks.internal}`}>
                  <button type='button' 
                    className='sub-reveal-container content-center button-wrapper show' >
                    <span className='sub-reveal'
                      style={{color: proj.textColor}}>View project</span>
                  </button>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  })


  return (
    <Fragment>
      {projects}
    </Fragment>
  )
}


// const mapStateToProps = (state) => {
//   return {
//     // menus: state.state.menus,
//     activeRoute: state.state.activeRoute,
//     // isOpen: state.state.isOpen,
//     // isAnimating: state.state.isAnimating,
//     // isClicked: state.state.isClicked
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    // setMenu: (val) => { dispatch(action.menuIsOpen(val)) },
    // checkPage: () => {dispatch(action.checkPageLocation())},
    setRedirect: (istrue, path) => { dispatch(action.setRedirect(istrue, path))}
  }
}

export default connect(null, mapDispatchToProps)(Projects);