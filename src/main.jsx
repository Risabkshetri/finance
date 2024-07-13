import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import ProtectedRoute from './mainComponents/ProtectedRoute.jsx'
import App from './App.jsx'
import './index.css'

// Import components
import { HomePage, AboutUs, Blog, Contact, Login, Signup } from './mainComponents/index.js'
import { Dashboard,CryptoCurrency,Chatbot,Profile,Progress,Social,Note,FinancialCalculation,FinanceHub} from './ProductivityApp/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "dashboard",
        element://( 
        // <ProtectedRoute>
        //   <Dashboard />
        // </ProtectedRoute>)
        <Dashboard />,
        children: [
          {
            index: true,
            element: <Progress />
          },
          {
            path: "social-media",
            element: <Social />
          },
          {
            path: "FinanceHub",
            element: <FinanceHub />,
            children: [
              {
                index: true,
                element: <FinancialCalculation />
              },
              {
                path: "cryptoCurrency",
                element: <CryptoCurrency />
              }
            ]
          },
          {
            path: "notes",
            element: <Note />
          },
          {
            path: "Chatbot",
            element: <Chatbot />
          },
          {
            path: "profile",
            element: <Profile />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)