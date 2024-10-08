import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
// import ProtectedRoute from './mainComponents/ProtectedRoute.jsx'
import App from './App.jsx'
import './index.css'

// Import components
import { HomePage, AboutUs, Blog, Contact, LoginLayout, SignupLayout, PrivacyPolicy, TermsAndConditions } from './mainComponents/index.js'
import { Dashboard,CryptoCurrency,Chatbot,Profile,Social,Note,FinancialCalculation, FinanceHome, FinanceHub, DashboardContent, Logout, ProgressLayout } from './ProductivityApp/index.js'

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
        element: <LoginLayout />
      },
      {
        path: "signup",
        element: <SignupLayout />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardContent />
          },
          {
            path: "progress",
            element: <ProgressLayout />
          },
          {
            path: "social",
            element: <Social />,
          },
          {
            path: "finance",
            element: <FinanceHome />,
            children: [
              {
                index: true,
                element: <FinanceHub />,
              },
              {
                path: "cryptocurrency",
                element: <CryptoCurrency />
              },
              {
                path: "financial-calculation",
                element: <FinancialCalculation />
              },
            ]
          },
          {
            path: "notes",
            element: <Note />
          },
          {
            path: "chatbot",
            element: <Chatbot />
          },
          {
            path: "profile",
            element: <Profile/>
          },
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)