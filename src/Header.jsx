import React, { useState, useEffect } from 'react';
import DropdownCountry from "./dropdownCountry"
import {
    Link,
    useLocation,
    Outlet
} from "react-router-dom";
import DropdownService from "./dropdownService";
import DropdownSetout from "./dropdownSetout";
import Menu from "./menu/Menu";



function App() {
    const location = useLocation()
    const [visibleCountry, setVisibleCountry] = useState(false)
    const [visibleService, setVisibleService] = useState(false)
    const [visibleSetout, setVisibleSetout] = useState(false)
    const [menuActive, setMenuActive] = useState(false)

    const [master, isMaster] = useState(true)



    useEffect(() => {

        window.addEventListener('scroll', () => {
            // console.log(visibleCountry);
            // console.log('qwer');
            // setVisibleCountry(false)
            // setVisibleSetout(false)
            // setVisibleService(false)
        })
    }, [])




    const [active, isActive] = useState(false)

    let [auth, isauth] = useState(false)




    const notRegistered = (value) => {
        if (location.pathname !== '/') {
            isauth(true)
        }
        return (
            <>
                <Link to="/login" className='login__link__pourhoie'>
                    Вход
                </Link>
                <Link to="/pick-login" className='regis__link__pourhoie'>
                    Регистрация
                </Link>
            </>
        )
    }

    const Registered = (value) => {
        return (
            <>
                <img className="" src="../img/ellipsewqrew.png" alt="" />
                <Link to="/chat/16854163"
                    style={{display: 'flex'}}
                    onClick={() => {
                        setVisibleCountry(false)
                        setVisibleSetout(false)
                        setVisibleService(false)
                    }}
                >
                    <img className="" src="../img/hfjsa.png" alt="" />
                </Link>
                {/* <Link to="/pick-login"> */}
                <div
                    className='yosetout'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        setVisibleSetout(!visibleSetout)
                        setVisibleCountry(false)
                        setVisibleService(false)
                    }}
                >
                    <img src="../img/profile.png" alt="" />
                    <img src="../img/dropdownuser.png" alt="" />
                    {/* {visibleSetout ? <DropdownSetout /> : null} */}
                    <div className="bldropdown">
                        {visibleSetout ? <DropdownSetout /> : null}
                    </div>
                    {/* </Link> */}
                </div>
                {master ? <p className='master__moneys'>10000₽</p> : null}
                <div className='master__moneys__full'>
                    <Link to="/replenishment">Пополнить баланс</Link>
                </div>
            </>
        )
    }



    return (
        <>
            <header >
                <div className="container">
                    <a href="/">
                        <img className='logo' src="../img/logo.png" alt="" />
                    </a>
                    <ul className="header__list">
                        <li className="bldropdown">
                            <div onClick={() => {
                                setVisibleService(!visibleService)
                                setVisibleCountry(false)
                                setVisibleSetout(false)
                            }}>
                                <a href="#" className="header__link">Услуги</a>
                                <img src="../img/afdsfads.png" alt="" />
                            </div>
                            {visibleService ? <DropdownService /> : null}
                        </li>
                        <li className="dropdown">
                            <div onClick={() => {
                                setVisibleCountry(!visibleCountry)
                                setVisibleSetout(false)
                                setVisibleService(false)
                            }}>
                                <a href="#" className="header__link">Город</a>
                                <img src="../img/afdsfads.png" alt="" />
                            </div>
                            {visibleCountry ? <DropdownCountry /> : null}
                        </li>
                        <li>
                            <a href="/" className="header__link">Статьи</a>
                        </li>
                        <li>
                            <a href="/" className="header__link">Отзывы</a>
                        </li>
                        <li>
                            <Link to="/master-map" className="header__link">Контакты</Link>
                        </li>
                    </ul>
                    <div className="header__profile">
                        {/*If Use authorized)*/}
                        {auth === true ? Registered('asdf') : null}
                        {auth === false ? notRegistered('fsd') : null}
                    </div>
                </div>
                <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span />
                </div>
                <Menu active={menuActive} setActive={setMenuActive} />
            </header>
            <Outlet />
        </>

    );
}

export default App;
