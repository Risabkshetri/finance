import { createContext, useEffect, useState } from "react"

export const coinContext = createContext();

const CoinContextProvider = (props) => {
    const [allcoin, setAllcoin] = useState([])
    const [displaycoin, setDisplaycoin] = useState([])
    const [currency, setCurrency] = useState({
        name: "usd",
        Symbol: "$"
    })

    const fetchAllcoin = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-9Y4ExhJ8HJ9iswJjhdtZTRC4'}
        };
        
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name.toLowerCase()}`, options);
            const data = await response.json();
            if (Array.isArray(data)) {
                setAllcoin(data);
                setDisplaycoin(data);
            } else {
                console.error('API did not return an array:', data);
                setAllcoin([]);
                setDisplaycoin([]);
            }
        } catch (err) {
            console.error('Error fetching coin data:', err);
            setAllcoin([]);
            setDisplaycoin([]);
        }
    }

    useEffect(() => {
        fetchAllcoin()
    }, [currency])

    const contextValue = {
        allcoin, setAllcoin, displaycoin, setDisplaycoin, currency, setCurrency
    }

    return (
        <coinContext.Provider value={contextValue}>
            {props.children}
        </coinContext.Provider>
    )
}

export default CoinContextProvider;