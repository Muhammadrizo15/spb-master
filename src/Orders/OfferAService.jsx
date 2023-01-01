import React, { useEffect } from "react";
import '../scss/OfferAService.css'
import Sidebar from "../sidebar";
import '../scss/swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";

import Popup from 'reactjs-popup';

function App() {

    useEffect(() => {
        document.title = 'Предложить услугу';
    }, []);

    return (
        <div className='main nal df abel'>
            <Sidebar />
            <div className="block-info-5">

                <div>
                    <div className="two-content df">
                        <h1 className="roboto">Предложить услугу</h1>
                        <div>
                            <Link to="/orders/my"><button className="abel">Назад</button></Link>
                        </div>
                    </div>
                </div>

                <div className="info-about-person df">

                    <div className="user-info">
                        <div className="img-user df">
                            <img src="./img/img-face.png" alt="Face" />
                            <div>
                                <h4>Имя фамилия </h4>
                                <h4>Телефон скрытый клиента</h4>
                            </div>
                        </div>

                        <div className="small-content-user">
                            <h4>Название устройства </h4>
                            <h5>клиент описывает свою проблему </h5>

                            <div className="small-into-small df">
                                <p>Осталось 22 часа 45 минут ЗАЯВКА ВЕСИТ СУТКИ </p>
                                <h6>предложений счетчик предложений</h6>
                            </div>
                        </div>
                    </div>

                    <div className="slider-user">
                        <div className="slider-content df">

                            <div className="swiper mySwiper">
                                <div className="swiper-wrapper">
                                    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwipetr">
                                        <SwiperSlide className="swiper-slidetr sliderr"><img src="./img/img-iPhone.png" alt="" /></SwiperSlide>
                                        <SwiperSlide className="swiper-slidetr sliderr"><img src="./img/img-iPhone.png" alt="" /></SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>


                            <div className="info-user">
                                <div className="df kichkina">
                                    <img src="./img/img-face-2.png" alt="" />
                                    <p>Номер клиента </p>
                                </div>

                                <h3>Имя фамилия </h3>
                            </div>

                        </div>
                        <div>
                            <button>Предложить услугу</button>
                        </div>
                    </div>

                </div>

                <div className="area-content">
                    <h1>Предложить услугу</h1>

                    <div className="area df">
                        <img src="./img/img-chat.png" alt="massage" />&nbsp; &nbsp;
                        <textarea className="offersertextares" name="text"
                            placeholder="Напишите как вы почините устройства клиента "></textarea>
                    </div>
                </div>

                <div className="option-content df">

                    <div className="first-option df">
                        <img src="./img/img-dollar.png" alt="Dollar" />
                        <h2>Стоимость</h2>
                    </div>

                    <div className="second-option">
                        <div className="input-option">
                            <input type="text" />
                            <img src="./img/img-rubl.png" alt="" />&nbsp;

                        </div>
                    </div>

                    <div className="third-option">
                        <img src="./img/img-cloack.png" alt="" />
                        <select id="time">
                            <option value="Выберете" className="color">Выберете</option>
                            <option value="Готов выехать">Готов выехать</option>
                            <option value="1 часa">1 часa</option>
                            <option value="2 часa">2 часa</option>
                            <option value="3 часa">3 часa</option>
                            <option value="4 часa">4 часa</option>
                        </select>
                    </div>
                </div>
                <div className="offer-continue__wrapper">
                    <Popup
                        trigger={
                            // <Link to="/added-device">
                            <button className="offer-continue">Продолжить</button>
                            // </Link>
                        }
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal-content modal-content-mysuggest">
                                <span onClick={close}><img className="close" src="../img/img-delete.png" alt="" /></span>
                                <h1 className="mysuggest__title">Ваше индивидуальное предложение отправлено </h1>
                                <Link to='/orders/all'><button className="done doneofferasevice" type='button'>Хорошо</button></Link>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </div>
    )
}


export default App;
