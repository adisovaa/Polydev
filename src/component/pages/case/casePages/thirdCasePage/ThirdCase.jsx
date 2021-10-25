import React from 'react'
import canadianLogo from "../../../../../images/canadian.svg";
import {CaseProject, CaseTasks, CaseTitle} from "../../caseComponents/caseProjects/CaseProject";
import Button from "../../../../common/Button";
import thirdCaseBanner from './../../../../../images/canadian_1.png'
import thirdCaseBanner2 from './../../../../../images/canadian_2.png'
import doAim from "../../../../../images/canadian_transparent.png";
import doAimTransparent from "../../../../../images/canadian_logo_2.svg";
import CaseReview from "../../caseComponents/caseReview/caseReview";

import './ThirdCase.css'

const ThirdCase = () => {
    const btnInfo = ['Лендинг']

    return (
        <>
            <div className='cases_heading' style={{backgroundColor: '#262626'}}>
                <div className="wrapper">
                    <div className="cases_heading_block">
                        <div className="casesBlock">
                            <div className="cases_text">
                                <h1 className='word'>Canadian </h1>
                                    <h1>international sports & education</h1>
                            </div>
                            <div className="heading_button cases_btn">
                                <Button/>
                            </div>
                        </div>
                        <div className="canadian_case_logo">
                            <img src={canadianLogo} alt=""/>
                            <a href="/">Перейти на сайт</a>
                        </div>
                        <div className="cases_block">
                            <div className="cases_buttons">
                                {btnInfo.map((btnInfo, i) => {
                                    return (<button key={i}>{btnInfo}</button>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseProject
                text={'Swift Global LTD – международная компания, предоставляющая услуги по купле, продаже и хранению драгоценных металлов'}/>

            <CaseTasks title1='Брендинг'
                       text1='Создали единый узнаваемый стиль. Разработали логотип, подобрали шрифты и цвет, исходя из позиционирования компании, особенностей отрасли и отношения к клиентам'
                       title2='Лендинг'
                       text2='Мы разработали страницу для продвижения, быстрой продажи и информирования клиентов об услугах хранения и продажи драгоценных металлов. В итоге получилось проверить гипотезы для сайта и создать дополнительный источник продажи основных услуг клиента'
                       title3='Многостраничный сайт'
                       text3='Разработали для того, чтобы компания могла на долгосрочной основе работать с лояльными пользователями, но при этом привлекать новых клиентов и в полном объёме информировать их об услугах и продавать эти услуги'/>

            <CaseTitle title='Landing page'
                       text='Мы взяли спокойные цвета, строгие формы для передачи рабочего настроения надёжной компании. В итоге мы создали минмалистичный дизайн, который решает задачи заказчика  и настраивает его клиентов на деловой лад'/>

            <div className="case_banner wrapper">
                <img src={thirdCaseBanner} alt=""/>
            </div>

            <CaseTitle title='Лендинг'
                       text='Мы взяли спокойные цвета, строгие формы для передачи рабочего настроения надёжной компании. В итоге мы создали минмалистичный дизайн, который решает задачи заказчика  и настраивает его клиентов на деловой лад'/>

            <div className="case_banner wrapper">
                <img src={thirdCaseBanner2} alt=""/>
            </div>

            <div className="case wrapper">
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Логотип</h3>
                    </div>
                    <div className="styleSolution_text">
                        <img src={doAim} alt=""/>
                        <img src={doAimTransparent} alt="" className='transparentImgCanadian' />
                    </div>
                </div>
            </div>

            <div className="case wrapper orangeCircleBlock">
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Цвет</h3>
                    </div>
                    <div className="styleSolution_text">
                       <div className="orange_blocks">
                           <div className="blocks">
                               <div className="orange_circle"><p>#01579B</p></div>
                               <div className="black_circle"><p>#262626</p></div>
                           </div>
                           <div className="blocks">
                               <div className="gray_circle"><p>#F6F6F6</p></div>
                               <div className="peach_circle"><p>#FFA06D</p></div>
                           </div>
                       </div>
                        <p className='circle_text'>Мы взяли цвета канадского флага и адаптировали их под лендинг, подобрали дополнительные цвета для фона</p>
                    </div>
                </div>
            </div>

            <div className="case wrapper">
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Шрифты</h3>
                    </div>
                    <div className="styleSolution_text">
                        <div className="case-underline-blocks">
                            <div className="case-underline-block">
                                <h1>H1</h1>
                                <p>Montserrat, Medium, 64</p>
                            </div>
                            <div className="case-underline-block">
                                <h2>H2</h2>
                                <p>Montserrat, Bold, 36</p>
                            </div>
                            <div className="case-underline-block">
                                <h3>H3</h3>
                                <p>Inter, Semi bold, 24</p>
                            </div>
                            <div className="case-underline-block">
                                <h4>H4</h4>
                                <p>Montserrat, Medium, 24</p>
                            </div>
                            <div className="case-underline-block">
                                <h5>Big body</h5>
                                <p>Inter, Light, 24</p>
                            </div>
                            <div className="case-underline-block">
                                <h6>Body</h6>
                                <p>Inter, Regular, 16</p>
                            </div>
                        </div>

                        <p>За акцидентный шрифт мы взяли Montserrat. У него строгие формы: форма букв стремится либо к
                            кругу, либо к квадрату. Без струглений. Основной текст набран шрифтом “Inter”. Простота –
                            залог успеха ;)</p>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Сетка</h3>
                    </div>
                    <div className="desktop_block">
                        <div className="size">
                            <h4>Desktop</h4>
                            <p>1440</p>
                        </div>
                        <div className="desktop">
                            <div className="desktopLine first_line">120</div>
                            <div className="desktopLine second_line">480</div>
                            <div className="desktopLine third_line">120</div>
                            <div className="desktopLine fourth_line">600</div>
                            <div className="fifth_line">120</div>
                        </div>
                    </div>
                </div>
                <div className="tableMobile">
                    <div className="table_block">
                        <div className="desktop_blocks">
                            <div className="size">
                                <h4>TABLET</h4>
                                <p>1024</p>
                            </div>
                            <div className="laptop">
                                <div className="desktopLine first_line">60</div>
                                <div className="desktopLine second_line">380</div>
                                <div className="desktopLine third_line">64</div>
                                <div className="desktopLine fourth_line">460</div>
                                <div className="fifth_line">60</div>
                            </div>
                        </div>
                    </div>
                    <div className="table_block">
                        <div className="desktop_blocks">
                            <div className="size">
                                <h4>MOBILE</h4>
                                <p>360</p>
                            </div>
                            <div className="mobile">
                                <div className="desktopLine first_line">24</div>
                                <div className="desktopLine second_line">144</div>
                                <div className="desktopLine third_line">24</div>
                                <div className="desktopLine fourth_line">144</div>
                                <div className="fifth_line">24</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseReview/>

        </>
    )
}

export default ThirdCase