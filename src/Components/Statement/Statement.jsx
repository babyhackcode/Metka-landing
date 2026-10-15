import './Statement.scss'
import statementCharacter from '../../assets/images/statement/statement__image.png'
import statementArt from '../../assets/images/statement/statement__art.png'

function Statement() {
    return (
        <section className="statement">
            <div className="statement__inner">
                <div className="statement__top">
                    <div className="statement__character">
                        <img className="statement__image" src={statementCharacter}
                             alt="Ты не обязан быть как все!"/>
                    </div>
                    <div className="statement__content">
                        <h2 className="statement__title">ТЫ НЕ <br/> ОБЯЗАН <br/> БЫТЬ КАК <br/> ВСЕ!</h2>
                        <p className="statement__subtitle subtitle">
                            Настоящий стиль когда <br/> на тебя смотрят и думают:
                            <span className="subtitle__red-decoration"> Daaaaamn. Где он это <br/> нашел?! </span>
                        </p>
                    </div>
                </div>
                <div className="statement__bottom">
                    <ul className="statement__list">
                        <li className="statement__item">
                            <p className="statement__text"> Бой быков это </p>
                            <img className="statement__art"
                                 src={statementArt} alt="art"/>
                        </li>
                        <li className="statement__item">
                            <p className="statement__text"> Бокс это </p>
                            <img className="statement__art"
                                 src={statementArt} alt="art"/>
                        </li>
                        <li className="statement__item">
                            <p className="statement__text"> <span style={{color: '#D71868'}}> Любовь </span> тоже </p>
                            <img className="statement__art" src={statementArt}
                                 alt="art"/>
                        </li>
                        <li className="statement__item">
                            <p className="statement__text"> Открываем банку сардин — и это </p>
                            <img className="statement__art" src={statementArt}
                                 alt="art"/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Statement;