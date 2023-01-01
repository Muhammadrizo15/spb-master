import React, { useEffect } from "react";
import '.././scss/settings-all.css'
import Sidebar from "../sidebar";
import "swiper/css";
import "swiper/css/navigation";
import SettingNav from "./Setting-nav";
import {Link} from "react-router-dom";


function App() {

    useEffect(() => {
        document.title = 'Настройки';
    }, []);


    return (
        <div className='main nal df'>
            <Sidebar/>
            <div className="block-info-6">
                <div className="setting  df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <img src="./img/img-left.png" alt=""/>
                        <Link to="/profile">
                            <img src="./img/img-right.png" alt=""/>
                        </Link>
                    </div>
                </div>

                <div className="mini-wrap mini-wrap_links df">
                    <Link  className="just active2" to="/settings"><h3 >Общие</h3></Link>
                    <Link  className="just" to="/profile"><h3>Профиль</h3></Link>
                    <Link  className="just" to='/service'><h3 >Услуги</h3></Link>
                    <Link  className="just" to='/finance'><h3 >Финансы</h3></Link>
                </div>

                <div className="mini-main df">

                    <div className="input-wrap">
                            <input type="text" placeholder="Логин"/>
                        <div className="height">
                            <input type="text" placeholder="Телефон"/>
                            <img src="./img/img-pencil.png" alt=""/>
                        </div>
                        <input type="email" placeholder="Email"/>
                            <div className="height">
                                <input type="text" placeholder="Новый пароль"/>
                                <img src="/img/img-eye.png" alt="" className="eye"/>
                            </div>
                            <div className="height">
                                <input type="text" placeholder="Подтверждение пароля"/>
                                <img src="./img/img-almost-eye.png" alt="" className="almost-eye"/>
                            </div>
                            <input type="text" placeholder="На связи с 3:30"/>
                            <input type="text" placeholder="На связи до с 20:00"/>
                            <input type="text" placeholder="Статус не более 40 символов  "/>
                            <button className="goooSaveButton">Сохранить</button>
                    </div>

                    <div className="photo-wrap">
                        <label htmlFor="prifielLogoUpload">
                            <img src="./img/img-camera.png" alt=""/>
                        </label>
                        <input type="file" style={{display: "none"}} className='prifielUpload' id="prifielLogoUpload"/>
                        <div className="links">
                            <a href="#" className="link-3">Изменить</a>
                            <a href="#" className="link-4">Удалить</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
)
}


export default App;
