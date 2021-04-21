
import {Form} from './formValidation'
import {SendEmail} from './sendEmail'
import {SessionStorage} from './sessionStorage'

export const Helpers = (function(){
  return {
    Form: Form,
    SendEmail: SendEmail,
    SessionStorage: SessionStorage,
  }
})()