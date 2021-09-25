import React from "react";
import './Brief.css'
import vector from '../../../images/vector_big.svg'
import vectorSml from '../../../images/vector bottom.svg'

export const Brief = () => {
    return (
        <div className="brief_block">
            <div className="wrapper">
                <div className="brief_block_item">
                    <div className="clients_block">
                        <div className="block_title">
                            <h3>Указать детали проекта и бюджет</h3>
                        </div>
                        <div className="brief_text">
                            <h1>
                                <a href="/">Заполнить бриф</a>
                            </h1>
                            <img src={vector} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="brief_bottom">
                    <p>Посмотреть ответы на вопросы</p>
                    <a href="#">
                        <img src={vectorSml} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}