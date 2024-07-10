import React, { useContext } from 'react'
import { coinContext } from '../context/CryptoContext'

function CryptoData() {
    const {setCurrency} = useContext(coinContext)

    const currencyHandleler = (e) => {
        switch(e.target.value){
            case "usd": {
                setCurrency({name:"usd",Symbol:"$"})
                break;
            }            
            case "eur": {
                setCurrency({name:"eur", Symbol:"€"})
                break;
            }
            case "inr": {
                setCurrency({name:"inr", Symbol:"₹"})
                break;
            }
            default: setCurrency({name:"usd", symbol: "$"})
        }
    }
  return (
    <div>
        <select onChange={currencyHandleler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
    </div>
  )
}

export default CryptoData