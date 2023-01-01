import React, { useEffect } from "react";
import '../scss/register-master.css'
import {
    Link,
} from "react-router-dom";

function RegisterMaster() {

    useEffect(() => {
        document.title = 'Регистрация мастера';
    }, []);

    return (
        <section className="register">
            <h1>Регистрация мастера</h1>
            <form>
                <input required type="text" placeholder="Логин" />
                <input required type="text" placeholder="Имя фамилия" />
                <input required type="text" placeholder="Телефон" />
                <input required type="email" placeholder="Email" />
                <div className="df">
                    <select
                        className="fsafweqpuhwe"
                        name="Список услуг"
                        id="uslugi"
                        required
                    >

                        <option value="Список услуг">Список услуг</option>
                        <option value="Ремонт телефонов">Ремонт телефонов</option>
                        <option value="Ремонт планшетов">Ремонт планшетов</option>
                        <option value="Ремонт ноутбуков">Ремонт ноутбуков</option>
                    </select>
                    <div className="erpqwerty">
                        <p>Пожалуйста, выберети нужный ответ, <br /> человек! Тот, что у вас есть на уме!</p>
                        <img src="../img/warringnmessage.png" alt="" />
                    </div>
                </div>
                <div>
                    <select
                        className="fsafweqpuhwe"
                        required
                        id="widget"
                    >
                        <option value="Выбор устройства">Выбор устройства</option>
                        <option value="Iphone">Iphone</option>
                        <option value="Android">Android</option>
                        <option value="Другое">Другое</option>
                    </select>
                    <div className="erpqwerty erpqwertytwo">
                        <p>Пожалуйста, выберети нужный ответ, <br /> человек! Тот, что у вас есть на уме!</p>
                        <img src="../img/warringnmessage.png" alt="" />
                    </div>
                </div>
                <div>
                    <select
                        required
                        className="fsafweqpuhwe"
                        id="mounth"
                    >
                        <option value="Вид ремонта">Вид ремонта</option>
                        <option value="Mini">Mini</option>
                        <option value="Max">Max</option>
                        <option value="Другое">Другое</option>
                    </select>
                    <div className="erpqwerty erpqwertythree">
                        <p>Пожалуйста, выберети нужный ответ, <br /> человек! Тот, что у вас есть на уме!</p>
                        <img src="../img/warringnmessage.png" alt="" />
                    </div>
                </div>
                <div className="rel">
                    <input type="checkbox" id="really" />
                    <label htmlFor="really">
                        Ознакомлен и согласен с условиями Политики конфиденциальности
                    </label>
                </div>
                {/* <Link to="/more-info"> */}
                <button type="submit">Продолжить</button>
                {/* </Link> */}
            </form>

        </section>
    )
}

export default RegisterMaster;