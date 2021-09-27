import React from 'react';
import './Info.css'

export const ClientInfo = () => {
    return (
        <div className="wrapper">
            <div className="clients_block">
                <div className="block_title">
                    <h3>Клиенты</h3>
                </div>
                <div className="block_text">
                    <p>Каждый проект и клиент уникальны. Мы выстраиваем отношения с обратной связью и взаимопомощью.
                        Формируем отдельную команду, для качественного и быстрого достижения целей. Работаем с крупными
                        агентствами, стартапами, компаниями на аутсорсе</p>
                </div>
            </div>
        </div>
    );
};

export const StudioInfo = () => {
    return (
        <div className="wrapper">
            <div>
                <div className="studio_heading">
                    <h2>О студии</h2>
                </div>
                <div className="studio_block">
                    <div className="clients_block">
                        <div className="block_title">
                            <h3>Помогаем бизнесу</h3>
                        </div>
                        <div className="block_text">
                            <p>Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем
                                требования рынка в функционале, создаём актуальный и понятный пользователю дизайн,
                                делаем проект от А до Я и оказываем поддержку. И всё по адекватным ценам и по
                                договору</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="wrapper">
                    <div className="count">
                        <div className="clients_count">
                            <h1>30+</h1>
                            <p>Довольных клиентов</p>
                        </div>
                        <div className="clients_count">
                            <h1>50+</h1>
                            <p>Проектов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};