import { Link } from "react-router-dom";
import basketIcon from '../images/basket.png';
import contactsIcon from '../images/contacts.png';
import profileIcon from '../images/profile.png';
import loginIcon from '../images/login.png';
import informationIcon from '../images/information.png';

function Header() {

    return (
        <header className="header">
            <nav>
                <div className="links">
                    <Link to="/home" className="link logo-link">
                        <img
                            src="https://www.amata.kz/local/templates/ilab_it_shop/ilab/img/svg/logo_new.svg"
                            alt="logo"
                            title="home"
                            className="logotype"
                        />
                    </Link>
                    <Link to="/basket" className="link" data-title="Корзина">
                        <img src={basketIcon} alt="" />
                    </Link>
                    <Link to="/about" className="link" data-title="О нас">
                        <img src={informationIcon} alt="" />
                    </Link>
                    <Link to="/contacts" className="link" data-title="Контакты">
                        <img src={contactsIcon} alt="" />
                    </Link>
                    <Link to="/account" className="link" data-title="Личный кабинет">
                        <img src={profileIcon} alt="" />
                    </Link>
                    <Link to="/login" className="link" data-title="Войти">
                        <img src={loginIcon} alt="" />
                    </Link>
                    <Link to="/catalog" className="link">
                        Каталог товаров
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
