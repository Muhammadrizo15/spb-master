import {React , useState} from 'react'
import { YMaps, Map, FullscreenControl,  Placemark, ZoomControl } from 'react-yandex-maps';
import BallonComponent from './BallonComponent';
import { Portal } from './mapPortal';

const Map1 = () => {
    function fail () {
        let afsad = document.querySelector('.ymaps-2-1-79-places-pane')


        
        console.log(afsad);
    }

    const [activePortal, setActivePortal] = useState(false)

    return (
        <div>

        <YMaps version={ '2.1.79' }>
            <Map 
                onClick={fail}
                width='100%'

                modules={['geoObject.addon.balloon', 'geoObject.addon.hint','control.ZoomControl', 'control.ZoomControl']}
                height='500px'
                defaultState={{
                    center: [59.938955, 30.315644],
                    zoom: 9,
                    controls: ['zoomControl']
                }}
                
            >
                <Placemark 
                    className='asfd'
                    geometry={[59.938955, 30.315644]}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    properties={
                        {
                            hintContent: '<b> Алексей Михеев </b>',
                            balloonContent: "<style>  * {        margin: 0;        padding: 0;        box-sizing: border-box;    } .erqewreqwrweq {display: flex; align-items:center}   .container {        max-width: 80%;        margin: 0 auto;    }    a {        text-decoration: none;    }    li {        list-style: none;    }    .align {        align-items: center;    }    .df {        display: flex;    }    .font {        font-family: 'Abel', sans-serif;    }    /* section page_1 start */    .card_iphone-text h2 {        margin: 0 0 10px 0;        font-weight: 400;        font-size: 18px;        line-height: 23px;        color: #000;    }    .card_iphone-text h3 {        margin: 0 0 10px 0;        font-weight: 400;        font-size: 16px;        line-height: 20px;        color: #030303;    }    .card_iphone-text_2 h2 {        text-align: end;        font-weight: 400;        font-size: 16px;        line-height: 19px;        color: #2AB138;    }    .card_iphone-img_2 {        margin: 0 0 10px 0;    }    .card_iphone-img_2 img {        margin: 0 10px 0 0;    }    .card_iphone-text_3 h2 {        font-weight: 400;        font-size: 14px;        line-height: 17px;        color: #59A4E9;    }    .organization_text h2 {        margin: 5px 0 13px 0;        font-weight: 400;        font-size: 16px;        line-height: 20px;        color: #000;    }    .big_card-phon_text {        margin: 0 0 0 20px;    }    .infoo_text h2 {        margin: 0 25px 10px 0;        font-weight: 400;        font-size: 16px;        line-height: 20px;        color: #9F9F9F;    }    .infoo_text-2 h2 {        margin: 0 0 10px 0;        font-weight: 400;        font-size: 16px;        line-height: 20px;        color: #0C0C0C;    }    .infoo_text-2 h3 {        margin: 0 0 10px 0;        font-weight: 400;        font-size: 16px;        line-height: 20px;        color: #30BD4F;    }    .infoo_button .but button {        cursor: pointer;        border: none;        background: #D9573B;        border-radius: 8px;        padding: 4px 10px 8px;        font-weight: 400;        font-size: 13px;        line-height: 26px;        text-align: center;        color: #fff;    }    .infoo_button {        margin: 35px 0 0 15px;    }    .card {        width: 350px;        height: 280px;        background: #F8F8F8;        border-radius: 10px;    }    .information_text {        margin: 0 0 0 25px;    }    .card_iphone {        padding: 16px 0 0 16px;    }</style><body>    <!-- /section page_1 start -->    <section>        <div>            <div class='card font' id='drivers'>                <div class='card_iphone df'>                    <div class='card_iphone-img'>                        <img src='./img/nimadur_img/jack.png' alt='no photo'>                    </div>                    <div class='big_card-phon_text'>                        <div class='card_iphone-text'>                            <h2>                                Алексей Михеев                            </h2>                            <h3>                                Частный мастер/Сервис                            </h3>                        </div>                        <!-- <div class='card_iphone-text_2'>                            <h2>                                5                            </h2>                        </div> -->                        <div class='card_iphone-img_2 erqewreqwrweq'>                            <img src='./img/nimadur_img/Star 68.png' alt='no photo'>                            <img src='./img/nimadur_img/Star 68.png' alt='no photo'>                            <img src='./img/nimadur_img/Star 68.png' alt='no photo'>                            <img src='./img/nimadur_img/Star 68.png' alt='no photo'>                            <img src='./img/nimadur_img/Star 68.png' alt='no photo'>    <p style='margin-bottom: 10px; color: green'>5 </p>                   </div>                        <div class='card_iphone-text_3'>                            <a href='/reviews-master'><h2>                                23 отзыва                            </h2></a>                        </div>                    </div>                </div>                <div class='organization_names'>                    <div class='organization_text'>                        <h2>                            Названия Организации, Адрес: и время работы                        </h2>                    </div>                </div>                <div class='infrormation'>                    <div class='big_infoo df'>                        <div class='information_text df'>                            <div class='infoo_text'>                                <h2>На сайте:</h2>                                <h2>Статус:</h2>                                <h2>Оценка:</h2>                            </div>                            <div class='infoo_text-2'>                                <h2>с 2022 года</h2>                                <h3>Онлайн</h3>                                <h3>5.00</h3>                            </div>                        </div>                        <div class='infoo_button'>                            <div class='but'>                                <a class='wryweoi' href='/detail/true'><button>                                    Оформить заказ                                </button></a>                            </div>                        </div>                    </div>                </div>            </div>        </div>    </section>",
                        }}
                    onClick={() => {
                        setActivePortal(true)
                    }} />


                <ZoomControl defaultState={{center: [59.938955, 30.315644]}} />

                <FullscreenControl options={{ float: 'left' }} />
            </Map>
            {
                activePortal && <Portal getHTMLElementId={ 'drivers' }>
                                  <BallonComponent/>
                                    </Portal>
              }
        </YMaps>
        </div>
    )
}


export default Map1;