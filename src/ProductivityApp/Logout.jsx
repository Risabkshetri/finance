// // import {useDispatch} from 'react-redux'
// // import authService from '../Appwrite/auth'
// // import {logout} from '../Store/authSlice'
// // import { Button } from '../mainComponents'
// // import { useNavigate } from 'react-router-dom'
// // function Logout() {
// //     const dispatch = useDispatch()
// //     const naviagate = useNavigate()
// //     const logoutHandler = () => {
// //         authService.logout().then(() => {
// //             dispatch(logout())
// //             naviagate('/home')
            
// //         })
// //     }
// //   return (
// //     <>
// //     <Button
// //     className='text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105'
// //     onClick={logoutHandler}
// //     >Logout</Button>
// //     </>
// //   )
// // }

// // export default Logout


// import  { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import authService from '../Appwrite/auth';
// import { logout } from '../Store/authSlice';
// import { Button } from '../mainComponents';

// function Logout() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [isLoggingOut, setIsLoggingOut] = useState(false);

//     const logoutHandler = () => {
//         setIsLoggingOut(true);
//         authService.logout()
//             .then(() => {
//                 dispatch(logout());
//                 navigate('/');
//             })
//             .catch((error) => {
//                 console.error('Logout failed:', error);
//             })
//             .finally(() => {
//                 setIsLoggingOut(false);
//             });
//     };

//     const confirmLogout = () => {
//         if (window.confirm('Are you sure you want to log out?')) {
//             logoutHandler();
//         }
//     };

//     return (
//         <Button
//             className='text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center'
//             onClick={confirmLogout}
//             disabled={isLoggingOut}
//         >
//             {isLoggingOut ? (
//                 <>
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Logging out...
//                 </>
//             ) : (
//                 <>
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
//                     </svg>
//                     Logout
//                 </>
//             )}
//         </Button>
//     );
// }

// export default Logout;


import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../Appwrite/auth';
import { logout } from '../Store/authSlice';

function LogoutModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Logout Confirmation</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Are you sure you want to log out? You'll need to log in again to access your account.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900"
            >
              Confirm Logout
            </button>
            <button
              onClick={onClose}
              className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;