import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignIn from './assets/componets/SignIn.jsx'
import Home from './assets/componets/Home.jsx'
import Register from './assets/componets/Register.jsx'
import Login from './assets/componets/Login.jsx'
const router =createBrowserRouter([
{path:'/',Component:App,
  children:[
    {
      index:true,
      Component:Home
    },
    {
      path:'sign-in',
      Component:SignIn
    },
    {path:'register',Component:Register},
    {path:'login',Component:Login}
  ]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
