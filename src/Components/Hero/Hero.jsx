import './Hero.scss'
import Links from "../Cta/Links.jsx";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__inner">
                <h1 className="hero__title">
                    <img src="src/assets/images/hero/hero__title.png" alt="Стиль - это все."/>
                </h1>
                <img className="hero__character" src="src/assets/images/hero/hero__image.png" alt="Malinsent image" />
                <img className="hero__side-text hero__side-text--left" src="src/assets/images/hero/hero__side-text--left.png" alt="Don't stop find" />
                <img className="hero__side-text hero__side-text--right" src="src/assets/images/hero/hero__side-text--right.png" alt="Don't stop find" />
                <Links
                    className = "cta__link"
                    href = 'https://t.me/mettkka'
                    color = '--black'
                >
                    EXPLORE THE FINDS
                </Links>
                <img className="hero__quote" src="src/assets/images/hero/hero__quote.png" alt="Quote"/>
            </div>
        </section>
    )
}

export default Hero