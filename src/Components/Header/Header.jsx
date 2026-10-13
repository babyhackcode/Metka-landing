import './Header.scss'
import headerLogo from '../../assets/logo/White-logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header__scroll-wrapper">
                <div className="header__sticky">
                    <div className="header__background">
                        <div className="header__container">
                            <img className='header__logo' src={headerLogo} alt="Metka"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;