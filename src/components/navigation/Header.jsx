import { Link } from "react-router-dom";

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
                    <Link to="/basket" className="link">
                        Корзина
                    </Link>
                    <Link to="/contacts" className="link">
                        Контакты
                    </Link>
                    <Link to="/menu" className="link">
                        Меню
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
