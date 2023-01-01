import React, { useEffect } from "react";
import Sidebar from "../sidebar";
import '../scss/applications.css'
import { Link } from "react-router-dom";
import NavApplication from './NavApplication'

function App() {
    useEffect(() => {
        document.title = 'Заявки';
    }, []);
    return (
        <div className='main nal df'>
            <Sidebar />
            <div className="block-info-4 block-info-4fff">
                <div className="mini-text">
                    <h1>Заявки</h1>
                </div>

                <NavApplication/>

                <div className="so_3">

                    <div className="flex-content df applffff">
                        <div className="name">
                            <h1>Имя</h1>
                            <p>ФАМИЛИЯ </p>
                        </div>

                        <div className="date">
                            <p>Дата</p>
                        </div>

                        <div className="info-content">
                            <h3>Диагностика IPhone 11 Pro Max</h3>
                            <h4>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</h4>
                        </div>

                        <div className="quality">
                            <p>Стоимость</p>
                        </div>

                        <div className="value">
                            <p>1 500 ₽ </p>
                        </div>

                        <div className="btn_2_progress">
                            <button className="btn_2_progress-canceled">Отмена </button>
                        </div>

                        <div className="img">
                            <img src="../img/img-phone.png" alt="" />
                        </div>
                    </div>

                    <div className="misirble-block">
                        <h2>Сообщение от клиента//</h2>
                    </div>

                    <div className="misirble-block">
                        <h2>Сообщение мастера, напишите сообщение Готов взяться выполнить</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;
