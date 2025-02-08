function Logout() {
    return (
        <div className="modal-window_wrap">
            <div className="modal-window">
                <div className="modal-window_wrapper">
                    <h1 className="warn">Вы точно хотите выйти из аккаунта?</h1>
                    <div className="select">
                        <button className="agreement">Да</button>
                        <button className="refuse">Нет</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;
