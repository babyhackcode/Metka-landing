import './Collection.scss'

function Collection() {
    return (
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
    )
}

export default Collection