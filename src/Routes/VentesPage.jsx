import { useRouteError } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


export default function VentesPage(){

	const error = useRouteError()

	console.log(error)

	return(
	<div>
   
       <Header /> 
        <article>
           <h1>Page De vente véhicule</h1>                           
                                   
        <Footer />
        </article> 

    </div>
  )
}