import { Footer, Navbar } from '../mainComponents/index'
import CryptoData from './components/CryptoData'


function Crypto() {
  return (
    <>
    <Navbar Navlist={['Home', 'Blog', 'Contact']}
    className='sticky top-0'
    />
    <CryptoData />
    <Footer />
    </>
  )
}

export default Crypto