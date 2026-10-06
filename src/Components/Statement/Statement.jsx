import './Statement.scss'

function Statement() {
    return (
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
    )
}

export default Statement;