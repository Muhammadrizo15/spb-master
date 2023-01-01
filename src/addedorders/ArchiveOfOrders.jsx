import React, { useState, useEffect } from "react";
import './added-devices.css'
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Sidebar() {
    useEffect(() => {
        document.title = 'Добавленные устройства';
    }, []);

    const [pause, stop] = useState(true)

    return (
        <section className="page_7">
            <div className="container_added mobile-container_added">
                <div className="adding_devices font_abel">
                    <div className="device">
                        <div className="device_text-2">
                            <h2>Добавленные устройства</h2>

                            <h3>Заказы</h3>
                        </div>
                    </div>
                    <div className="nav_list-1 df align">
                        <div className="nav_device df mobile-nav_device">
                            <div className="nav_device-1">
                                {/* <Link to="/added-device">
                                    <h2>Актуальное</h2>
                                </Link> */}
                                <Link className="just__flexingfaa" to='/order/actual'>
                                    <h2>Актуальное</h2>
                                    <span className="numbers__faCoigCXff">1</span>
                                </Link>
                            </div>
                            <div className="nav_device-2  nav_device-1-active mobile-nav_device-2">
                                <Link className="just__flexingfaa" to='/order/archive'>
                                    <h2>Архив</h2>
                                    <span className="numbers__faCoigCXff">1</span>
                                </Link>
                            </div>
                        </div>
                        <div className="nav_device-but mobile-nav_device-but">
                            <Link to="/title-service">
                                Заказать хочу
                            </Link>
                        </div>
                    </div>

                    <div className="h hbb mobile-h">
                        <div className="big_nav-devicefsadsad df align mobile-big_nav-device">
                            <div className="big_nav-text_1 mobile-big_nav-text_1">
                                <h2>Заказы</h2>
                            </div>
                            <div className="big_nav-text_2 df align mobile-big_nav-text_2">
                                <div className="tex-1 df mobile-tex-1">
                                    <h2>Цена</h2>

                                    <h2>Предложение</h2>

                                    <h3>СТАТУС</h3>
                                    <div className="tex-2">
                                        <h2>Управлять</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="archive-hee">


                            <div className="nav_applications-3 df align mobile-nav_applications-3">
                                <div className="nav_applications-text mobile-nav_applications-text">
                                    <h2>Заголовок с заявки </h2>
                                </div>
                                <div className="nav_applications-2 df mobile-nav_applications-2">
                                    <div className="applications_text-2 df align mobile-applications_text-2">
                                        <h4>500 ₽</h4>

                                        <Link to="/mysuggest">
                                            <h3>1</h3>
                                        </Link>

                                        <div className="double_buttons">
                                            {pause ? <p className="dubl-btn dubl-btn-free" href="#">Сбор предложения</p> : null}
                                            {!pause ? <p className="dubl-but dubl-btn-free" href="#">На паузе</p> : null}
                                        </div>
                                        <div className="nav_applications-3">
                                            <div className="nav_applications-img">
                                                {pause ? <img src="../img/added_img/pause.svg" onClick={() => stop(false)} alt="no photo" /> : null}
                                                {!pause ? <img src="../img/added_img/pause.png" onClick={() => stop(true)} alt="no photo" /> : null}
                                                <Link to="/title-service"><img src="../img/added_img/pencil.svg" alt="no photo" /></Link>
                                                <Popup
                                                    trigger={<img src="../img/added_img/fluent.svg" alt="no photo" />}
                                                    modal
                                                    nested
                                                >
                                                    {close => (
                                                        <div className="modal-content" style={{ textAlign: "center" }}>
                                                            <span onClick={close}><img className="close" src="../img/img-delete.png" alt="" /></span>
                                                            <h1>Подтверждение удаления  </h1>
                                                            <p>Вы подтверждаете остановку проекта? Продавцы не смогут больше добавлять в него свои предложения.</p>
                                                            <div className="df" style={{ justifyContent: "center" }}>
                                                                <button className="done btn_6PopUpBack" type='button' onClick={close}>Отмена</button>
                                                                <button className="done btn_6PopUp" type='button' onClick={close}>Удалить</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Popup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nav_list-1_info df align mobile_nav_list-1_info">
                                <div className="inf_text-1">
                                    <h2>Опубликованно 22.12.21</h2>
                                </div>
                                <div className="inf_text-2 df align">
                                    <div className="inf_text-img">
                                        <img src="../img/added_img/group.png" alt="no photo" />
                                    </div>
                                    <div className="inf_text-2">
                                        <h2>просмотрено 20</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="h hbb mobile-h">
                        <div className="big_nav-devicefsadsad ffpiuerqrqorurhhb df align mobile-big_nav-device">
                            <div className="big_nav-text_1 mobile-big_nav-text_1">
                                <h2>Заказы</h2>
                            </div>
                            <div className="big_nav-text_2 df align mobile-big_nav-text_2">
                                <div className="tex-1 df mobile-tex-1">
                                    <h2>Цена</h2>

                                    <h2>Предложение</h2>

                                    <h3>СТАТУС</h3>
                                    <div className="tex-2">
                                        <h2>Управлять</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="archive-hee">


                            <div className="nav_applications-3 df align mobile-nav_applications-3">
                                <div className="nav_applications-text mobile-nav_applications-text">
                                    <h2>Заголовок с заявки </h2>
                                </div>
                                <div className="nav_applications-2 df mobile-nav_applications-2">
                                    <div className="applications_text-2 df align mobile-applications_text-2">
                                        <h4>500 ₽</h4>

                                        <Link to="/mysuggest">
                                            <h3>1</h3>
                                        </Link>

                                        <div className="double_buttons">
                                            {pause ? <p className="dubl-btn dubl-btn-free" href="#">Сбор предложения</p> : null}
                                            {!pause ? <p className="dubl-but dubl-btn-free" href="#">На паузе</p> : null}
                                        </div>
                                        <div className="nav_applications-3">
                                            <div className="nav_applications-img">
                                                {pause ? <img src="../img/added_img/pause.svg" onClick={() => stop(false)} alt="no photo" /> : null}
                                                {!pause ? <img src="../img/added_img/pause.png" onClick={() => stop(true)} alt="no photo" /> : null}
                                                <Link to="/title-service"><img src="../img/added_img/pencil.svg" alt="no photo" /></Link>
                                                <Popup
                                                    trigger={<img src="../img/added_img/fluent.svg" alt="no photo" />}
                                                    modal
                                                    nested
                                                >
                                                    {close => (
                                                        <div className="modal-content" style={{ textAlign: "center" }}>
                                                            <span onClick={close}><img className="close" src="../img/img-delete.png" alt="" /></span>
                                                            <h1>Подтверждение удаления  </h1>
                                                            <p>Вы подтверждаете остановку проекта? Продавцы не смогут больше добавлять в него свои предложения.</p>
                                                            <div className="df" style={{ justifyContent: "center" }}>
                                                                <button className="done btn_6PopUpBack" type='button' onClick={close}>Отмена</button>
                                                                <button className="done btn_6PopUp" type='button' onClick={close}>Удалить</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Popup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nav_list-1_info df align mobile_nav_list-1_info">
                                <div className="inf_text-1">
                                    <h2>Опубликованно 22.12.21</h2>
                                </div>
                                <div className="inf_text-2 df align">
                                    <div className="inf_text-img">
                                        <img src="../img/added_img/group.png" alt="no photo" />
                                    </div>
                                    <div className="inf_text-2">
                                        <h2>просмотрено 20</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default Sidebar;