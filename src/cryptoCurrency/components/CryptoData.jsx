import { useContext, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { coinContext } from "../context/CryptoContext";
import SearchBar from "./SearchBar";



function CryptoData() {
  const { setCurrency, currency, allcoin, displaycoin, setDisplaycoin } =
    useContext(coinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", Symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", Symbol: "₹" });
        break;
      }
      default:
        setCurrency({ name: "usd", Symbol: "$" });
    }
  };

  useEffect(() => {
    if (allcoin && allcoin.length > 0) {
      setDisplaycoin(allcoin.slice(0, 10));
      console.log(displaycoin.length);
    }
  }, [allcoin, setDisplaycoin]);

  if (!displaycoin) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchBar />
      <div className="mb-4">
        <select
          onChange={currencyHandler}
          className="block appearance-none w-auto bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
        > <option>Select Currency</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Coins
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                24H change
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {displaycoin.map((item, index) => (
              <tr
                key={item.id || index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{item.market_cap_rank}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span>
                      {item.name} - {item.symbol.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {currency.Symbol} {item.current_price.toLocaleString()}
                </td>
                <td
                  className={`px-6 py-4 ${
                    item.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td className="px-6 py-4">
                  {currency.Symbol} {item.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {displaycoin.length <= 10 ? (
          <button
            onClick={() => setDisplaycoin(allcoin)}
            className="flex items-center justify-center w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 ease-in-out"
          >
            <span>Show more</span>
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
        ) : (
          <button
            onClick={() => setDisplaycoin(allcoin.slice(0, 10))}
            className="flex items-center justify-center w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 ease-in-out"
          >
            <span>Show less</span>
            <ChevronUpIcon className="w-5 h-5 ml-1" />
          </button>
        )}
      </div>
    </>
  );
}

export default CryptoData;
