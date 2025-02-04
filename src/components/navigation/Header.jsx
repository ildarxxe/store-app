function Header() {
    return (
        <header className="header">
            <nav>
                <div className="links">
                    <a href="/home" className="link logo-link">
                        <img
                            src="https://www.amata.kz/local/templates/ilab_it_shop/ilab/img/svg/logo_new.svg"
                            alt="logo"
                            title="home"
                            className="logotype"
                        />
                    </a>
                    <a href="/basket" className="link">
                        Корзина
                    </a>
                    <a href="/contacts" className="link">
                        Контакты
                    </a>
                    <a href="/menu" className="link">
                        Меню
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
