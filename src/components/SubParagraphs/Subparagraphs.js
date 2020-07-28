import React, {Component, Fragment} from 'react'
import ParagraphLinks from './ParagraphLinks/ParagraphLinks'
// import * as action from '../../store/actions/index'
// import {pageTransition} from '../../utils/pageAnimation/pageTransitionAnim'
// import {connect} from 'react-redux'
// import './Subparagraphs.css'


import {PageData} from '../../utils/context/pageContext'
class Subparagraphs extends Component {
  static contextType = PageData

  render(){
    let data = this.context.headers


    let sections = data.subParagraph.content.map((text, i) => {
      return (
        <Fragment key={i}>
        <h3 className="p-wrapper head3">
            <span className="show-container p-container show"
              style={{color: data.textColors.primary}}>
              <div className="reveal p-reveal">{text.title}</div>
              <div className="runner p-runner"></div>
            </span>
          </h3>
          <p className="sub-reveal-container p-desc desc show">
            <span className="sub-reveal p-desc-content"
              style={{color: data.textColors.secondary, 
              fontWeight: data.title[0] ===  'About me.' ? 500 : 600}}> 
              {text.text}</span>
          </p>
        </Fragment>
      )
    })

    return (
      <article className='paragraphs'>
        {sections}
        {data.subParagraph.specialLinks.isTrue ? 
          <ParagraphLinks color={data.textColors.secondary} /> : null}
      </article>
    )
  }
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
