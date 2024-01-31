import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../index.css'
import ErrorPage from '../Routes/ErrorPage.jsx'
import VentesPage from '../Routes/VentesPage.jsx'
import MentionsPage from '../Routes/MentionsPage.jsx'
import CookiePage from '../Routes/CookiePage.jsx'

// import * as bootstrap from 'bootstrap'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

	{
		path : "/",
		element : <App/>,
    errorElement :  <ErrorPage/>
},{
    path : "/Ventes",
    element : <VentesPage/>
  },{
    path : "/Mentions",
    element : <MentionsPage/>
  },{
    path : "/Cookie",
    element : <CookiePage/>
  }
  ])

const root  = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)
