
// import Crypto from "./cryptoCurrency/Crypto"
import { Outlet } from "react-router-dom";
import { Footer,  Navbar, Button } from "./mainComponents";

function App() {
  
  return (
    <> 
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
