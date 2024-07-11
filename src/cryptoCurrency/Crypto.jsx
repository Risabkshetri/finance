import { Footer, Navbar } from '../mainComponents/index'
import CryptoData from './components/CryptoData'
import CoinContextProvider from './context/CryptoContext'



function Crypto() {
  return (
    <CoinContextProvider>
    <Navbar Navlist={['Home', 'Blog', 'Contact']}
    className='sticky top-0'
    />
    <CryptoData />
    <Footer />
    </CoinContextProvider>
  )
}

export default Crypto