import React from "react";

function DropdownService() {
    return (
        <div className="bldropdown-content">
            <div className="recent">
                <div  className="repair__phone__content">
                    <a href="#" className="repair__phone">
                        <h4>Ремонт телефонов</h4>
                        <img src="/img/arrowleft.png" alt=""/>
                    </a>
                    <div className="repair__phone__content__link">
                        <a href="/remont">
                            <h4>Ремонт IPhone</h4>
                        </a>
                    </div>
                </div>
            </div>
            <div className="recent">
                <a href="#" className="repair__phone">
                    <h4>Ремонт планшетов </h4>
                    <img src="/img/arrowleft.png" alt=""/>
                </a>
            </div>
            <div className="recent">
                <a href="#"  className="repair__phone">
                    <h4>Ремонт ноутбуков </h4>
                    <img src="/img/arrowleft.png" alt=""/>
                </a>
            </div>
            <div className="recent">
                <a href="#"  className="repair__phone">
                    <h4>Ремонт компьютеров  </h4>
                    <img src="/img/arrowleft.png" alt=""/>
                </a>
            </div>
            <div className="recent">
                <a href="#"  className="repair__phone">
                    <h4>Ремонт часов </h4>
                    <img src="/img/arrowleft.png" alt=""/>
                </a>
            </div>
            <div className="recent">
                <a href="#"  className="repair__phone">
                    <h4>Аксессуары </h4>
                    <img src="/img/arrowleft.png" alt=""/>
                </a>
            </div>

        </div>
    )
}


export default DropdownService;