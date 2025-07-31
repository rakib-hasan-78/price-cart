import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Root from './Pages/Root/Root';
import Error from './Pages/Error/Error';
import Dashboard from './Pages/Dashboard/Dashboard';
import Statistics from './Pages/Statistics/Statistics';


const root = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        loader:()=>fetch('data/data.json').then(res=>res.json()),
        element: <Home />
      },

      {

      },

      {
        path:'/dashboard',
        element: <Dashboard />
      },
      {
        path:'/statistics',
        element: <Statistics />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root} />
    {/* <App /> */}
  </StrictMode>,
)
