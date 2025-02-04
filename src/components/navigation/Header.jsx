import { Link } from "react-router-dom";
import basketIcon from '../images/basket.png';
import contactsIcon from '../images/contacts.png';
import profileIcon from '../images/profile.png';

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
                    <Link to="/contacts" className="link" data-title="Контакты">
                        <img src={contactsIcon} alt="" />
                    </Link>
                    <Link to="/profile" className="link" data-title="Профиль">
                        <img src={profileIcon} alt="" />
                    </Link>
                    <Link to="/catalog" className="link">
                        Каталог товаров
                    </Link>
                    <Link to="/orders" className="link">
                        Мои заказы
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
