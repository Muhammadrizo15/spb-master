import React, { useEffect } from "react";
import Sidebar from "../sidebar";
import '../scss/applications.css'
import{Link, useLocation} from "react-router-dom";



function App() {
    useEffect(() => {
        document.title = 'Заявки';
    }, []);
    const location = useLocation()
    return (
        <div className="mini-wrap mini-wrapff mini-wrap_links history__links df">
            <Link  className={location.pathname.includes("/applications/my") ? "just just__flexing active2" : "just just__flexing"}  to='/applications/my'>
                <h3>Мои заявки</h3>
                <span className="numbers__faCoigCXff">1</span>
            </Link>
            <Link  className={location.pathname.includes("/applications/performed") ? "just just__flexing active2" : "just just__flexing"}   to='/applications/performed'>
                <h3>Выполнено</h3>
                <span className="numbers__faCoigCXff">1</span>
            </Link>
            <Link className={location.pathname.includes("/applications/canceled") ? "just just__flexing active2" : "just just__flexing"}   to='/applications/canceled'>
                <h3>Отменено</h3>
                <span className="numbers__faCoigCXff">0</span>
            </Link>
            <Link  className={location.pathname.includes("/applications/all") ? "just just__flexing active2" : "just just__flexing"}  to='/applications/all'>
                <h3>Все</h3>
                <span className="numbers__faCoigCXff">1</span>
            </Link>
        </div>
    )
}


export default App;
