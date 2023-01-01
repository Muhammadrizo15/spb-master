import React from "react";

function DropdownCountry(){
    return(
        <div className="dropdown-content">
            <input type="text" placeholder="Выберете регион или город"/>
            <div className="recent">
                <a href="#">
                    <h4>Санкт-Перербург <span> и Ленинградская облость   </span></h4>
                </a>
            </div>
        </div>
    )
}

export default DropdownCountry;