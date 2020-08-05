import React, {useContext} from 'react'
import {PageData} from '../../utils/context/pageContext'
import Title from './Components/Title'
import Description from './Components/Description'


function SectionBlocks (props) {
  const {withBlocks, projectBlocks} = useContext(PageData)
  let data = findData(props.title, withBlocks, projectBlocks)

  let blocks = 
    <div className='section-block-background'
      style={{background: `url('${data.background}') repeat center top`}}>
      <Title 
        title={data.blockTitle}
        textcolor={data.textcolor}/>
      <Description 
        textcolor={data.textcolor}
        desc={data.blockDesc}
        withArrow={data.withArrow}
        colors={data.textcolor}/>
    </div>

  return (
    <section className='section-block-container' 
      style={{backgroundColor: data.backgroundColor}}>
      {blocks}
    </section>
  )
}

export default SectionBlocks;


const findData = (title, withBlocks, projectBlocks) => {
  if(title === 'project'  || title === 'skills') return withBlocks 
  if(title === 'view more') return projectBlocks
}