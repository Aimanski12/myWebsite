import React from 'react'
import art from '../mockdata/raw/artwork.json'

function Home () {
  console.log(art)
  
  const artwork = () => {
    return art.map((a, i) => {
      return(
        <div className="wrap" 
          style={{background: a.background}}   
          key={i}>
          <img src={a.image} alt=""/>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Hello World</h1>
      <div className="wrap" 
          style={{background: '#4de0db'}}>
          <img src='/radio_live_parallax.webp' alt=""/>
        </div>
      {artwork()}
    </div>
  )
}

export default Home
