import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
// import './index.css'
import Login from './login/login.jsx'
import Singup from './login/signup.jsx'
import Admin from './welcome/welcome.jsx'
import Acceuil from './pages/acceuil.jsx'
import Projet from './pages/projet.jsx'
import Apropos from './pages/apropos.jsx'
import Contact from './pages/contact.jsx'
import Publication from './pages/publication.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom' 
import { Toaster } from 'react-hot-toast';
import Plus from './pages/plus.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Acceuil/>
  },
  {
    path:'admLogin',
    element:<Login/>
  },
   {
    path:'pub',
    element:<Publication/>
  },
   {
    path:'signup',
    element:<Singup/>
  },
  {
    path:'welcome',
    element:<Admin/>
  }, 
  {
    path:'projet',
    element:<Projet/>
  },
  {
    path:'apropos',
    element:<Apropos/>
  },
   {
    path:'contact',
    element:<Contact/>
  },
   {
    path:'plus',
    element:<Plus/>
  },
  {
    path:'*',
    element:(
      <div><h1>404</h1></div>
    )
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={router}/> 
  </React.StrictMode>
)
