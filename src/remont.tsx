import React, { useEffect } from "react";
import './scss/remont.css'

function Remont() {
    useEffect(() => {
        document.title = 'Ремонт iPhone';
    }, []);
    return (
        <section className="container remont remont-container">
            <h1>Ремонт iPhone</h1>
            <p>Выберите модель iPhone, чтобы узнать стоимость ремонта.</p>
            <div className="remont__card__list">
                    <div className="remont__card">
                        <a href="/detail" style={{textDecoration: 'none'}}>
                            <div className="remont__card__image">
                                <img src="./img/iphone.png" alt=""/>
                            </div>
                            <p>iPhone 13</p>
                        </a>
                    </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>
                <div className="remont__card">
                    <a href="/detail" style={{textDecoration: 'none'}}>
                        <div className="remont__card__image">
                            <img src="./img/iphone.png" alt=""/>
                        </div>
                        <p>iPhone 13</p>
                    </a>
                </div>

            </div>
        </section>
    )
}


export default Remont;