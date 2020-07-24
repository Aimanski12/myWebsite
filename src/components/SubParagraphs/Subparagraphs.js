import React, {Fragment} from 'react'
// import * as action from '../../store/actions/index'
// import {pageTransition} from '../../utils/pageAnimation/pageTransitionAnim'
// import {connect} from 'react-redux'
import './Subparagraphs.css'

function Subparagraphs(props) {

  let sections = props.data.subParagraph.content.map((text, i) => {
    return (
      <Fragment key={i}>
      <h3 className="p-wrapper head3">
          <span className="show-container p-container show"
            style={{color: props.data.textColors.primary}}>
            <div className="reveal p-reveal">{text.title}</div>
            <div className="runner p-runner"></div>
          </span>
        </h3>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content"
            style={{color: props.data.textColors.secondary, fontWeight: props.data.title[0] ===  'About me.' ? 500 : 600}}> 
            {text.text}</span>
        </p>
      </Fragment>
    )
  })

  return (
    <article className='paragraphs'>
      {sections}

      {props.data.subParagraph.specialLinks.isTrue ?
        <Fragment>

          {/* aiman please put this 
          
            block of element to a folder in credentials 

            called links or whatever to make this more readble
          
          */}
          <p className="sub-reveal-container p-desc p-links desc show">
            <span className="sub-reveal p-desc-content"
              style={{color: props.data.textColors.secondary, fontWeight: 500}}> 
              I'm excited to 
                <a href="https://www.linkedin.com/" 
                  rel='noopener noreferrer'
                  target='_blank'>
                    <span className='links'> connect</span></a> with you great people like you.</span>
          </p>

          <p className="sub-reveal-container p-desc p-links desc show">
            <span className="sub-reveal p-desc-content"
              style={{color: props.data.textColors.secondary, fontWeight: 500}}> 
              Click 
              <a href="/credentials">
                <span className='links'
                  // onClick={()=>{
                  //   pageTransition()
                  //   setTimeout(() => {
                  //     props.setRedirect(true, `/credentials`)
                  //   }, 1000)
                  // }}
                > here</span></a> to see some of my credentials.
              </span>
            </p> 
          </Fragment> : null }
    </article>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // setMenu: (val) => { dispatch(action.menuIsOpen(val)) },
//     // checkPage: () => {dispatch(action.checkPageLocation())},
//     setRedirect: (istrue, path) => { dispatch(action.setRedirect(istrue, path)) }
//   }
// }

// export default connect(null, mapDispatchToProps)(Subparagraphs);
export default Subparagraphs;
