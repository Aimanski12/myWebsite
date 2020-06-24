import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'
import ButtonEnvelop from '../../components/Svg/ButtonEnvelop/ButtonEnvelop'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {animateHeaderPage} from '../../utils/contact/animateHeaderA'
import {useForm, submit} from '../../utils/contact/formValidations'
import ContactForm from '../../components/ContactForm/ContactForm'
import {formData} from '../../utils/contact/formsData'
import ThankYouMes from '../../components/ThankYouMes/ThankYouMes'
import {setNavWidth, resize} from '../../utils/common/resize'
import './ContactPage.css'

function ContactPage(props) {

  const [vals, inputChange] = useForm({})
  const [conf, setConf] = useState(false)
  const [anim, setAnim] = useState(false)

  useEffect(()=>{
    // animate page
    if(!anim){
      animateHeaderPage()
    }

    setTimeout(()=>{
      setAnim(true)
    }, 1200)
    // set nav max-width 1600
    window.addEventListener('resize', ()=>resize(true))
    setNavWidth(true)
  })

  const submitForm = async (e) => {
    let res = await submit(e, vals)
     if(res) setConf(true)
  }

  return (
    <Fragment>
      {/* <header className='header'> */}
      <Header 
        click={(n)=> props.click(n)}
        page={'one'}
        img={3}
        maintext={`Let's connect.`}
        navs={props.navs}/>
      {/* </header> */}

      <section className='content-center content-align connect-form'>
        <SectionHeader 
          color='green'
          title='Message Me'
          quote='The future belongs to those who learn more skills and combine them in creative ways.'
          author='Oscar Wilde' />
          <div className="content-align content-center message-form-wrapper">
            { !conf ? 
              <form className='message-form' onSubmit={(e)=>submitForm(e)}>
                <div className='input-container'>
                  <ContactForm 
                    formData={formData}
                    inputChange={(e,f)=>inputChange(e,f)} />
                </div>
                <div className='form-button'>
                  <div className="textAlert content-center">
                    <p className='messageAlert'>* required<span></span></p>
                    <p>by clicking submit you argee the 
                      <Link to='/privacy-policy' target='_blank' className='orange'><span className='privacy'> Privacy Policy</span></Link></p>
                  </div>
                  <ButtonEnvelop />
                </div>
              </form> :
              <ThankYouMes />
            }
          </div>
        </section>
      <Footer 
        click={(n)=> props.click(n)}
        navs={props.navs}/>
    </Fragment>
  )
}

export default ContactPage
