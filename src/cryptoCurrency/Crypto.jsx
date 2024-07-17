import CryptoData from './components/CryptoData'
import CoinContextProvider from './context/CryptoContext'



function Crypto() {
  return (
    <CoinContextProvider>
    <CryptoData />
    </CoinContextProvider>
  )
}

export default Crypto