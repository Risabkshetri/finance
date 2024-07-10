import { Navbar } from '../mainComponents/index'
import SearchBar from './components/SearchBar'
import CryptoData from './components/CryptoData'


function Crypto() {
  return (
    <>
    <Navbar Navlist={['Home', 'Blog', 'Contact']}/>
    <SearchBar />
    <CryptoData />
    </>
  )
}

export default Crypto