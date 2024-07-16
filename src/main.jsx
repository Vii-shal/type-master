import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Typebox from './Typebox/Typebox.jsx'
import Result from './Typebox/Result.jsx'
import Home from './Home/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='typingresult' element={<Result/>}/>
      <Route path='typingbox' element={<Typebox/>}/>
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
        
    </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
