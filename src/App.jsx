import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhoAreWe } from "./components/WhoAreWe";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Avis } from "./components/Avis";
import { Carte } from "./components/Carte";
import "./index.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MentionsPage from './Routes/MentionsPage';


function App() {
  return (
    <>
   <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route exact path="/mentions" component={MentionsPage}/>
        {/* Ajoutez d'autres routes selon vos besoins */}
      </Switch>
    </Router>

      <Header />
      <body>
        <article>
          <WhoAreWe />
          <Services />
          <Contact />
          <Avis />
          <Carte />
        </article>
      </body>
      <Footer />
    </>
  );
}
export default App;

