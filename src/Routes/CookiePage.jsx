import { useRouteError } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


export default function MentionsPage(){

	const error = useRouteError()

	console.log(error)

	return(
	<div>
   
       <Header /> 
        <article>
           <h1>Page a coookieeeeee</h1>                           
                                   
        <Footer />
        </article> 

    </div>
  )
}