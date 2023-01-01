import React, { useEffect } from "react";
import '../scss/added.css'
import Sidebar from "../sidebar";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";


function Profile() {
    useEffect(() => {
        document.title = 'Добавить устройства';
    }, []);

    return (
        <section className="page_8">
            <div className="accommodation mobile-accommodation">
                <div className="g add-device-center df mobile-g">
                    <div className="h h-mobile">
                        <div className="accommodation_text df align">
                            <div className="accom_1 mobile-accom_1">
                                <h2>
                                    Разместить устройство которого нет в списке
                                </h2>

                                <h3>
                                    Как сделать лучшее описание, чтобы получить отклики лучших специалистов
                                </h3>

                            </div>

                        </div>
                        <div className="service_category">
                            <div className="service_category-text">
                                <h2>
                                    Категория услуги
                                </h2>
                            </div>
                            <div className="servis df align servis-mobile">
                                <div className="servics_text-big mobile-servics_text-big">
                                    <div className="servic_text df align servic_text-mobile">
                                        <div className="servic_img">
                                            <img src="../img/accommodation_img/Vector 100.png" alt="no photo"/>
                                        </div>

                                        <h2>Уточните обьем работ</h2>
                                    </div>

                                    <div className="servic_text df align servic_text-mobile">
                                        <div className="servic_img">
                                            <img src="../img/accommodation_img/Vector 100.png" alt="no photo"/>
                                        </div>
                                        <h2>Как можно точно опишите результат</h2>
                                    </div>

                                    <div className="servic_text df align servic_text-mobile">
                                        <div className="servic_img">
                                            <img src="../img/accommodation_img/Vector 100.png" alt="no photo"/>
                                        </div>

                                        <h2>Опишите с каким мастером вы хотите работать</h2>
                                    </div>
                                    <div className="description">
                                        <div className="description_text mobile-description_text">
                                            <h2>
                                                Детальное описание задачи
                                            </h2>
                                        </div>
                                        <div className="descrip df mobile-descrip">
                                            <div className="description_img mobile-description_img">
                                                <img src="../img/accommodation_img/Group.svg" alt="no photo"/>
                                            </div>

                                            <textarea name="" id=""></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="big_headings">
                            <div className="heading">
                                <div className="heading_text mobile-heading_text">
                                    <h2>
                                        Рубрика
                                    </h2>
                                </div>
                                <div className="big_heading df align">
                                    <div className="heading_text-img mobile-heading_text-img">
                                        <img src="./img/accommodation_img/category.svg" alt="no photo"/>
                                    </div>

                                    <select className="pick__price">
                                        <option selected>Выбери из прайса</option>
                                        <option value="100$">100$</option>
                                        <option value="200$">200$</option>
                                        <option value="300$">300$</option>
                                    </select>
                                </div>
                            </div>
                            <div className="heading">
                                <div className="heading_text mobile-heading_text">
                                    <h2>
                                        Назначь цену себе
                                    </h2>
                                </div>
                                <div className="big_heading df align">
                                    <div className="heading_text-img mobile-heading_text-img">
                                        <img src="../img/accommodation_img/money.svg" alt="no photo"/>
                                    </div>

                                    <div className="heading_input df align">
                                        <input type="text" placeholder="Назначь цену"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="j">
                        <div className="accom_2 mobile-accom_2">
                            <h2>
                                Файлы
                            </h2>

                            <h3>
                                Загрузите до 10 файлов
                            </h3>
                        </div>

                        <div className="photo_upload">
                            <div className="photo_upload-img mobile-photo_upload-img">
                                <label htmlFor="upimg">
                                    <img src="../img/accommodation_img/photo.png" alt="no photo"/>
                                </label>
                                <input type="file" id="upimg" style={{display: "none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading_button mobile-heading_button">
                    <Link to="/order/actual">
                        Разместить
                    </Link>
                </div>
            </div>
        </section>
    )
}


export default Profile;
