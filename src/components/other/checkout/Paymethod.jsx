function Paymethod() {
    return (
        <div class="payment-options">
            <h2>Выберите способ оплаты</h2>

            <div class="payment-option">
                <label for="card">
                    <input
                        type="radio"
                        id="card"
                        name="payment_method"
                        value="Банковская карта"
                    />
                    Банковская карта
                </label>
            </div>

            <div class="payment-option">
                <label for="cash">
                    <input
                        type="radio"
                        id="cash"
                        name="payment_method"
                        value="Наличные"
                    />
                    Наличные
                </label>
            </div>

            <div class="payment-option">
                <label for="e-wallet">
                    <input
                        type="radio"
                        id="e-wallet"
                        name="payment_method"
                        value="Электронный кошелек"
                    />
                    Электронный кошелек
                </label>
            </div>
        </div>
    );
}

export default Paymethod;
