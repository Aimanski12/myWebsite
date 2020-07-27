import React, {Component} from 'react'
import Button from '../Svgs/Logos/Logos'
import WithBox from './WithBox/WithBox'

// function Buttons(props) {
class Buttons extends Component {
  



  render(){
    let button;
    if(this.props.type === 'withText') {
      button = <Button type={this.props.type} colors={this.props.colors}/> 
    }
    
    if(this.props.type === 'withBox') {
      button = <WithBox 
                btnType={this.props.btnType}
                link={this.props.link}
                text={this.props.text} 
                withSvg={this.props.withSvg} 
                colors={this.props.colors}/> 
    }
    
    if(this.props.type === 'arrow') {
      button = <Button colors={this.props.colors} type={this.props.type}/> 
    }

    return(
      (button)
    )
  }
}


  // let contextType = PageData

  // console.log(props)

//   return (
//   )
// }

export default Buttons;
