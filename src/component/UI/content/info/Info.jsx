import React from 'react';
import './Info.css'

export const ClientInfo = () => {
    return (
        <div className="wrapper">
            <div className="clients_block">
                <div className="studio_title">
                    <h3>Клиенты</h3>
                </div>
                <div className="block_text clients_text">
                    <p>Среди наших клиентов есть разные компании: от стартапов до лидеров рынка. Их объединяет
                        желание найти  оптимальные решения для своего бизнеса, в чём мы с удовольствием помогаем</p>
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
                    <div className="studio_item">
                        <div className="studio_title">
                            <h3>Помогаем бизнесу</h3>
                        </div>
                        <div className="block_text ">
                            <p>В каждом проекте команда Polydev ориентируется   на задачи бизнеса. Поэтому мы анализируем целевую аудиторию, учитываем требования рынка в функционале, создаём дизайн на основе трендов и поведении пользователей, поддерживаем продукты после релиза</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="wrapper">
                    <div className="count">
                        <div className="clients_count_text">
                            <p>Так нам удается создавать продукты, которые приносят результаты заказчикам и нравятся пользователям</p>
                        </div>
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