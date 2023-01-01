import React, {useState} from "react";
import{Link, useLocation} from "react-router-dom";
import SidebarMenu from "./menu/SidebarMenu";

function Sidebar() {
    const location = useLocation()
    const [visibleCountry, setVisibleCountry] = useState(false)
    const [visibleService, setVisibleService] = useState(false)
    const [menuActive, setMenuActive] = useState(false)
    const [active, isActive] = useState(true)
    function suke(){
        setMenuActive(!menuActive)
        isActive(!active)
    }
    return (
        <div>
            <div className="fixed-content">
                <div className="left-content">
                    <div className="dffds">
                        <div className="img-content">
                            <img src="../img/profile__image.png" alt=""/>
                            <h3>Алексей Иванов</h3>
                        </div>
                        <div className="stars">
                            <p>4.6 <img src="../img/img-star.png" alt=""/><img src="../img/img-star.png" alt=""/><img
                                src="../img/img-star.png" alt=""/><img src="../img/img-star.png" alt=""/><img
                                src="../img/img-star.png" alt=""/> 11</p>
                        </div>
                    </div>
                    <ul className="ul-wrap">
                        <li className={location.pathname.includes("/replenishment") ? "active" : ""}><img src="../img/img-exit.png" alt=""/><Link to="/replenishment"> Кошелек</Link></li>
                        <li className={location.pathname.includes("/settings") ? "active" : ""} ><img src="../img/img-contact.png" alt=""/><Link  to="/settings"> Настройки</Link></li>
                        <li className={location.pathname.includes("/16854163") || location.pathname.includes("/168789461") ? "active" : ""} ><img src="../img/img-massage.png" alt=""/><Link to="/chat/16854163">Чат</Link></li>
                        <li className={location.pathname.includes("/applications/my") ? "active" : ""}><img src="../img/img-list.png" alt=""/><Link to='/applications/my'> Мои заявки</Link></li>
                        <li className={location.pathname.includes("/reviews-master") ? "active" : ""}><img src="../img/img-white-star.png" alt=""/><Link to="/reviews-master"> Мои отзывы</Link></li>
                        <li className={location.pathname.includes("/orders/all") ? "active" : ""}><img src="../img/img-list-2.png " alt=""/><Link to="/orders/all"> Мои заказы</Link></li>
                    </ul>

                    <Link to="/">
                        <div className="icon df">
                            <img src="../img/img-exit-2.png" alt=""/>
                            <h2>Выйти</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={active ? 'sideburger-btn': 'sideburgeractive sideburger-btn'}  onClick={() => suke()}>
                <span/>
            </div>
            <SidebarMenu active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}


export default Sidebar;