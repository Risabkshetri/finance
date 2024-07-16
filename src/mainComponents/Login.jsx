// import {useState} from 'react'
// import {Link, useNavigate} from 'react-router-dom'
// import { login as authLogin } from '../Store/authSlice'
// import {Button, Input, Logo} from "./index"
// import {useDispatch} from "react-redux"
// import authService from "../Appwrite/auth"
// import {useForm} from "react-hook-form"
// import Loader from './Loader'

// function Login() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const {register, handleSubmit} = useForm()
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)

//     const login = async(data) => {
//         setError("")
//         setLoading(true)
//         try {
//             const session = await authService.login(data)
//             if (session) {
//                 const userData = await authService.getCurrentUser()
//                 if(userData) dispatch(authLogin(userData));
//                 navigate("/dashboard")
//             }
//         } catch (error) {
//             console.log("Login error:", error);
//             setError(error.message || "An error occurred during login. Please try again.")
//         } finally {
//             setLoading(false)
//         }
//     }

//   return (
//     <div
//     className='flex items-center justify-center w-full mb-6'
//     >
//         <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 pt-4 border border-black/10`}>
//         <div className='flex items-end justify-end'>
//         <Link to='/'>✖</Link>
//       </div>
//         <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//         </div>
//         <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//         <p className="mt-2 text-center text-base text-black/60">
//                     Don&apos;t have any account?&nbsp;
//                     <Link
//                         to="/signup"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//         </p>
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//         <form onSubmit={handleSubmit(login)} className='mt-8'>
//             <div className='space-y-5'>
//                 <Input
//                 label="Email: "
//                 placeholder="Enter your email"
//                 type="email"
//                 {...register("email", {
//                     required: true,
//                     validate: {
//                         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                         "Email address must be a valid address",
//                     }
//                 })}
//                 />
//                 <Input
//                 label="Password: "
//                 type="password"
//                 placeholder="Enter your password"
//                 {...register("password", {
//                     required: true,
//                 })}
//                 />
//                 <Button
//                 type="submit"
//                 className="w-full"
//                 >{loading ? <Loader /> : 'Sign in'}</Button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Login



import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../Store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../Appwrite/auth"
import {useForm} from "react-hook-form"
import Loader from './Loader'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Check for existing session on component mount
        const checkExistingSession = async () => {
            try {
                const user = await authService.getCurrentUser()
                if (user) {
                    // If there's an existing session, redirect to dashboard
                    navigate("/dashboard")
                }
            } catch (error) {
                console.error("Error checking existing session:", error)
            }
        }
        checkExistingSession()
    }, [navigate])

    const login = async(data) => {
        setError("")
        setLoading(true)
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/dashboard")
            }
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message || "An error occurred during login. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
            <div
            className='flex items-center justify-center w-full mb-6'
            >
                <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 pt-4 border border-black/10`}>
                <div className='flex items-end justify-end'>
                <Link to='/'>✖</Link>
              </div>
                <div className="mb-2 flex justify-center">
                            <span className="inline-block w-full max-w-[100px]">
                                <Logo width="100%" />
                            </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                        />
                        <Button
                        type="submit"
                        className="w-full"
                        >{loading ? <Loader /> : 'Sign in'}</Button>
                    </div>
                </form>
                </div>
            </div>
          )
}

export default Login