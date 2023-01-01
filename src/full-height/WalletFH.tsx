import React, { useEffect } from "react";
import Sidebar from "../sidebar";
import './startff.css'

import { Link } from "react-router-dom";
import ChoiceOfReplenishmentMethodHistory from "../ChoiceOfReplenishmentMethod/ChoiceOfReplenishmentMethodHistory";
import ChoiceOfReplenishmentMethodCard from "../ChoiceOfReplenishmentMethod/ChoiceOfReplenishmentMethodCard";


function App() {

    useEffect(() => {
        document.title = 'Настройки';
    }, []);

    return (
        <div className="main nal df">
            <div className="block-info-7">

                <div className="setting settingasfds df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <Link to="/login/profile">
                            <img src="../img/left-active.png" alt="" />
                        </Link>
                        <img src="../img/right-disable.png" alt="" />
                    </div>
                </div>

                <div className="mini-wrap fasdfqwtwqtrttt mini-wrap_links df">
                    <Link className="just" to="/login/profile"><h3>Профиль</h3></Link>
                    <Link className="just active2" to='/login/wallet'><h3 >Фотография </h3></Link>
                </div>

                <div className="block-info-12">


                    <div className="photo-taking">
                        <label htmlFor="upfile">
                            <img className="upstarimg" src="../img/biguploadimage.png" alt="" />
                        </label>
                        <input type="file" id="upfile" style={{ display: "none" }} />
                        <div className="block-btn bgpuherpte df">
                            <button className="btn-8 deleditbtns">Изменить</button>
                            <button className="btn-9 deleditbtns">Удалить</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default App;
