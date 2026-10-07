import MuteButton from "./MuteButton/MuteButton.jsx";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import Collection from "./Collection/Collection.jsx";
import Statement from "./Statement/Statement.jsx";
import Cta from "./Cta/Cta.jsx";
import Footer from "./Footer/Footer.jsx";

function Metka() {
    return (
        <>
          <MuteButton />
          <Header />
          <main className="main">
              <Hero />
              <Collection />
              <Statement />
              <Cta />
          </main>
          <Footer />
        </>
    )
}

export default Metka;