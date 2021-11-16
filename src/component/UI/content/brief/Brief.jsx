import React from "react";
import './Brief.css'
import vector from '../../../../images/vector_big.svg'

export const Brief = () => {
    return (
        <div className="container">
            <div className="main-brief">
                <div className="main-brief_block">
                    <div className="main-block_title">
                        <h3>Указать детали проекта и бюджет</h3>
                    </div>
                    <div className="main-brief_text">
                        <h1>
                            <a href="/brief">Заполнить бриф</a>
                        </h1>
                        <img src={vector} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
