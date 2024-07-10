import { createContext, useEffect, useState } from "react"

export const coinContext = createContext()


const CoinContextProvider = (props) => {
    const [allcoin, setAllcoin] = useState([])
    const [currency, setCurrency] = useState({
        name: "USD",
        Symbol: "$"
    })

    const fetchAllcoin = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-9Y4ExhJ8HJ9iswJjhdtZTRC4'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency={currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllcoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllcoin()
    },[currency])

    const contextValue = {
        allcoin, setAllcoin, currency,setCurrency
    }
    return (
       <coinContext.Provider value = {contextValue}>
        {props}
       </coinContext.Provider>
    )
}

export default CoinContextProvider;