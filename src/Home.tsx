import React, { useEffect } from 'react';
import './scss/swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation, Pagination } from "swiper";
import Depature from "./Home/Depature";
import Order from "./Home/Order";
import Articles from "./Home/Articles";

function App() {
    useEffect(() => {
        document.title = 'Главная';
    }, []);


    return (
        <main>
            <section className="slider">
                <div className="container">
                    <div className="slider__content">
                        <h2>
                            Для любой поломки есть мастер техники
                            Apple
                        </h2>
                        <h4>Оригинальные запчасти</h4>
                        <h4>Разумные цены</h4>
                        <h4>Выезд</h4>
                    </div>
                    <Swiper navigation={true} modules={[Navigation, Pagination]} pagination={true} className="mySwiper">
                        <SwiperSlide className='pqw9ueryewqir'><img className='swiper-slide-asfdfadsXg afewrweq' src="img/slider-phone.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='pqw9ueryewqir'><img className='swiper-slide-asfdfadsXg afewrweq' src="img/slider-phone.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='pqw9ueryewqir'><img className='swiper-slide-asfdfadsXg afewrweq' src="img/slider-phone.png" alt="" /></SwiperSlide>
                        <SwiperSlide className='pqw9ueryewqir'><img className='swiper-slide-asfdfadsXg afewrweq' src="img/slider-phone.png" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <Depature />
            <Order />
            <Articles />
        </main>
    );
}

export default App;
