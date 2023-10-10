import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
// Mehtod 1
// const router = createBrowserRouter([
//   {
//     path :'/',
//     element : <Layout/>,
//     children : [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path : "contactus",
//         element : <ContactUs/>
//       }
//     ]
//   }
// ])

// Method 2
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contactus' element={<ContactUs />} />
      </Route>
    )
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
