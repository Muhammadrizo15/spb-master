import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../scss/register.css'

function Register() {


    const [name, setName] = useState(false)
    const [lastname, setLastName] = useState(false)
    const [email, setEmail] = useState(false)
    const [phone, setPhone] = useState(false)
    const [password, setPassword] = useState(false)
    const [passwordVer, setPasswordVer] = useState(false)
    const [sogl, setsogl] = useState(false)


    const blurHandler = (e) => {
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setLastName(false)
            
        } else {
            setLastName(true)
        }
    }

    const [formvalid, IsFormvalid] = useState(false)

    useEffect(() => {
        document.title = 'Регистрация';

    }, []);

    useEffect(() => {
        if (name && lastname && email && phone && password && passwordVer) {
            IsFormvalid(true)
        }
    }, [name, lastname, email, phone, password, passwordVer])



    return (
        <section className="register">
            <h1>Регистрация</h1>
            <form>
                <input
                    required
                    type="text"
                    onChange={e => {
                        setName(true)
                        console.log(name);

                    }}
                    className="heheinput"
                    placeholder="Имя"
                />
                <input
                    required
                    type="text"
                    onChange={e => {
                        setLastName(true)
                        console.log(lastname);

                    }}
                    className="heheinput"
                    placeholder="Фамилия"
                />
                <input
                    required
                    type="email"
                    onChange={e => {
                        setEmail(true)
                        // blurHandler(e)
                        console.log(email);

                    }}
                    className="heheinput"
                    placeholder="Email"
                />
                <input
                    required
                    type="text"
                    onChange={e => {
                        setPhone(true)
                        console.log(phone);

                    }}
                    className="heheinput"
                    placeholder="Телефон"
                />
                <input
                    required
                    type="password"
                    onChange={e => {
                        setPassword(true)
                        console.log(password);

                    }}
                    className="heheinput"
                    placeholder="Пароль"
                />
                <input
                    required
                    type="password"
                    onChange={e => {
                        setPasswordVer(true)
                        console.log(passwordVer);

                    }}
                    className="heheinput"
                    placeholder="Подтвердите пароль"
                />
                <div className="rel">
                    <input type="checkbox" id="really" />
                    <label htmlFor="really">
                        Ознакомлен и согласен с условиями Политики конфиденциальности
                    </label>
                </div>
                {formvalid ? <Link to="/login/profile"><button>Регистрация</button></Link> : <button style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Регистрация</button>}
            </form>
        </section>
    )
}

export default Register;