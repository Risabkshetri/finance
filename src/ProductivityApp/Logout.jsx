import {useDispatch} from 'react-redux'
import authService from '../Appwrite/auth'
import {logout} from '../Store/authSlice'
import { Navigate } from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            
        })
    }
  return (
    <span
    onClick={logoutHandler}
    >Logout</span>
  )
}

export default Logout
