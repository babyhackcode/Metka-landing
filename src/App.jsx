function App() {
    return (
        <>
          <button className="mute__sound">
                <svg className="mute__button" width="18" height="17" viewBox="0 0 18 17" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M3.60618 4.00134L7.27011 0.673639C8.9221 -0.827627
                          11.5704 0.343926 11.5704 2.5759V14.4241C11.5704 16.6561 8.9221
                          17.8276 7.27011 16.3264L3.60618 12.9987H3.214C1.43987 12.9987 0
                          11.5597 0 9.78533V7.21467C0 5.44027 1.43987 4.00134 3.214 4.00134H3.60618ZM8.13136 1.62477C8.96057 0.874138
                          10.2848 1.45959 10.2848 2.5759V14.4241C10.2848 15.5404 8.96057 16.1259 8.13136 15.3752L4.29386
                          11.8817C4.17816 11.777 4.02393 11.7133 3.8568 11.7133H3.214C2.14695
                          11.7133 1.2856 10.8502 1.2856 9.78533V7.21467C1.2856 6.14977 2.14695 5.28667 3.214
                          5.28667H3.8568C4.02393 5.28667 4.17816 5.22304 4.29386 5.11828L8.13136 1.62477Z"
                          fill="black"/>
                    <path
                        d="M13.0425 6.11766C13.2931 5.86638 13.7045 5.86638
                        13.9552 6.11766L15.4272 7.59127L16.8993 6.11766C17.1499 5.86638
                        17.5613 5.86638 17.812 6.11766C18.0627 6.3683 18.0627 6.77571
                        17.812 7.02635L16.3335 8.5L17.812 9.97365C18.0627 10.2243 18.0627 10.6317
                        17.812 10.8823C17.5613 11.1336 17.1499 11.1336 16.8993 10.8823L15.4272 9.40873L13.9552
                        10.8823C13.7045 11.1336 13.2931 11.1336 13.0425 10.8823C12.7918 10.6317 12.7918
                        10.2243 13.0425 9.97365L14.5209 8.5L13.0425 7.02635C12.7918 6.77571
                        12.7918 6.3683 13.0425 6.11766Z"
                        fill="black"/>
                </svg>
            </button>
          <header className="header">
                <div className="header__scroll-wrapper">
                    <div className="header__sticky">
                        <div className="header__background">
                            <div className="header__container">
                                <img className='header__logo' src="src/assets/logo/White-logo.png" alt="Metka"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
          <main className="main">
                <section className="hero">
                    <div className="hero__inner">
                        <h1 className="hero__title">
                            <img src="src/assets/images/hero/hero__title.png" alt="Стиль - это все."/>
                        </h1>
                        <img className="hero__character" src="src/assets/images/hero/hero__image.png"
                             alt="Malinsent image"/>
                        <img className="hero__side-text hero__side-text--left"
                             src="src/assets/images/hero/hero__side-text--left.png" alt="Don't stop find"/>
                        <img className="hero__side-text hero__side-text--right"
                             src="src/assets/images/hero/hero__side-text--right.png" alt="Don't stop find"/>
                        <a className="hero__link" href="https://t.me/mettkka" target="_blank">
                            EXPLORE THE FINDS
                            <svg width="49" height="37" viewBox="0 0 49 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.7105 20.1777C48.6868 19.2014 48.6868 17.6185 47.7105
                        16.6421L31.8006 0.732245C30.8243 -0.244065 29.2414 -0.244066
                        28.265 0.732245C27.2887 1.70856 27.2887 3.29147 28.265 4.26778L42.4072
                        18.4099L28.265 32.5521C27.2887 33.5284 27.2887 35.1113 28.265 36.0876C29.2414
                        37.0639 30.8243 37.0639 31.8006 36.0876L47.7105 20.1777ZM0 18.4099L-2.18557e-07
                        20.9099L45.9427 20.9099L45.9427 18.4099L45.9427
                        15.9099L2.18557e-07 15.9099L0 18.4099Z" fill="#252525"/>
                            </svg>
                        </a>
                        <img className="hero__quote" src="src/assets/images/hero/hero__quote.png" alt="Quote"/>
                    </div>
                </section>
                <section className="collection">
                    <div className="collection__inner">
                        <h2 className="collection__title">СТИЛЬ ЕСТЬ <br/> НЕ У ВСЕХ.</h2>
                        <div className="collection__gallery">
                            <h3 className="collection__subtitle">THE FINDS</h3>
                            <div className="collection__top">
                                <article className="product product--large">
                                    <div className="product__wrapper">
                                        <img className="product__image"
                                             src="src/assets/images/collection/collection__image-main.jpg"
                                             alt="Рубашка"/>
                                    </div>
                                    <div className="product__info">
                                        <p className="product__name">РУБАШКА / белая строчка</p>
                                        <p className="product__price">1300₽</p>
                                    </div>
                                </article>
                                <div className="collection__side-products">
                                    <article className="product">
                                        <div className="product__wrapper">
                                            <img className="product__image"
                                                 src="src/assets/images/collection/collection__side-image--up.jpg"
                                                 alt="Галстук"/>
                                        </div>
                                        <div className="product__info">
                                            <p className="product__name">ГАЛСТУК</p>
                                            <p className="product__price">399₽</p>
                                        </div>
                                    </article>
                                    <article className="product">
                                        <div className="product__wrapper">
                                            <img className="product__image"
                                                 src="src/assets/images/collection/collection__side-image--down.jpg"
                                                 alt="ПЛАТОК"/>
                                        </div>
                                        <div className="product__info">
                                            <p className="product__name">ПЛАТОК</p>
                                            <p className="product__price">350₽</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="collection__bottom">
                                <article className="product">
                                    <div className="product__wrapper">
                                        <img className="product__image"
                                             src="src/assets/images/collection/collection__bottom-image--left.jpg"
                                             alt="Кулон"/>
                                    </div>
                                    <div className="product__info">
                                        <p className="product__name">КУЛОН №8</p>
                                        <p className="product__price">899₽</p>
                                    </div>
                                </article>
                                <article className="product product--large">
                                    <div className="product__wrapper">
                                        <img className="product__image"
                                             src="src/assets/images/collection/collection__bottom-image--main.jpg"
                                             alt="Рубашка"/>
                                    </div>
                                    <div className="product__info">
                                        <p className="product__name">РУБАШКА / кедровая лагуна</p>
                                        <p className="product__price">450₽</p>
                                    </div>
                                </article>
                                <article className="product">
                                    <div className="product__wrapper">
                                        <img className="product__image"
                                             src="src/assets/images/collection/collection__bottom-image--right.jpg"
                                             alt="Лонг-топ"/>
                                    </div>
                                    <div className="product__info">
                                        <h4 className="product__name">ЛОНГ-ТОП / дырка</h4>
                                        <p className="product__price">499₽</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="statement">
                    <div className="statement__inner">
                        <div className="statement__top">
                            <div className="statement__character">
                                <img className="statement__image" src="src/assets/images/statement/statement__image.png"
                                     alt="Ты не обязан быть как все!"/>
                            </div>
                            <div className="statement__content">
                                <h2 className="statement__title">ТЫ НЕ ОБЯЗАН <br/> БЫТЬ КАК ВСЕ!</h2>
                                <p className="statement__subtitle subtitle">
                                    Настоящий стиль – это не
                                    <span className="subtitle__line-through"> логотип на груди. </span> <br/>
                                    Настоящий стиль – когда на тебя смотрят и думают: <br/>
                                    <span className="subtitle__red-decoration"> Daaamn. Где он это нашел?! </span>
                                </p>
                            </div>
                        </div>
                        <div className="statement__bottom">
                            <ul className="statement__list">
                                <li className="statement__item">
                                    <p className="statement__text"> Бой быков <br /> может быть </p>
                                    <img className="statement__art"
                                         src="src/assets/images/statement/statement__art-wide.png" alt="art"/>
                                </li>
                                <li className="statement__item">
                                    <p className="statement__text"> Бокс может <br /> быть </p>
                                    <img className="statement__art"
                                         src="src/assets/images/statement/statement__art-wide.png" alt="art"/>
                                </li>
                                <li className="statement__item">
                                    <p className="statement__text"><span style={{color: '#E9ACB3'}}> Любовь </span> <br /> тоже </p>
                                    <img className="statement__art" src="src/assets/images/statement/statement__art.png"
                                         alt="art"/>
                                </li>
                                <li className="statement__item statement__item--wide">
                                    <p className="statement__text"> Открываем банку сардин — и это </p>
                                    <img className="statement__art" src="src/assets/images/statement/statement__art.png"
                                         alt="art"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <div className="cta__inner">
                        <h2 className="cta__title"> НАЙДИ СВОË. </h2>
                        <p className="cta__subtitle">
                            Новые находки появляются постоянно <br/>
                            Некоторые вещи появляются только один раз.
                        </p>
                        <div className="cta__links">
                            <a className="cta__link" href="https://t.me/mettkka" target="_blank">
                                TELERGAM
                                <svg width="49" height="37" viewBox="0 0 49 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.7105 20.1777C48.6868 19.2014 48.6868 17.6185 47.7105
                            16.6421L31.8006 0.732245C30.8243 -0.244065 29.2414 -0.244066
                            28.265 0.732245C27.2887 1.70856 27.2887 3.29147 28.265 4.26778L42.4072
                            18.4099L28.265 32.5521C27.2887 33.5284 27.2887 35.1113 28.265 36.0876C29.2414
                            37.0639 30.8243 37.0639 31.8006 36.0876L47.7105 20.1777ZM0 18.4099L-2.18557e-07
                            20.9099L45.9427 20.9099L45.9427 18.4099L45.9427
                            15.9099L2.18557e-07 15.9099L0 18.4099Z" fill="#ffffff"/>
                                </svg>
                            </a>
                            <a className="cta__link" href="" target="_blank">
                                SHOP
                                <svg width="49" height="37" viewBox="0 0 49 37" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.7105 20.1777C48.6868 19.2014 48.6868 17.6185 47.7105
                            16.6421L31.8006 0.732245C30.8243 -0.244065 29.2414 -0.244066
                            28.265 0.732245C27.2887 1.70856 27.2887 3.29147 28.265 4.26778L42.4072
                            18.4099L28.265 32.5521C27.2887 33.5284 27.2887 35.1113 28.265 36.0876C29.2414
                            37.0639 30.8243 37.0639 31.8006 36.0876L47.7105 20.1777ZM0 18.4099L-2.18557e-07
                            20.9099L45.9427 20.9099L45.9427 18.4099L45.9427
                            15.9099L2.18557e-07 15.9099L0 18.4099Z" fill="#ffffff"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
          <footer className="footer">
                <div className="footer__inner">
                    <img src="src/assets/images/footer/footer__image.png" className="footer__image" alt="footer image"/>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            Design by
                            <a href="https://github.com/babyhackcode" target="_blank">babyhackcode</a>
                            & <a href="https://t.me/malinsent" target="_blank">malinsenttt</a>
                        </li>
                        <li className="footer__list-item">
                            <address className="footer__address">
                                <p className="footer__address-location">
                                    г. Санкт-Петербург, ул. Московские ворота, д.18
                                </p>
                                <p className="footer__address-contacts">
                                    <a href="tel:+79253405757"> +7 (925) 340 57 57 </a>
                                    <span> / </span>
                                    <a href="mailto:clothe@metka.com">clothe@metka.com </a>
                                </p>
                                <p className="footer__address-company">
                                    © 2026 metka• Все права защищены.
                                </p>
                            </address>
                        </li>
                        <li className="footer__list-item">
                            Development by <a href="https://github.com/babyhackcode" target="_blank">babyhackcode</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default App