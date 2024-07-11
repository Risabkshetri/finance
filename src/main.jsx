import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Crypto from './cryptoCurrency/Crypto.jsx'
import { HomePage} from './mainComponents/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "./HomePage",
        element: <HomePage />
      },
      {
        path: "./Crypto",
        element: <Crypto />
      },
    ]
 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
