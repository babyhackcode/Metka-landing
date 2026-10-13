import './Hero.scss'
import Links from "../Links/Links.jsx";
import heroTitle from '../../assets/images/hero/hero__title.png'
import heroCharacter from '../../assets/images/hero/hero__image.png'
import heroSideTextLeft from '../../assets/images/hero/hero__side-text--left.png'
import heroSideTextRight from '../../assets/images/hero/hero__side-text--right.png'
import heroQuote from '../../assets/images/hero/hero__quote.png'

function Hero() {
    return (
        <section className="hero">
            <div className="hero__inner">
                <h1 className="hero__title">
                    <img src={heroTitle} alt="Стиль - это все."/>
                </h1>
                <img className="hero__character" src={heroCharacter} alt="Malinsent image" />
                <img className="hero__side-text hero__side-text--left" src={heroSideTextLeft} alt="Don't stop find" />
                <img className="hero__side-text hero__side-text--right" src={heroSideTextRight} alt="Don't stop find" />
                <Links
                    className = "hero__link"
                    href = 'https://t.me/mettkka'
                    color = '--black'
                >
                    EXPLORE THE FINDS
                </Links>
                <img className="hero__quote" src={heroQuote} alt="Quote"/>
            </div>
        </section>
    )
}

export default Hero