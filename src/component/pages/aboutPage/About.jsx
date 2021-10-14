import React from 'react'
import about1 from './../../../images/about1.svg'
import about2 from './../../../images/about2.svg'
import about3 from './../../../images/about3.svg'
import about4 from './../../../images/about4.svg'
import Button from "../../common/Button";

import './About.css'

const AboutPage = () => {
    const cases = [
        {
            title: 'Работа с клиентом и управление',
            text: 'Мы используем нативные языки программирования и умеем работать фремворками/библиотеками',
            button1: 'Trello',
            button2: 'Jira',
            button3: 'Miro',
            images: about1
        },
        {
            title: 'Работа с клиентом и управление',
            text: 'Мы используем нативные языки программирования и умеем работать фремворками/библиотеками',
            button1: 'Trello',
            button2: 'Jira',
            button3: 'Miro',
            images: about2
        },
        {
            title: 'Работа с клиентом и управление',
            text: 'Мы используем нативные языки программирования и умеем работать фремворками/библиотеками',
            button1: 'Trello',
            button2: 'Jira',
            button3: 'Miro',
            images: about3
        },
        {
            title: 'Работа с клиентом и управление',
            text: 'Мы используем нативные языки программирования и умеем работать фремворками/библиотеками',
            button1: 'Trello',
            button2: 'Jira',
            button3: 'Miro',
            images: about4
        }
    ]
    return (
        <>
            <div className="wrapper">
                <div className="briefPage">
                    <div className="heading_block">
                        <div className="case_text">
                            <p>Мы делаем современные Digital-продукты на пользу бизнесу</p>
                        </div>
                        <div className="case_button">
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="caseContainer">
                <div className="case_title">
                    <h1>Дизайн. Верстка. Разра</h1>
                </div>
            </div>

            <div className="wrapper">
                <div className="case_agency">
                    <h1>Агенство</h1>
                    <div className="agency_items">
                        <div className="agency_text">
                            <p>Ответственно подходим к любому проекту, применяем методики дизайн-мышления, строим
                                гипотезы, тестируем, работаем с аудиторией, чтобы создавать удобные и дружелюбные
                                проекты для пользователей</p>
                        </div>

                        <div className="agency_links">
                            <div className="agency_link">
                                <p>Dribble</p>
                            </div>
                            <div className="agency_link">
                                <p>Instagram</p>
                            </div>
                        </div>
                    </div>
                    <div className="casepage_button">
                        <button>Смотреть портфолио</button>
                    </div>
                </div>
                <div className="case_tech">
                    <h1>Процессы <br/> и технологии</h1>
                    <div className="case_tech_blocks">
                        {
                            cases.map((cases, i) => {
                                return (
                                    <div className="case_block" key={i}>
                                        <div className="case_block_text">
                                            <h1>{cases.title}</h1>
                                            <p>{cases.text}</p>
                                            <div className="case_tools">
                                                <button>{cases.button1}</button>
                                                <button className='btn_right'>{cases.button2}</button>
                                                <button className='btn_right'>{cases.button3}</button>
                                            </div>
                                        </div>
                                        <div className="case_tech_banner">
                                            <img src={cases.images} alt=""/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="brief_block casepage_block wrapper">
                    <div className="brief_block_item">
                        <div className="block_title case_tech case_item">
                            <h1>Сотрудничество <br/>и вакансии</h1>
                        </div>

                        <div className="brief_text case_process_text case_contact">
                            <div className="count contacts">
                                <div className="case_count">
                                    <p>Если вы хотите у нас работать – пришлите на почту нашему HR резюме и
                                        портфолио</p>
                                    <div className="clients_count contact_count case_count_item">
                                        <p>Email нашего HR</p>
                                        <h5>HR@polydev.io</h5>
                                    </div>
                                </div>
                                <div className="case_count">
                                    <p>Если вы хотите у нас работать – пришлите на почту нашему HR резюме и
                                        портфолио</p>
                                    <div className="clients_count contact_count case_count_item">
                                        <p>Телеграм нашего CEO</p>
                                        <h5>@polydev.io</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default AboutPage