import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './pick-master.css'
import Popup from "reactjs-popup";
import './reviews-master.css'
import { Rating } from "react-simple-star-rating";

function Sidebar() {
    useEffect(() => {
        document.title = 'Оставить отзыв';
    }, []);

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    return (
        <>
            <section className="page_3">
                <div className="hun mobile-hun">
                    <div className="master_button font_abel df mobile-master_button">
                        <div className="btnasfd mobile-btnasfd">
                            <Popup
                                trigger={<p>Оставить отзыв</p>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className="modal-content">
                                        <span onClick={close}><img className="close" src="../img/img-delete.png" alt="" /></span>
                                        <div className="containerPopUp">
                                            <h3 className="modelrewtitle inter">
                                                Оценка и комментарии
                                            </h3>
                                            <Rating
                                                onClick={handleRating}
                                                onPointerEnter={onPointerEnter}
                                                onPointerLeave={onPointerLeave}
                                                onPointerMove={onPointerMove}
                                            />
                                            <br />
                                            <textarea className="modelrewinput inter weqrqew"  placeholder="В тексте не должно быть оскорблений и мата."></textarea>
                                            <h3 className="modelrewqsetitl inter">Добавить фотографии</h3>
                                            <div className="df fileupgee">
                                                <label htmlFor="fileuprev">
                                                    <img src="img/modal-foo.png" alt="" />
                                                </label>
                                                <input id="fileuprev" type="file" style={{ display: 'none' }} />
                                                <p className="inter">Это необязательно, но с ними отзыв станет более
                                                    наглядным. Скриншоты переписки не пройдут
                                                    проверку.</p>
                                            </div>
                                            <div className="popUpBtnffeee">
                                                <Link to="/mysuggest"><button className="model-rewbtn_6PopUp inter" onClick={close}>Отправить</button></Link>
                                                <button className="model-rewbtn_6PopUpBack inter " onClick={close}>Назад</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                        <div className="but mobile-but">
                            <Link to="/pick-master/14325664">Назад</Link>
                        </div>
                    </div>
                </div>
                <div className="client df mobile-client jsbfa">
                    <div className="master font_inter mobile-master">
                        <div className="fasdfXY">
                            <div className="stars_master">
                                <div className="master_information df align">
                                    <div className="master_information-text">
                                        <h2>4,6</h2>
                                    </div>

                                    <div className="stars_img align df">
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/half_stars.png" alt="no photo" />
                                    </div>
                                </div>
                                <h3>На основании 11 оценок</h3>
                            </div>
                            <div className="grade-level">
                                <div className="level_master df align">
                                    <div className="level_img">
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                    </div>
                                    <div className="level_line-1 mobile-level_line-1">
                                        <div className="level_line-2"></div>
                                    </div>
                                    <div className="level_text">
                                        <p>10</p>
                                    </div>
                                </div>

                                <div className="level_master df align">
                                    <div className="level_img">
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                    </div>
                                    <div className="level_line-1 mobile-level_line-1"></div>
                                    <div className="level_text">
                                        <p>0</p>
                                    </div>
                                </div>

                                <div className="level_master df align">
                                    <div className="level_img">
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                    </div>
                                    <div className="level_line-1 mobile-level_line-1"></div>
                                    <div className="level_text">
                                        <p>0</p>
                                    </div>
                                </div>

                                <div className="level_master df align">
                                    <div className="level_img">
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                    </div>
                                    <div className="level_line-1 mobile-level_line-1"></div>
                                    <div className="level_text">
                                        <p>0</p>
                                    </div>
                                </div>

                                <div className="level_master df align">
                                    <div className="level_img">
                                        <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                        <img src="./img/master-profile_img/empty_star.png" alt="no photo" />
                                    </div>
                                    <div className="level_line-1 mobile-level_line-1">
                                        <div className="level_line-3"></div>
                                    </div>
                                    <div className="level_text">
                                        <p>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-prof mobile-nav-prof">

                        <div className="info_prof-kiril font_inter">
                            <div className="prof-kiril df">
                                <div className="prof-img">
                                    <img src="./img/master-profile_img/kiril.png" alt="no photo" />
                                </div>

                                <div className="prof-text">
                                    <h2>Кирилл Воронов</h2>

                                    <h3>26 августа</h3>
                                </div>
                            </div>
                            <div className="prof_stars df align">
                                <div className="prof_stars-img mobile-prof_stars-img">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo" />
                                </div>

                                <div className="prof_stars-text">
                                    <h3>Заказ выполнен на отлично.</h3>
                                </div>
                            </div>
                            <div className="comment df">
                                <div className="com">
                                    <div className="comment_text">
                                        <h2>Комментарий</h2>
                                    </div>
                                    <div className="long_text mobile-long_text">
                                        <p>
                                            Donec non justo elit. Praesent nec auctor tellus. Donec quam orci,
                                            tincidunt nec diam at, mollis commodo libero. Nulla a ante aliquam augue
                                            mattis dapibus eget eu ipsum. Integer fringilla vitae orci at laoreet.
                                            Quisque a justo augue. Proin a facilisis ante. Cras at nibh ultricies magna
                                            aliquet rutrum eget in lectus. Nullam sed ornare arcu. Curabitur bibendum
                                            ultrices sapien, eget viverra velit lobortis vel. Vivamus eu auctor elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper mySwiper">

                                </div>
                            </div>
                            <div className="answers-kiril mobile-answers-kiril">
                                <div className="kiril df align">
                                    <div className="kiril_img">
                                        <img src="./img/master-profile_img/kiril.png" alt="no photo" />
                                    </div>
                                    <div className="kiril_text-2">
                                        <h2>Кирилл Воронов</h2>

                                        <h3>26 августа</h3>
                                    </div>
                                </div>
                                <div className="answers">
                                    <h4>Ответ</h4>

                                    <p>
                                        Donec non justo elit. Praesent nec auctor tellus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Sidebar;