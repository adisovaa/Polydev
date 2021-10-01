import React from 'react'
import './Case.css'
import vector from "../../../images/vector_big.svg";
import about1 from './../../../images/about1.svg'
import about2 from './../../../images/about2.svg'
import about3 from './../../../images/about3.svg'
import about4 from './../../../images/about4.svg'

const CasePage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="briefPage">
                    <div className="heading_block">
                        <div className="case_text">
                            <p>Мы делаем современные Digital-продукты на пользу бизнесу</p>
                        </div>
                        <div className="heading_button">
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="caseContainer">
                <div className="case_title">
                    <h1>Дизайн. Верстка. Разраб</h1>
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
                    <div className="heading_button agency_btn">
                        <button>Смотреть портфолио</button>
                    </div>
                </div>
                <div className="case_tech">
                    <h1>Процессы <br/> и технологии</h1>
                    <div className="case_tech_blocks">
                        <div className="case_block">
                            <div className="case_block_text">
                                <h1>Работа с клиентом и управление</h1>
                                <p> Мы используем нативные языки программирования и умеем работать с
                                    фремворками/библиотеками</p>
                                <div className="case_tools">
                                    <button>Trello</button>
                                    <button className='btn_right'>Jira</button>
                                    <button className='btn_right'>Miro</button>
                                </div>
                            </div>
                            <div className="case_tech_banner">
                                <img src={about1} alt=""/>
                            </div>
                        </div>
                        <div className="case_block">
                            <div className="case_block_text">
                                <h1>Дизайн</h1>
                                <p>Мы используем нативные языки программирования и умеем работать с
                                    фремворками/библиотеками</p>
                                <div className="case_tools">
                                    <button>Figma</button>
                                    <button className='btn_right'>Adobe Photoshop</button>
                                    <button className='btn_right'>Miro</button>
                                </div>
                            </div>
                            <div className="case_tech_banner">
                                <img src={about2} alt=""/>
                            </div>
                        </div>
                        <div className="case_block">
                            <div className="case_block_text">
                                <h1>Вёрстка и разработка</h1>
                                <p>Мы используем нативные языки программирования и умеем работать с
                                    фремворками/библиотеками</p>
                                <div className="case_tools">
                                    <button>CSS</button>
                                    <button className='btn_right'>HTML</button>
                                    <button className='btn_right'>React</button>
                                </div>
                            </div>
                            <div className="case_tech_banner">
                                <img src={about3} alt=""/>
                            </div>
                        </div>
                        <div className="case_block">
                            <div className="case_block_text">
                                <h1>Работа с контентом</h1>
                                <p>Мы используем нативные языки программирования и умеем работать с
                                    фремворками/библиотеками</p>
                                <div className="case_tools">
                                    <button>Trello</button>
                                    <button className='btn_right'>Jira</button>
                                    <button className='btn_right'>Miro</button>
                                </div>
                            </div>
                            <div className="case_tech_banner">
                                <img src={about4} alt=""/>
                            </div>
                        </div>
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
                                   <p>Если вы хотите у нас работать – пришлите на почту нашему HR резюме и портфолио</p>
                                   <div className="clients_count contact_count case_count_item">
                                       <p>Email нашего HR</p>
                                       <h1>HR@polydev.io</h1>
                                   </div>
                               </div>

                                <div className="case_count">
                                    <p>Если вы хотите у нас работать – пришлите на почту нашему HR резюме и портфолио</p>
                                    <div className="clients_count contact_count case_count_item">
                                        <p>Телеграм нашего CEO</p>
                                        <h1>@polydev.io</h1>
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

export default CasePage