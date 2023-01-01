import React, { useEffect } from "react";
import Sidebar from "../sidebar";


import { Link } from "react-router-dom";


function App() {

    useEffect(() => {
        document.title = 'Настройки';
    }, []);

    return (
        <div className="main nal df">
            <div className="block-info-7">

                <div className="setting settingasfds df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <img src="../img/img-left.png" alt=""/>
                        <Link to="/login/wallet">
                            <img src="../img/img-right.png" alt=""/>
                        </Link>
                    </div>
                </div>

                <div className="mini-wrap fasdfqwtwqtrttt mini-wrap_links df">
                    <Link  className="just active2" to="/login/profile"><h3>Профиль</h3></Link>
                    <Link  className="just" to='/login/wallet'><h3 >Фотография   </h3></Link>
                </div>

                <div className="mini-main-2 df">

                    <div className="input-wrap-2">
                    <input type="text" placeholder="Имя Фамилия"/>
                        <input type="text" placeholder="Телефон"/>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Новый пароль"/>
                        <input type="password" placeholder="Подтверждение пароля"/>

                        <div>
                            <button>Сохранить</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default App;
