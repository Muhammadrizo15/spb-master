import React, { useEffect, useState } from "react";
import './scss/detail.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import Popup from 'reactjs-popup';
import Map1 from './yandexMap/map'
import './scss/media.css'
import { Navigation } from "swiper";
import { Link, useLocation, useParams } from 'react-router-dom'

function Detail() {
    let location = useLocation()

    let { boolen } = useParams();
    const [show, setShow] = useState(false)
    const [showSec, setShowSec] = useState(false)






    useEffect(() => {
        document.title = 'iPhone 11 Pro Max';
        let pickf = document.querySelectorAll('.pickfaf')
        let box = document.querySelectorAll('.main__card__third')

        // console.log(pickf);



        function myFunction(x) {
            if (x.matches) { // If media query matches
                pickf.forEach((e) => {
                    e.addEventListener('click', (f) => {
                        let current = f.path[0]
                        console.log(f);
                        let parentDiv = f.path[3]
                        console.log(parentDiv);
                        let child = parentDiv.querySelector('.activeijpqwothweoruh')
                        console.log(child);
                        child.classList.toggle("actifffve");
                    })
                })
            } else {
                pickf.forEach((e) => {
                    e.addEventListener('click', (f) => {
                        let current = f.path[0]
                        // console.log(f);
                        let parentDiv = f.path[2]
                        // console.log(parentDiv);
                        let child = parentDiv.querySelector('.main__card__third ')
                        // console.log(child);
                        child.classList.toggle("actifffve");
                    })
                })
            }
        }

        var x = window.matchMedia("(max-width: 700px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

    }, []);
    const [classname, setClassName] = useState("")
    const [goToR, isgoToR] = useState(false)


    const Active = (e) => {
        setClassName(" border")
    }







    return (
        <div >
            <section className="main__info container detail-container">
                <div className="main__info__content">
                    <h1>?????????????????? ?????????? ???? ?????????????? <strong>iPhone 11 Pro Max</strong></h1>
                    <div className="df align-center">
                        <img src="../img/search.png" className="paugfheotw" alt="" />
                        <input type="text" placeholder="??????????..." className="searchaproblemEnter" />
                    </div>
                    <div className="order__cards__to__scrolls">
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>
                        <div className="first__s__card">
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>????????????</h4>
                                    <p>?????????????????????? ???????????????????????????? ?? ?????????????????????? ?????????? ???? ?????????????? IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>???? 30 ??????</p>
                                    <button className="pickfaf" onClick={Active}>??????????????</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                            <div className="main__card__third activeijpqwothweoruh"></div>
                        </div>

                    </div>
                    <button id="myBtn" onClick={() => { setShow(true) }}> ???????????????? ??????????</button>

                    <div className="popupdetailfwpruhwe" style={show ? null : { display: 'none' } && boolen ? null : { display: 'none' } }>
                        <div className="modfdfsdafasal-content">
                            <div className={goToR ? "modal-content model-content-fooo oformitzayavka gomodaldetailfgg werwertttt" : "modal-content oformitzayavka model-content-fooo werwertttt"}>
                                <span onClick={() => {
                                    setShow(false)
                                }}
                                ><img className="close" src="../img/img-delete.png" alt="" /></span>
                                <h1 className="detailpopuptitle">???????????????? ??????????</h1>
                                <p>?????????????????????? ???????? ???????????? ???????????? ???? ????????????????</p>
                                <form>
                                    <div className="df">
                                        <input type="text" placeholder="???????? ??????" />
                                        <input className="ismrf" type="text" placeholder="?????????? ????????????????" />
                                    </div>
                                    <input type="text" placeholder="?????????????? ??????????????????" />
                                    {/* <input type="text" className="descdetail" placeholder="???????????????? ????????????????" /> */}
                                    <textarea className="descdetail" placeholder="???????????????? ????????????????" cols="30" rows="10">
                                    </textarea>
                                    <button
                                        onClick={() => { 
                                            setShow(false)
                                            setShowSec(true)
                                         }}
                                        className="done"
                                        type='button'
                                    >
                                        ??????????????????
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="popupdetailfwpruhwe" style={showSec ? null : { display: 'none' }}>
                        <div className="modfdfsdafasal-content">
                            <div id="myModal-two" className="modal-two">
                                <div className="modal-content-two">
                                    <h1>???????? ???????????? ??????????????????????</h1>
                                    <p>
                                        ?????? ?????????? ????????????????????????
                                        ???????????? ???????????????? ??????????????
                                        ?????????????? ?????????????????? ??????????
                                    </p>
                                    <Link to="/added-device">
                                        <button className="done-two">????</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <Popup
                        trigger={}
                        modal
                        open={boolen == 'true' ? true : false}
                        nested
                    >
                        {close => (
                            <div className={goToR ? "modal-content model-content-fooo oformitzayavka gomodaldetailfgg werwertttt" : "modal-content oformitzayavka model-content-fooo werwertttt"}>
                                <span onClick={close}><img className="close" src="../img/img-delete.png" alt="" /></span>
                                <h1 className="detailpopuptitle">???????????????? ??????????</h1>
                                <p>?????????????????????? ???????? ???????????? ???????????? ???? ????????????????</p>
                                <form>
                                    <div className="df">
                                        <input type="text" placeholder="???????? ??????" />
                                        <input className="ismrf" type="text" placeholder="?????????? ????????????????" />
                                    </div>
                                    <input type="text" placeholder="?????????????? ??????????????????" /> */}
                    {/* <input type="text" className="descdetail" placeholder="???????????????? ????????????????" /> */}
                    {/* <textarea className="descdetail" placeholder="???????????????? ????????????????" cols="30" rows="10">
                                    </textarea>
                                    <button
                                        onClick={
                                            console.log(134)
                                        }
                                        className="done"
                                        type='button'
                                    >
                                        ??????????????????
                                    </button>
                                </form>
                            </div>
                        )}
                    </Popup>
                    <Popup open={show ? true : false} modal nested>
                        {close => (
                            <div id="myModal-two" className="modal-two">
                                <div className="modal-content-two">
                                    <h1>???????? ???????????? ??????????????????????</h1>
                                    <p>
                                        ?????? ?????????? ????????????????????????
                                        ???????????? ???????????????? ??????????????
                                        ?????????????? ?????????????????? ??????????
                                    </p>
                                    <Link to="/added-device">
                                        <button className="done-two" onClick={close}>????</button>
                                    </Link>
                                </div>
                            </div>
                        )}

                    </Popup> */}
                </div>

                <div className="main__info__image">
                    <img src="../img/detail-iphone.png" alt="" />
                    <p>
                        ???????????????? ?????? ?????????????? ?????? ???????????????? ?? ?????????????????? ????????????.
                        ?????? ?????????????????????????? ????????
                    </p>
                </div>
            </section>
            <section className="detail__price">
                <div className="container detail-price-container">
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
                            800: {
                                slidesPerView: 3
                            },
                            1124: {
                                slidesPerView: 4
                            },
                        }}
                    >
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card red">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card red">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card red ">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt="" />
                                </div>
                                <p>???????????????? ?????????????? ?? ???????? ???? ???????????? ???????????????????? ???????????? </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="map">
                <input type="text" className="yandex__map__search inter" placeholder="?????????????? ??????????, ?????????????????? ???????? ?????????????? ?? ?????????????? 5 ????" />
                <Map1 />
            </section>
        </div>
    )
}


export default Detail