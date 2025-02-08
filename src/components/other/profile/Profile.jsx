import { Link } from "react-router-dom";

function Profile() {
    return (
        <div className="user_data">
            <div class="user_data_profile">
                <h2>Ваш профиль</h2>
                <p>
                    <strong>Email:</strong> user@example.com
                </p>
                <p>
                    <strong>Номер телефона:</strong> +7 (123) 456-78-90
                </p>
                <Link to="/account/change-password">Изменить пароль</Link>
            </div>
        </div>
    );
}

export default Profile;
