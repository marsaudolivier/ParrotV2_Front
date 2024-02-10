import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../index.css'
import ErrorPage from '../Routes/ErrorPage.jsx'
import VentesPage from '../Routes/VentesPage.jsx'
import MentionsPage from '../Routes/MentionsPage.jsx'
import CookiePage from '../Routes/CookiePage.jsx'
import LoginPage from '../Routes/LoginPage.jsx'
import AdminPage from '../Routes/AdminPage.jsx'
import EmployePage from '../Routes/EmployePage.jsx'


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
  },
  {
    path : "/Login",
    element : <LoginPage/>
  },//dashbord admin si role= admin
  {
    path : "/Admin",
    element : <AdminPage/>
  },
  {
    path : "/Employe",
    element : <EmployePage/>
  },
  



  ])

const root  = ReactDOM.createRoot(document.getElementById('root'))

root.render(
		<RouterProvider router={router}/>
)
