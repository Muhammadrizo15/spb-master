import '../scss/service.css'
import '../scss/register-master.scss'
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import { useState } from 'react'


function Services() {


    const [expanded, isexpanded] = useState(true)


    // var expanded = false;
    // let checkboxes = document.querySelector('#checkboxes')




    return (
        <div className="main nal df">
            <Sidebar />
            <div className="block-info-8"> 

                <div className="setting df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <Link to="/profile">
                            <img src="./img/left-active.png" alt="" />
                        </Link>
                        <Link to="/finance">
                            <img src="./img/img-right.png" alt="" />
                        </Link>
                    </div>
                </div>

                <div className="mini-wrap mini-wrap_links df">
                    <Link className="just" to="/settings"><h3 >Общие</h3></Link>
                    <Link className="just" to="/profile"><h3>Профиль</h3></Link>
                    <Link className="just  active2" to='/service'><h3 >Услуги</h3></Link>
                    <Link className="just" to='/finance'><h3 >Финансы</h3></Link>
                </div>

                <div className="main-optifdsaons df">

                    <select id="uslugivasdf">
                        <option value="hide">Выбор вида услуг</option>
                        <option value="remont phone">Ремонт телефонов</option>
                        <option value="remont idad">Ремонт планшетов</option>
                        <option value="remont laptop">Ремонт ноутбуков</option>
                    </select>
                    <select id="uslugivasdf">
                        <option value="hide">Выбор устройства</option>
                        <option value="remont phone">Iphone 13</option>
                        <option value="remont idad">Iphone X</option>
                        <option value="remont laptop">Iphone </option>
                    </select>
                    <div>
                        <div className="selectBox" onClick={() => isexpanded(!expanded)}>
                            <select id="uslugivasdf">
                                <option>Выбор вида ремонта</option>
                            </select>
                            <div className="overSelect"></div>
                        </div>
                        <div id="checkboxes" style={!expanded ? { display: 'block', position: 'absolute', width: '17%' } : { display: 'none' }}>
                            <label htmlFor="one"><input type="checkbox" id="one" />Использовать стандартный список </label>
                            <label htmlFor="two"><input type="checkbox" id="two" />Загрузить свой список</label>
                        </div>
                    </div>
                </div>
                <div className="gosbnf">
                    <button className="goooSaveButton">Сохранить</button>
                </div>

            </div>
        </div>
    )
}


export default Services;
