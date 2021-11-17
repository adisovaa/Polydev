import React, {useState} from "react";
import './Footer.css'
import message from '../../../images/message.png'
import {Link, useHistory} from "react-router-dom";
import {openHandle} from "../../../redux/sliceReducer";
import {useDispatch} from "react-redux";
import BriefModal from "../../pages/briefPage/BriefPage";

const Footer = () => {
    const navs = ['Главная', 'О студии', 'Кейсы']
    const dispatch = useDispatch();
    let history = useHistory();

    const clickFooter = e => {
        dispatch(openHandle());
        if (e.target.textContent === 'Главная') {
            history.push('/')
        } else if (e.target.textContent === 'О студии') {
            history.push('/about')
        } else if (e.target.textContent === 'Кейсы') {
            history.push('/case')
        }
    }

    let showTextFooter = navs.map((navs, i) => {
        return (
            <li key={i}><a href='#top' onClick={clickFooter}>{navs}</a></li>
        )
    });

    return (
        <footer>
            <div className="wrapper">
                <div className="footer_items">
                    <div className="circle">
                        <a href='#top'>
                            <BriefModal/>
                        </a>
                    </div>
                    <div className="footer_content">
                        <div className="footer_item">
                            <h3>Разделы сайта</h3>
                            <ul>
                                {
                                    showTextFooter
                                }
                            </ul>
                        </div>

                        <div className="footer_item">
                            <h3>Контакты</h3>
                            <ul>
                                <li>polydev2021@gmail.com</li>
                                <li>+7(910)-888-55-66</li>
                                <li>Ростов-На-Дону, Б-р Комарова, д. 40, кв. 67</li>
                            </ul>
                        </div>

                        <div className="footer_item">
                            <h3>Документы</h3>
                            <ul>
                                <li>Политика конфиденциальности</li>
                                <li>Согласие на обработку персональных данных</li>
                            </ul>
                        </div>

                        <div className="footer_item">
                            <h3>Мы в cоц.сетях</h3>
                            <ul>
                                <li>Behance</li>
                                <li>Dribbble</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="line"></div>
                <div className="footer_text_security">
                    <div className="security_text">
                        <p>©Polydev, 2021</p>
                        <p>Все права защищены</p>
                    </div>

                    <div className="message_button">
                        <img src={message} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer