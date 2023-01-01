import React, { useState } from "react";
import { Link } from "react-router-dom";

import './scss/setout.css'

function DropdownService() {

    const [master, Ismaster] = useState(true)


    const masterComponent = (value: any) => {
        return (
            <div className="master__dropdown">
                <div className="recent">
                    <Link to="/login/profile" className="repair__phone">
                        <h4
                            onClick={window.location.reload}
                        >Я клиент </h4>
                    </Link>
                </div>
                <div className="recent">
                    <Link to="/login/profile" className="repair__phone">
                        <h4
                            onClick={window.location.reload}
                        >Настройки</h4>
                    </Link>
                </div>
                <div className="recent">
                    <Link to="/added-device" className="repair__phone">
                        <h4
                            onClick={window.location.reload}
                        >Мои заявки</h4>
                    </Link>
                </div>
                <div className="recent">
                    <Link to="/order/actual" className="repair__phone">
                        <h4
                            onClick={window.location.reload}
                        >Мои заказы</h4>
                    </Link>
                </div>
                <div className="recent">
                    <Link
                        to="/"
                        className="repair__phonffe"
                    >
                        <img src="/img/logout.png" alt="" />
                        <h4>Выйти </h4>
                    </Link>
                </div>
            </div>
        )
    }

    const clientComponent = (value: any) => {
        return (
            <div className="client__dropdown">
                <div className="recent">
                    <Link to="/login/profile" className="repair__phone">
                        <h4
                            onClick={window.location.reload}
                        >Я мастер</h4>
                    </Link>
                </div>
                <div className="recent">
                    <Link to="/login/profile" className="repair__phone">
                        <h4
                            onClick={window.location.reload}
                        >Личный кабинет </h4>
                    </Link>
                </div>
                <div className="recent">
                    <Link
                        to="/"
                        className="repair__phonffe"
                    >
                        <img src="/img/logout.png" alt="" />
                        <h4>Выйти </h4>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="bldropdownfff-content">
            {master ? masterComponent('fasd') : clientComponent('adsfads')}


        </div>
    )
}


export default DropdownService;