import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Paymethod from "./Paymethod";
import data from "../other/basket/basketGoods.json";

function Checkout() {
    const [value, setValue] = useState();
    const [totalPrice, setTotalPrice] = useState(0);

    const [quantities, setQuantities] = useState(() => {
        const storedQuantities = localStorage.getItem("quantities");
        return storedQuantities ? JSON.parse(storedQuantities) : {};
    });

    const calculateTotalPrice = (currentQuantities) => {
        let sum = 0;
        data.forEach((item) => {
            const quantity = currentQuantities[item.name] || 0;
            sum += quantity * item.price;
        });
        setTotalPrice(sum);
    };

    useEffect(() => {
        calculateTotalPrice(quantities);
    }, [quantities]);

    const [adress, setAdress] = useState("");

    const handleChange = (event) => {
        setAdress(event.target.value);
    };
    
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    useEffect(() => {
        const paymentOptions = document.querySelectorAll(
            'input[name="payment_method"]'
        );

        paymentOptions.forEach((option) => {
            option.addEventListener("change", () => {
                const selectedValue = document.querySelector(
                    'input[name="payment_method"]:checked'
                ).value;
                setSelectedPaymentMethod(selectedValue);
            });
        });
    });

    return (
        <div className="checkout">
            <h1 className="checkout_title">Оплата заказа</h1>
            <form className="form_checkout">
                <label className="checkout_label">
                    <span className="checkout_label_span">Введите ФИО</span>
                    <input type="text" placeholder="Иванов Иван Иванович" />
                </label>
                <label className="checkout_label">
                    <span className="checkout_label_span">
                        Введите номер телефона
                    </span>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                    />
                </label>
                <label className="checkout_label">
                    <span className="checkout_label_span">
                        Введите ваш email
                    </span>
                    <input type="email" placeholder="example@google.com" />
                </label>
                <label className="checkout_label">
                    <span className="checkout_label_span">
                        Введите ваш Адрес
                    </span>
                    <input
                        type="text"
                        placeholder="Город, улица, дом, квартира"
                        id="adress"
                        value={adress}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <Paymethod />
            <div className="summary">
                <h2 className="summary_title">Сводка заказа</h2>
                <p className="summary_goods">
                    Товары: {data.map((item) => item.name + ", ")}
                </p>
                <p className="summary_totalPrice">
                    Сумма: {totalPrice + " тг."}
                </p>
                <p className="summary_adress">Адерс доставки: {adress ? adress : "не указан"}</p>
                <p className="summary_payMethod">Способ оплаты: {selectedPaymentMethod || "не выбран"}</p>
            </div>
            <button className="submit_form">Оплатить</button>
        </div>
    );
}

export default Checkout;
