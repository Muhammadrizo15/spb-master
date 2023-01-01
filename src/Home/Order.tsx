import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
import '../scss/swiper.css'
import "swiper/css";
import "swiper/css/navigation";
function Order() {
    return (
        <section className="order">
            <div className="container ircontainer">
                <h1>Отзывы</h1>
                <div className="order__card__list">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            775: {
                                slidesPerView: 2
                            },
                            1099: {
                                slidesPerView: 3
                            },
                            1585: {
                                slidesPerView: 4
                            },
                        }}
                    >
                        <SwiperSlide className="swiper-slier order__card">
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img style={{width: '103px'}} src="img/feedback_yandex 2.png" alt="" />
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier order__card">
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img style={{width: '103px'}} src="img/feedback_yandex 2.png" alt="" />
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier order__card">
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img style={{width: '103px'}} src="img/feedback_yandex 2.png" alt="" />
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier order__card">
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img style={{width: '103px'}} src="img/feedback_yandex 2.png" alt="" />
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier order__card">
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img style={{width: '103px'}} src="img/feedback_yandex 2.png" alt="" />
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier order__card">
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img style={{width: '103px'}} src="img/feedback_yandex 2.png" alt="" />
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                            <img src="img/mark__star.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <a href="/reviews-master">Оставить отзыв после регистрации </a>
            </div>
        </section>
    )
}


export default Order;