import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
    useEffect(()=> {
        const inputs = [...document.querySelectorAll('input')];

        inputs.forEach(input => {
          input.required = true;
        });
        
    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [emailError, setEmailError] = useState('Поле Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле Password не может быть пустым');

    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [emailError, passwordError]);

    useEffect(()=> {
        const btn = document.querySelector('.submit_form');
        if (!validForm) {
            btn.style.cursor = "default";
        } else {
            btn.style.cursor = "pointer";
        }
    })

    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('Email неккоректный')
        } else {
            setEmailError('')
        }

    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        if(event.target.value.length < 6) {
            setPasswordError('Пароль должен содержать не менее 6 символов');
            if(!event.target.value) {
                setPasswordError('Поле Password не может быть пустым');
            }
        } else {
            setPasswordError('');
        }
    }

    const removeFocus = (event) => {
        switch (event.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    
    return (
        <div className="login">
            <h1 className="login_title">Авторизация</h1>
            <form className="login_form" id="login_form">
                <label className="login_label">
                    <span className="login_label_span">Введите Email</span>
                    <input onChange={event => emailHandler(event)} value={email} onBlur={event => removeFocus(event)} name="email" type="email" placeholder="example@gmail.com" />
                    <span className="login_label_span error_span">{(emailDirty && emailError) && emailError}</span>
                </label>
                <label className="login_label">
                    <span className="login_label_span">
                        Введите пароль
                    </span>
                    <input onChange={event => passwordHandler(event)} value={password} onBlur={event => removeFocus(event)} name="password" type="password" />
                    <span className="login_label_span error_span">{(passwordDirty && passwordError) && passwordError}</span>
                </label>
            </form>
            <button disabled={!validForm} form="login_form" type="submit" className="submit_form login_submit_form">Войти</button>
            <span className="or">или</span>
            <Link to="/registration" className="registr_btn">Зарегистрироваться</Link>
        </div>
    );
}

export default Login;