import PhoneInput from "react-phone-number-input";
import { useState, useEffect } from "react";

function ProfileEdit() {
    useEffect(() => {
        const group = document.querySelector('.form_group_phone');
        if (group) {
            const input = group.querySelector('.PhoneInputCountry');
            const phone = group.querySelector('.PhoneInputInput');

            if (input) {
                input.classList.add('phone_input_country_two');
            }
            if (phone) {
                phone.classList.add('input_phone');
            }
        }
    }, []);

    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);

    const [emailError, setEmailError] = useState('Поле email не может быть пустым');
    const [telError, setTelError] = useState('Номер телефона не может быть пустым');

    const [validForm, setValidForm] = useState(false);

    
    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('Email некорректный');
            if (!event.target.value) {
                setEmailError('Поле email не может быть пустым');
            }
        } else {
            setEmailError('');
        }
    }

    const phoneHandler = (value) => {
        setTel(value);
        const regex = /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!value) {
            setTelError('Номер телефона не может быть пустым');
        } else if (!regex.test(String(value).toLowerCase())) {
            setTelError('Неккоректный номер телефона');
        } else {
            setTelError('');
        }
    };

    const removeFocus = (event) => {
        switch (event.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'phone':
                setTelDirty(true);
                break;
        }
    };

    useEffect(() => {
        if (emailError || telError) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [emailError, telError]);

    useEffect(() => {
        const btn = document.querySelector('.saveChange');
        if (!validForm) {
            btn.style.cursor = "default";
        } else {
            btn.style.cursor = "pointer";
        }
    })

    return (
        <div class="profile-edit-window">
            <h2>Редактировать профиль</h2>
            <form>
                <div class="form-group">
                    <label for="email">Новый Email:</label>
                    <input
                    onChange={event => emailHandler(event)} onBlur={event => removeFocus(event)}
                        type="email"
                        id="email"
                        name="email"
                        
                    />
                    <span className="login_label_span error_span">{(emailDirty && emailError) && emailError}</span>
                </div>
                <div class="form-group form_group_phone">
                    <label for="phone">Новый номер телефона:</label>
                    <PhoneInput
                        placeholder="7 (ХХХ)(ХХХ)(ХХХХ)"
                        value={tel}
                        name="phone"
                        onChange={phoneHandler}
                        onBlur={event => removeFocus(event)}
                    />
                    <span className="login_label_span error_span">{(telDirty && telError) && telError}</span>
                </div>
                <button disabled={!validForm} className="saveChange" type="submit">
                    Сохранить изменения
                </button>
            </form>
        </div>
    );
}

export default ProfileEdit;
