import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <img src="src/assets/images/footer/footer__image.png" className="footer__image" alt="footer image"/>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        Design by <a href="https://github.com/babyhackcode" target="_blank"> babyhackcode </a> &
                        <a href="https://t.me/malinsent" target="_blank"> malinsenttt </a>
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
                        Development by <a href="https://github.com/babyhackcode" target="_blank"> babyhackcode </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer