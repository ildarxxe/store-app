import { Link } from "react-router-dom";
import basketIcon from "../images/basket.png";
import contactsIcon from "../images/contacts.png";
import profileIcon from "../images/profile.png";
import loginIcon from "../images/login.png";
import informationIcon from "../images/information.png";
import { useEffect, useState, useRef } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileLinksRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleLinkClick = () => {
            setIsMenuOpen(false);
        };

        if (mobileLinksRef.current) {
            const links = mobileLinksRef.current.querySelectorAll('.mobile_link');
            links.forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });

            return () => {
                links.forEach(link => {
                    link.removeEventListener('click', handleLinkClick);
                });
            };
        }
    }, [isMenuOpen]);
    return (
        <header className="header">
            <div className="header-desktop">
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
                        <Link
                            to="/basket"
                            className="link"
                            data-title="Корзина"
                        >
                            <img src={basketIcon} alt="" />
                        </Link>
                        <Link to="/about" className="link" data-title="О нас">
                            <img src={informationIcon} alt="" />
                        </Link>
                        <Link
                            to="/contacts"
                            className="link"
                            data-title="Контакты"
                        >
                            <img src={contactsIcon} alt="" />
                        </Link>
                        <Link
                            to="/account"
                            className="link"
                            data-title="Личный кабинет"
                        >
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
            </div>
            <div className="header-mobile">
                <nav>
                    <div className="links" ref={mobileLinksRef}>
                        <Link to="/home" className="link mobile_link logo-link">
                            <img
                                src="https://www.amata.kz/local/templates/ilab_it_shop/ilab/img/svg/logo_new.svg"
                                alt="logo"
                                title="home"
                                className="logotype"
                            />
                        </Link>
                        <Link to="/catalog" className="link mobile_link">
                            Каталог товаров
                        </Link>
                        <i className="fa-solid fa-bars menu" onClick={toggleMenu}></i>
                        <div className={`hidden menu_block ${isMenuOpen ? 'show' : ''}`}>
                            <Link
                                to="/basket"
                                className="link hidden_link mobile_link"
                                data-title="Корзина"
                            >
                                <img src={basketIcon} alt="" /> <span className="link_span">Корзина</span>
                            </Link>
                            <Link
                                to="/about"
                                className="link hidden_link mobile_link"
                                data-title="О нас"
                            >
                                <img src={informationIcon} alt="" />
                                <span className="link_span">О нас</span>
                            </Link>
                            <Link
                                to="/contacts"
                                className="link hidden_link mobile_link"
                                data-title="Контакты"
                            >
                                <img src={contactsIcon} alt="" />
                                <span className="link_span">Контакты</span>
                            </Link>
                            <Link
                                to="/account"
                                className="link hidden_link mobile_link"
                                data-title="Личный кабинет"
                            >
                                <img src={profileIcon} alt="" />
                                <span className="link_span">Личный кабинет</span>
                            </Link>
                            <Link
                                to="/login"
                                className="link hidden_link mobile_link"
                                data-title="Войти"
                            >
                                <img src={loginIcon} alt="" />
                                <span className="link_span">Войти</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
