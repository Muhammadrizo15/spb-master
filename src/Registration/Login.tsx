import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './login.css'

function Login() {


    const [phone, isPhone] = useState(false)
    const [password, ispassword] = useState(false)
    const [valid, IsFormvalid] = useState(false)


    useEffect(() => {
        if (phone && password ) {
            IsFormvalid(true)
        }
    }, [phone, password])


    useEffect(() => {
        document.title = 'Войти';
    }, []);

    return (
        <section className="login">
            <h1>Войти</h1>
            <form>
                <input
                    type="text"
                    placeholder="Телефон"
                    onChange={e => {
                        isPhone(true)

                    }}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    onChange={e => {
                        ispassword(true)

                    }}
                />

                {valid ? <Link to="/replenishment"><button className="log__btn">Войти</button></Link> : <button  style={{ color: 'rgba(255, 255, 255, 0.5)' }} className="log__btn">Войти</button>}

                <p>Нет аккаунта? <span><Link to="/register">Зарегистрируйтесь</Link></span></p>
                <a href="#"><span>Забыли пароль?</span></a>
            </form>
        </section>
    )
}


export default Login;