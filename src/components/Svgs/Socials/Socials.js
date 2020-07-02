import React, {Fragment} from 'react'
import Behance from './Social/Behance'
import Dribbble from './Social/Dribbble'
import Goodreads from './Social/Goodreads'
import Linkedin from './Social/Linkedin'
import Twitter from './Social/Twitter'

function Socials(props) {
  const soc = () => {
    let s = props.icon
    return (
    s === 'behance' ? <Behance color={props.color} /> :
    s === 'dribbble' ? <Dribbble color={props.color} /> :
    s === 'goodreads' ? <Goodreads color={props.color} /> :
    s === 'linkedin' ? <Linkedin color={props.color} /> :
    s === 'twitter' ? <Twitter color={props.color} /> : null )
  }

  return (
    <Fragment>
      {soc()}
    </Fragment>
  )
}

export default Socials
