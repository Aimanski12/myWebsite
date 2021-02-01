import '../../styles/globals.css'






import {AppDataContext} from '../context/appData'

function MyApp({ Component, pageProps }) {
  return(
    <AppDataContext>
      <Component {...pageProps} />
    </AppDataContext>
  ) 
}

export default MyApp
