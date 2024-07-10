import { Logo } from './index'
import { Link } from 'react-router-dom'

function Navbar({Navlist = ['Home', 'About', 'Blog', 'Contact']}) {
  return (
    <div className='flex flex-row gap-10 items-center justify-between px-4  bg-white w-full h-12  shadow-lg'>
        <div>
            <Logo/>
        </div>
        <div className='flex gap-10'>
        {Navlist.map((item) => (
                <Link key={item} to='' className='rounded-xl py-1 px-4 hover:bg-slate-300'>{item}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar