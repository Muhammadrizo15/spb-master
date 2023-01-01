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
        document.title = 'Заказы';
    }, []);

    const [yesGo, isYesGo] = useState(false)

    return (
        <div className='main nal df'>

            <Sidebar />
            <div className="block-info-4">
                <div className="huge-content">
                    <h1>Заказы</h1>

                    <div className="huge-fasfdsoiXC df df">
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

                <div className="info-about-personadsfsaddas df">


                    <div className="user-info">
                        <div className="img-user df">
                            <img src="../img/img-face.png" alt="Face" />
                            <div>
                                <h4>Имя фамилия </h4>
                                <h4>Телефон скрытый клиента</h4>
                            </div>
                        </div>

                        <div className="small-content-user">
                            <h4>Название устройства </h4>
                            <h5>клиент описывает свою проблему </h5>
                        </div>
                    </div>

                    <div className="slider-user">
                        <div className="slider-content df">
                            {/*<div className="img__2 swiper-slide">*/}
                            {/*    <img src="./img/img-iPhone.png" alt=""/>*/}
                            {/*</div>*/}

                            <Swiper pagination={true} navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                            }} modules={[Navigation, Pagination]} className="mySwipetr mobile-mySwipetr">
                                <div className="swiper-button image-swiper-button-next">
                                    <img className="image-swiper-button-next" src="../img/sliderright.png" alt="asdfdsa" />
                                </div>
                                <div className="swiper-button image-swiper-button-prev">
                                    <img src="../img/sliderleft.png" alt="sdfdsa" />

                                </div>
                                <SwiperSlide className="swiper-slidetr sliderr pew97rtewug"><img src="../img/img-iPhone.png" alt="" /></SwiperSlide>
                                <SwiperSlide className="swiper-slidetr sliderr pew97rtewug"><img src="../img/img-iPhone.png" alt="" /></SwiperSlide>
                            </Swiper>

                            <div className="info-user">
                                <div className="df kichkina">
                                    <img src="../img/img-face-2.png" alt="" />
                                    <p>Номер клиента </p>
                                </div>

                                <h3>Имя фамилия </h3>
                            </div>

                        </div>
                        <div>
                            <Link to='/offer-service'>
                                <button>Предложить услугу</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;
