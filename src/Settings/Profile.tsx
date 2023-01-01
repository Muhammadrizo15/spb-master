import React, { useEffect } from "react";
import '../scss/profile.css'
import Sidebar from "../sidebar";
import "swiper/css";
import "swiper/css/navigation";
import SettingNav from "./Setting-nav";
import {Link} from "react-router-dom";


function Profile() {

    useEffect(() => {
        document.title = 'Настройки';
    }, []);

    return (
        <div className="main nal df">
            <Sidebar/>
            <div className="block-info-7">

                <div className="setting df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <Link to="/settings">
                            <img src="../img/left-active.png" alt=""/>
                        </Link>
                        <Link to="/service">
                            <img src="../img/img-right.png" alt=""/>
                        </Link>
                    </div>
                </div>

                <div className="mini-wrap mini-wrap_links df">
                    <Link  className="just" to="/settings"><h3 >Общие</h3></Link>
                    <Link  className="just active2" to="/profile"><h3>Профиль</h3></Link>
                    <Link  className="just" to='/service'><h3 >Услуги</h3></Link>
                    <Link  className="just" to='/finance'><h3 >Финансы</h3></Link>
                </div>

                <div className="mini-main-2 df">

                    <div className="input-wrap-2">
                        <input type="text" placeholder="Имя Фамилия"/>
                        <input type="text" placeholder="Телефон"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Название организации"/>
                        <input type="text" placeholder="Вид деятельности"/>
                        <input type="text" placeholder="Основной бизнес"/>
                        <input type="text" placeholder="Основное направление"/>
                        <textarea placeholder="О себе"></textarea>

                        <div>
                            <button>Сохранить</button>
                        </div>
                    </div>

                    <div className="check-input-content">
                        <div className="first-check">
                            <h4>Пол:</h4>
                            <div className="first_check df">
                                <input type="radio" name="select__man__woman" id="inputmanradiobtn"/>
                                <label htmlFor="inputmanradiobtn"><p>Мужской</p></label>
                            </div>

                            <div className="first_check df">
                                <input type="radio" name="select__man__woman" id="inputwomanradiobtn"/>
                                <label htmlFor="inputwomanradiobtn"><p>Женский</p> </label>
                            </div>
                        </div>

                        <div className="second-check">
                            <h4>Бизнес модель:</h4>
                            <div className="first_check df">
                                <input type="radio" name="select__service" id="yesornow"/>
                                <label htmlFor="yesornow"><p>Частный мастер</p></label>
                            </div>

                            <div className="first_check df">
                                <input type="radio" name="select__service" id="inputradioservicebtn"/>
                                <label htmlFor="inputradioservicebtn"><p>Сервис</p></label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Profile;
