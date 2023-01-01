import React from "react";
import './baloon.css'
import {Link} from 'react-router-dom'

function BallonComponent() {
    return (
        <section className="page_1 driver-card"  id="drivers">
            <div className="container">
                <div className="card font">
                    <div className="card_iphone df">
                        <div className="card_iphone-img">
                            <img src="./img/nimadur_img/jack.png" alt="no photo"/>
                        </div>
                        <div className="big_card-phon_text">
                            <div className="card_iphone-text">
                                <h2>
                                    Алексей Михеев
                                </h2>

                                <h3>
                                    Частный мастер/Сервис
                                </h3>
                            </div>
                            <div className="card_iphone-img_2">
                                <img src="./img/nimadur_img/Star 68.png" alt="no photo"/>
                                <img src="./img/nimadur_img/Star 68.png" alt="no photo"/>
                                <img src="./img/nimadur_img/Star 68.png" alt="no photo"/>
                                <img src="./img/nimadur_img/Star 68.png" alt="no photo"/>
                                <img src="./img/nimadur_img/Star 68.png" alt="no photo"/>
                            </div>
                            <div className="card_iphone-text_3">
                                <Link to="/reviews-master">
                                    <h2>
                                        23 отзыва
                                    </h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="organization_names">
                        <div className="organization_text">
                            <h2>
                                Названия Организации, Адрес: и время работы
                            </h2>
                        </div>
                    </div>
                    <div className="infrormation">
                        <div className="big_infoo df">
                            <div className="information_text df">
                                <div className="infoo_text">
                                    <h2>На сайте:</h2>
                                    <h2>Статус:</h2>
                                    <h2>Оценка:</h2>
                                </div>

                                <div className="infoo_text-2">
                                    <h2>с 2022 года</h2>
                                    <h3>Онлайн</h3>
                                    <h3>5.00</h3>
                                </div>
                            </div>
                            <div className="infoo_button">
                                <div className="but">
                                    <button>
                                        Оформить заказ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BallonComponent;