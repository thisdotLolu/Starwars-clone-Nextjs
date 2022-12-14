import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}

export default MyApp
