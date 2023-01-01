import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {Navigation} from "swiper";
import '../scss/swiper.css'
import "swiper/css";
import "swiper/css/navigation";


function Articles(){
    return (
        <section className="blog">
            <div className="container ircontainer">
                <h1>Статьи</h1>
                <div className="blog__card__list">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 2
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
                        <SwiperSlide className="swiper-slier">
                            <div className="blog__card">
                                <img src="img/phone (1).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier">
                            <div className="blog__card">
                                <img src="img/phone (2).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier">
                            <div className="blog__card">
                                <img src="img/phone (3).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slier">
                            <div className="blog__card">
                                <img src="img/phone (4).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}


export default Articles;