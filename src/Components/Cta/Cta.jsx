import './Cta.scss'
import Links from "../Links/Links.jsx";

function Cta() {
    return (
        <section className="cta">
            <div className="cta__inner">
                <h2 className="cta__title"> НАЙДИ СВОË. </h2>
                <p className="cta__subtitle">
                    Новые находки появляются постоянно <br/>
                    Некоторые вещи появляются только один раз.
                </p>
                <div className="cta__links">
                    <Links
                        className = "cta__link"
                        href = 'https://t.me/mettkka'
                    >
                        TELEGRAM
                    </Links>
                    <Links
                        className = "cta__link"
                    >
                        SHOP
                    </Links>
                </div>
            </div>
        </section>
    )
}

export default Cta