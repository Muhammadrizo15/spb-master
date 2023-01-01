import React, { useEffect } from "react";
import '../scss/pick-log.css'
import '../scss/media.css'

function App() {

    useEffect(() => {
        document.title = 'Выбор регистрации';
    }, []);

    return (
        <section className="pick">
            <h1>Выбор регистрации</h1>
            <div className="pick">
                <div className="reg">
                    <a href="/register">
                        <img src="../img/Union.svg" alt=""/>
                        <p>Регистрация пользователя </p>
                        <p className="cli">
                            Тип регистрации для пользователей
                            (только клиентам)
                        </p>
                    </a>
                </div>
                <div className="reg">
                    <a href="/register-master">
                        <img src="../img/Union.png" alt=""/>
                        <p>Регистрация сервисов и мастеров</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default App;
