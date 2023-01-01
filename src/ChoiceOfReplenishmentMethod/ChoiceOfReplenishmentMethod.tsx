import React, { Component, useEffect } from 'react';
import '../scss/ChoiceOfReplenishmentMethod.css'
import Sidebar from "../sidebar";
import ChoiceOfReplenishmentMethodHistory from "./ChoiceOfReplenishmentMethodHistory";
import ChoiceOfReplenishmentMethodCard from "./ChoiceOfReplenishmentMethodCard";

function ChoiceOfReplenishmentMethod() {
    useEffect(() => {
        document.title = 'Кошелек';
    }, []);

    return (
        <div className="main nal df">
            <Sidebar />

            <div className="block-info peo">
                <div className="main-block df">

                    <div className="middle-block-1">
                        <h1>Кошелек</h1>

                        <h3>Пополнение счета</h3>

                        <p>Сумма:</p>

                        <input type="text" placeholder="1500₽" />
                        <h6>Минимум 10₽ максимум 150 000 с учетом комиссии</h6>

                        <ChoiceOfReplenishmentMethodCard />

                        <div className="btn">
                            <a href="/refill">Далее </a>
                        </div>
                    </div>

                    <ChoiceOfReplenishmentMethodHistory />

                </div>
            </div>
        </div>
    )
}

export default ChoiceOfReplenishmentMethod;