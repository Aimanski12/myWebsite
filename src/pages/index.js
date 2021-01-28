import React from 'react'
import art from '../mockdata/raw/artwork.json'
import radio from '../mockdata/raw/radio-live.json'
import book from '../mockdata/raw/book-worm.json'
import foto from '../mockdata/raw/foto-pics.json'
import news from '../mockdata/raw/news-box.json'
import movie from '../mockdata/raw/movie-box.json'

function Home () {
  // console.log(movie)
  
  // const artwork = () => {
  //   return art.map((a, i) => {
  //     return(
  //       <div className="wrap" 
  //         style={{background: a.background}}   
  //         key={i}>
  //         <img src={a.image} alt=""/>
  //       </div>
  //     )
  //   })
  // }

  return (
    <div>
      <h1>Hello World</h1>
      <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.hero.link} alt={radio.hero.alt}/>
        <h1>{radio.hero.name}</h1>
        <p>{radio.hero.description}</p>
      </div>
      <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.banner.link} alt={radio.banner.alt}/>
        <h1>{radio.banner.name}</h1>
        <p>{radio.banner.description}</p>
      </div>
      <div className="wrap" 
        style={{background: '#4de0db', height: "1700px" }}>
        <img src={radio.parallax.link} alt={radio.parallax.alt}/>
      </div>
      <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.sketch[0].link} alt={radio.sketch[0].alt}/>
        <h1>{radio.sketch[0].name}</h1>
        <p>{radio.sketch[0].description}</p>
      </div>
      <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.sketch[1].link} alt={radio.sketch[1].alt}/>
        <h1>{radio.sketch[1].name}</h1>
        <p>{radio.sketch[1].description}</p>
      </div>
      <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.designs.link} alt={radio.designs.alt}/>
        <h1>{radio.designs.name}</h1>
        <p>{radio.designs.description}</p>
      </div>
      <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.screens[0].link} alt={radio.screens[0].alt}/>
        <h1>{radio.screens[0].name}</h1>
        <p>{radio.screens[0].description}</p>
      </div>
      <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.screens[1].link} alt={radio.screens[1].alt}/>
        <h1>{radio.screens[1].name}</h1>
        <p>{radio.screens[1].description}</p>
      </div>
      {/* <div className="wrap" 
        style={{background: '#4de0db'}}>
        <img src={radio.screens[2].link} alt={radio.screens[2].alt}/>
        <h1>{radio.screens[2].name}</h1>
        <p>{radio.screens[2].description}</p>
      </div> */}
      {/* {artwork()} */}
    </div>
    
  )
}

export default Home
