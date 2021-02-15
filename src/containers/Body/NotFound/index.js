import React, {useContext} from 'react'
import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'
import Icons from '../../../components/GlobalComponents/SocialIcons'
import {motion} from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  const {AppState, SetAppState} = useContext(AppData)
  const data = AppState.pageData.data
  console.log(data)
  return (
    <> 
    { AppState.pageData.isSet ? 
      <div className="notfound-wrapper"
        style={{background: `url(${data.background}) no-repeat center center`, backgroundSize: 'cover'}}>
        <div className="notfound-backer content-center">
          <h2 className='font-1 s1a'>404 Error</h2>
          <span className='font-2 s4b'>Sorry man! The page you are looking for is not on our file.</span>

          <Link href='/' scroll={false}>
            <motion.a 
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              className='font-1 s7a'
              onClick={()=>{
                Anim.Helpers.hidshowbody('hidden')
                SetAppState.setMenuTransitions({ isTransitioning: true, delay: 800 })
              }}>Back to Home</motion.a>
          </Link>

          <ul className="notfound-socials content-center">
            {
              data.socials.icons.map((s, i) => {
                return (
                  <li className='notfound-socials-wrapper' key={i}>
                    <motion.div  variants={'Anim.MenuButton.slideIcons'}>
                      <a href={s.link} target='_blank' rel="noreferrer noopener">
                        <Icons svg={s.svg} 
                          front={data.socials.front} 
                          back={data.socials.back}/>
                      </a>
                    </motion.div>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div> : null
    }
    </>
  )
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: "0px 0px 6px rgb(151,230,255)",
    boxShadow: "0px 0px 6px rgb(151,230,255)",
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  }
}