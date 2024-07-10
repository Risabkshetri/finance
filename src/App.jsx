
import Crypto from "./cryptoCurrency/Crypto"
import CoinContextProvider from './cryptoCurrency/context/CryptoContext'
function App() {

  return (
    <>
    <CoinContextProvider>
     <Crypto />
     </CoinContextProvider>
    </>
  )
}

export default App
