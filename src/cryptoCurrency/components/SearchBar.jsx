import React from 'react'
import { Input, Button } from '../../mainComponents/index'

function SearchBar() {
  return (
    <div className='w-full h-auto px-6 py-10 my-4 flex  items-center justify-center'>
        <div className='bg-slate-100 h-26 w-1/2 flex flex-row px-4 py-6'>
       <Input 
       type='search'
       placeholder={'Bitcoin'}
       className='border-black border-l rounded-r-none h-10'
        
       />
       <Button className='hover:bg-pink-500' onClick={''}>Search</Button>
        
       </div>
    </div>
  )
}

export default SearchBar