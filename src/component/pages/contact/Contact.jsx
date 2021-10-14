import React from 'react';
import './Contact.css'
import Button from "../../common/Button";

const Contact = () => {
    return (
        <div className="wrapper">
            <div>
                <div className="studio_heading contact">
                    <h2>Контакты</h2>
                </div>
                <div className="heading_button contact_btn">
                    <Button/>
                </div>
                <div className="studio_block">
                    <div className="studio_item">
                        <div className="studio_title contact_title">
                            <h3>Куда писать и звонить</h3>
                        </div>
                        <div className="block_text contact_text">
                            <p>Вы можете написать нам на электронную почту или позвонить по телефону. Мы с удовольствием
                                ответим на вопросы и рассмотрим предложения</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="wrapper">
                    <div className="count contacts">
                        <div className="clients_count contact_count">
                            <p>Телефон</p>
                            <h5>+7(910)-862-55-88</h5>
                        </div>
                        <div className="clients_count contact_count">
                            <p>Email</p>
                            <h5>@polydev.io</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="studio_block second_block">
                    <div className="studio_item">
                        <div className="studio_title contact_title">
                            <h3>Офис</h3>
                        </div>
                        <div className="block_text contact_text">
                            <p>Офиса у нас нет, есть только адрес регистрации;) Так мы можем предлагать вам более
                                выгодные цены и нанимать хороших специалистов, не ограничиваясь одним городом</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="wrapper">
                    <div className="count contacts">
                        <div className="clients_count contact_count address">
                            <p>Адрес регистрации</p>
                            <h5>Ростов-На-Дону, Б-р Комарова, д. 40, кв. 67</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact