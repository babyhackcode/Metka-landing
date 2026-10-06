import './Hero.scss'

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
                <a className="hero__link" href="https://t.me/mettkka" target="_blank">
                    EXPLORE THE FINDS
                    <svg width="49" height="37" viewBox="0 0 49 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.7105 20.1777C48.6868 19.2014 48.6868 17.6185 47.7105
                                 16.6421L31.8006 0.732245C30.8243 -0.244065 29.2414 -0.244066
                                 28.265 0.732245C27.2887 1.70856 27.2887 3.29147 28.265 4.26778L42.4072
                                 18.4099L28.265 32.5521C27.2887 33.5284 27.2887 35.1113 28.265 36.0876C29.2414
                                 37.0639 30.8243 37.0639 31.8006 36.0876L47.7105 20.1777ZM0 18.4099L-2.18557e-07
                                 20.9099L45.9427 20.9099L45.9427 18.4099L45.9427
                                 15.9099L2.18557e-07 15.9099L0 18.4099Z" fill="#252525"
                        />
                    </svg>
                </a>
                <img className="hero__quote" src="src/assets/images/hero/hero__quote.png" alt="Quote"/>
            </div>
        </section>
    )
}

export default Hero