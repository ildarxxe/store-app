import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Paymethod from "./Paymethod";
import data from "../basket/basketGoods.json";

function Checkout() {
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

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);

    const [phoneError, setPhoneError] = useState(
        "Номер телефона не должен быть пустым"
    );
    const [emailError, setEmailError] = useState("Email не должен быть пустым");

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || phoneError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, phoneError]);

    useEffect(() => {
        const btn = document.querySelector('.submit_form');
        if (!formValid) {
            btn.style.cursor = "default";
        } else {
            btn.style.cursor = "pointer";
        }
    })

    const phoneHandler = (value) => {
        setPhone(value);
        const regex =
            /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!regex.test(String(value).toLowerCase())) {
            setPhoneError("Неккоректный номер телефона");
            if (!value) {
                setPhoneError("Номер телефона не может быть пустым");
            }
        } else {
            setPhoneError("");
        }
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError("Email некорректный");
            if (!event.target.value) {
                setEmailError("Email не должен быть пустым");
            }
        } else {
            setEmailError("");
        }
    };

    const inputDirty = (event) => {
        switch (event.target.name) {
            case "phone":
                setPhoneDirty(true);
                break;
            case "email":
                setEmailDirty(true);
                break;
        }
    };

    const adressHandler = (event) => {
        setAdress(event.target.value);
    }

    return (
        <div className="checkout">
            <h1 className="checkout_title">Оплата заказа</h1>
            <form className="form_checkout">
                <label className="checkout_label">
                    <span className="checkout_label_span">Введите ФИО</span>
                    <input
                        name="initials"
                        type="text"
                        placeholder="Иванов Иван Иванович"
                    />
                </label>
                <label className="checkout_label">
                    <span className="checkout_label_span">
                        Введите номер телефона
                    </span>
                    <PhoneInput
                        placeholder="Введите номер телефона"
                        value={phone}
                        onChange={phoneHandler}
                        onBlur={event => inputDirty(event)}
                        name="phone"
                    />
                    <span className="login_label_span error_span">
                        {phoneError && phoneDirty && phoneError}
                    </span>
                </label>
                <label className="checkout_label">
                    <span className="checkout_label_span">
                        Введите ваш email
                    </span>
                    <input
                        onChange={event => emailHandler(event)}
                        onBlur={event => inputDirty(event)}
                        name="email"
                        type="email"
                        placeholder="example@google.com"
                    />
                    <span className="login_label_span error_span">
                        {emailError && emailDirty && emailError}
                    </span>
                </label>
                <label className="checkout_label">
                    <span className="checkout_label_span">
                        Введите ваш Адрес
                    </span>
                    <input
                        name="adress"
                        type="text"
                        placeholder="Город, улица, дом, квартира"
                        id="adress"
                        value={adress}
                        onChange={event => adressHandler(event)}
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
                <p className="summary_adress">
                    Адерс доставки: {adress ? adress : "не указан"}
                </p>
                <p className="summary_payMethod">
                    Способ оплаты: {selectedPaymentMethod || "не выбран"}
                </p>
            </div>
            <button disabled={!formValid} className="submit_form">Оплатить</button>
        </div>
    );
}

export default Checkout;
