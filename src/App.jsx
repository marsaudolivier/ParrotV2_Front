import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhoAreWe } from "./components/WhoAreWe";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

import "./index.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <body>
        <article>
          <WhoAreWe />
          <Services />
          <Contact />
        </article>
      </body>
      <Footer />
    </>
  );
}

export default App;
