import {useDispatch} from 'react-redux'
import authService from '../Appwrite/auth'
import {logout} from '../Store/authSlice'
// import { Navigate } from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            
        })
    }
  return (
    <>
    <button
    className='text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105'
    onClick={logoutHandler}
    >Logout</button>
    </>
  )
}

export default Logout
