import React from "react";
import './Footer.css'
import message from '../../images/message.png'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer_items">
                    <div className="circle">
                        <button>Заполнить бриф</button>
                    </div>
                    <div className="footer_content">
                        <div className="footer_item">
                            <h3>Разделы сайта</h3>
                            <ul>
                                <li>Главная</li>
                                <li>О студии</li>
                                <li>Кейсы</li>
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