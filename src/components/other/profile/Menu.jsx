import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="account_menu">
        <ul>
            <li>
                <Link
                    className="account_menu_link"
                    to="/account/profile-edit"
                >
                    Редактировать профиль
                </Link>
            </li>
            <li>
                <Link
                    className="account_menu_link"
                    to="/account/orders"
                >
                    Заказы
                </Link>
            </li>
            <li>
                <Link
                    className="account_menu_link"
                    to="/account/favorites"
                >
                    Избранное
                </Link>
            </li>
            <li>
                <Link
                    className="account_menu_link logout"
                    to="#"
                >
                    Выход из аккаунта
                </Link>
            </li>
        </ul>
    </nav>
    );
}

export default Menu;