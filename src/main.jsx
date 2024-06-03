import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Catalog from './Components/Catalog/Catalog.jsx'
import Main from './Components/main/Main.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'',
      element:<Main/>
    },{
      path:"Catalog",
      element:<Catalog/>
    }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
