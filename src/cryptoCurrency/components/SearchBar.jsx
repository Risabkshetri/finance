import { useState, useContext } from 'react'
import { Input, Button } from '../../mainComponents/index'
import { coinContext } from '../context/CryptoContext'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const { allcoin, setDisplaycoin } = useContext(coinContext)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim() === '') {
      setDisplaycoin(allcoin)
    } else {
      const filteredCoins = allcoin.filter(coin => 
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setDisplaycoin(filteredCoins)
    }
  }

  return (
    <div className='w-full px-4 sm:px-6 lg:px-8 py-8 my-4 '>
      <div className='max-w-3xl mx-auto'>
        <form 
          onSubmit={handleSearch}
          className='flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden '
        >
          <Input 
            type='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for cryptocurrencies...'
            className='flex-grow px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none '
          />
          <Button 
            type='submit'
            className='w-full flex sm:flex-row items-center sm:w-auto px-6 py-3 bg-indigo-600 text-white sm:justify-center font-medium hover:bg-indigo-700 transition duration-150 ease-in-out'
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar