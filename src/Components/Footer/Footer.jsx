import './Footer.scss'
import footerCharacter from '../../assets/images/footer/footer__image.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <img className="footer__image" src={footerCharacter} alt="footer image"/>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        Design by <a href="https://github.com/babyhackcode" target="_blank"> babyhackcode </a> &
                        <a href="https://t.me/malinsent" target="_blank"> malinsenttt </a>
                    </li>
                    <li className="footer__list-item footer__company">
                            © 2026 metka• Все права защищены.
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