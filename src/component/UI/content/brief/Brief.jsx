import React from "react";
import './Brief.css'
import vector from '../../../../images/vector_big.svg'

export const Brief = () => {

    return (
        <div className="wrapper">
            <div className="brief_block">
                <div className="brief_block_item">
                    <div className="block_title">
                        <h3>Указать детали проекта и бюджет</h3>
                    </div>
                    <div className="brief_text">
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