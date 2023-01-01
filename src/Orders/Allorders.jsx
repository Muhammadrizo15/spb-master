import { React, useState, useEffect } from "react";
import '../scss/orders.css'
import Sidebar from "../sidebar";
import '../scss/swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import Popup from 'reactjs-popup';



function App() {
    useEffect(() => {
        document.title = 'Все заказы';
    }, []);

    const [yesGo, isYesGo] = useState(false)

    return (
        <div className='main nal df'>

            <Sidebar />
            <div className="block-info-4">
                <div className="huge-content">
                    <h1>Заказы</h1>

                    <div className="huge-fasfdsoiXC df">
                        <div className="two-input">
                            <Link to='/orders/my'>
                                <div className="myorders">
                                    <p>Мои заказы</p>
                                    <span>1</span>
                                </div>
                            </Link>
                            <Link to='/orders/all'>
                                <div className="myorders">
                                    <p>Все заказы </p>
                                    <span>1</span>
                                </div>
                            </Link>
                        </div>
                        <div className="only-input">
                            <Popup
                                trigger={<div className="myorders myorders-email">
                                    <img src="../img/ion_mail-open-outline.png" alt="" />
                                    настройка Email уведомления
                                </div>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className="modal-content">
                                        <span onClick={close}><img className="close" src="../img/img-delete.png" alt="" /></span>
                                        <h1 className="abel popuptitle-n">Будте вкурсе новых заказов в любых направлениях</h1>
                                        <form>
                                            <div className="fapsdiygfgoog">
                                                <input onClick={() => isYesGo(true)} type="radio" name="yesorno" id="get" />
                                                <label className="label abel" htmlFor="get">Получать уведомление рекомендуемо </label>
                                            </div>
                                            {yesGo ? <div className="yesgp">
                                                <div className="fapsdiygfgoog">
                                                    <input type="radio" name="yesorde" id="getonehour" />
                                                    <label className="label label-hours abel" htmlFor="getonehour">Раз в час  </label>
                                                </div>
                                                <div className="fapsdiygfgoog">
                                                    <input type="radio" name="yesorde" id="getthreehour" />
                                                    <label className="label label-hours abel" htmlFor="getthreehour">Раз в 3 часа </label>
                                                </div>
                                                <div className="fapsdiygfgoog">
                                                    <input type="radio" name="yesorde" id="gettwhour" />
                                                    <label className="label label-hours abel" htmlFor="gettwhour">Раз в 12 часов </label>
                                                </div>
                                            </div> : null}

                                            <div className="fapsdiygfgoog">
                                                <input onClick={() => isYesGo(false)} type="radio" id="noget" name="yesorno" />
                                                <label className="label abel" htmlFor="noget">Не получасть уведомление </label>
                                            </div>
                                        </form>
                                        <a href="#" className="all__list">Список всех направлений </a>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>

                <div className="allorders">
                    <div>
                        <h1 className="allorder__title inter">Новое на бирже - <span>1 проект за сутки</span> </h1>
                        <div className="h bbbmt hbb mobile-h">
                            <div className="big_nav-device big_nav-devicefsdafstX df align mobile-big_nav-device">
                                <div className="fsdfsaooo mobile-big_nav-text_1">
                                    <h2 className="inter">Проект</h2>
                                    <h2 className="inter">Покупатель</h2>
                                    <h2 className="inter">Цена</h2>
                                </div>
                            </div>

                            <Link to="/orders/my">
                                <div className="archive-hee">
                                    <div className="nav_applications-3 fasfXf nav_applications-3-gee fsdfsaooo big_nav-device df align mobile-nav_applications-3">
                                        <h2>Заголовок <br /> Описание </h2>
                                        <div className="client__order">
                                            <img src="../img/img-face-2.png" alt="" />
                                            <div className="info__client__order">
                                                <h3 className="inter">Ник нейм</h3>
                                                <p className="inter">1 проект на сайте </p>
                                            </div>
                                        </div>
                                        <p>Нет</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="bri">
                        <a href="#" className="inter">Показать все</a>
                    </div>
                </div>

            </div>


        </div>
    )
}


export default App;
