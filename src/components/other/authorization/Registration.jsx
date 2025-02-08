import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useState, useEffect } from "react";

function Registration() {
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordVerifyDirty, setPasswordVerifyDirty] = useState(false);

    const [emailError, setEmailError] = useState('Поле email не может быть пустым');
    const [telError, setTelError] = useState('Номер телефона не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [passwordVerifyError, setPasswordVerifyError] = useState('Пароли не совпадают');

    const [validForm, setValidForm] = useState(false);

    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('Email некорректный');
        } else {
            setEmailError('');
        }
    }

    const phoneHandler = (value) => {
        setTel(value);
        const regex = /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!regex.test(String(value).toLowerCase())) {
            setTelError('Неккоректный номер телефона');
            if (!value) {
                setTelError('Номер телефона не может быть пустым')
            }
        } else {
            setTelError('');
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 6) {
            setPasswordError('Пароль должен содержать не менее 6 символов');
            if (!event.target.value) {
                setPasswordError('Пароль не может быть пустым');
            }
        } else {
            setPasswordError('');
        }
    }

    const passwordVerifyHandler = (event) => {
        setPasswordVerify(event.target.value);
        validatePasswords();
        if (password != passwordVerify) {
            setPasswordVerifyError('Пароли не совпадают');
            if (!event.target.value) {
                setPasswordVerifyError('Пароли не совпадают');
            }
        } else {
            setPasswordVerifyError('');
        }
    }

    useEffect(() => {
        validatePasswords();
    }, [password, passwordVerify]);

    const validatePasswords = () => {
        if (password !== passwordVerify) {
            setPasswordVerifyError('Пароли не совпадают');
        } else {
            setPasswordVerifyError('');
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
            case 'password':
                setPasswordDirty(true);
                break;
            case 'passwordVerify':
                setPasswordVerifyDirty(true);
                break;
        }
    };

    useEffect(() => {
        if (emailError || passwordError || passwordVerifyError || telError) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [emailError, passwordError, telError, passwordVerifyError]);

    useEffect(()=> {
        const inputs = [...document.querySelectorAll('input')];
        const phone = document.querySelector('.PhoneInputInput');

        phone.name = "phone";

        inputs.forEach(input => {
          input.required = true;
        });

        const btn = document.querySelector('.submit_form');
        if (!validForm) {
            btn.style.cursor = "default";
        } else {
            btn.style.cursor = "pointer";
        }
        
    });

    return (
        <div className="registr">
            <div className="login">
                <h1 className="login_title">Регистрация</h1>
                <form className="login_form" id="registr_form">
                    <label className="login_label">
                        <span className="login_label_span">Введите Email</span>
                        <input onChange={event => emailHandler(event)} onBlur={event => removeFocus(event)} name="email" type="email" placeholder="example@gmail.com" />
                        <span className="login_label_span error_span">{(emailDirty && emailError) && emailError}</span>
                    </label>
                    <label className="login_label">
                        <span className="login_label_span">
                            Введите номер телефона
                        </span>
                        <PhoneInput
                            placeholder="7 (ХХХ)(ХХХ)(ХХХХ)"
                            value={tel}
                            onChange={phoneHandler}
                            onBlur={event => removeFocus(event)}
                        />
                        <span className="login_label_span error_span">{(telDirty && telError) && telError}</span>
                    </label>
                    <label className="login_label">
                        <span className="login_label_span">Введите пароль</span>
                        <input onChange={event => passwordHandler(event)} onBlur={event => removeFocus(event)} name="password" type="password" />
                        <span className="login_label_span error_span">{(passwordDirty && passwordError) && passwordError}</span>
                    </label>
                    <label className="login_label">
                        <span className="login_label_span">
                            Подтвердите пароль
                        </span>
                        <input onChange={event => passwordVerifyHandler(event)} onBlur={event => removeFocus(event)} name="passwordVerify" type="password" />
                        <span className="login_label_span error_span">{(passwordVerifyDirty && passwordVerifyError) && passwordVerifyError}</span>
                    </label>
                </form>
                <button disabled={!validForm} form="registr_form" type="submit" className="submit_form login_submit_form">
                    Зарегистрироваться
                </button>
                <span className="or">или</span>
                <Link to="/login" className="registr_btn">
                    Войти
                </Link>
            </div>
        </div>
    );
}

export default Registration;
