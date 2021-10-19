import React from 'react'
import CaseHeading from "../../caseComponents/caseHeader/caseHeading";
import doLogo from "../../../../../images/doLogo.svg";
import appStore from "../../../../../images/appStore.png"
import {CaseProject, CaseTasks, CaseTitle, CustomerReview} from "../../caseComponents/caseProjects/CaseProject";
import makeClothes from "../../../../../images/make-clothes.png";
import doAim from '../../../../../images/doAim.svg'
import doAimTransparent from '../../../../../images/doTransparent.svg'
import CaseReview from "../../caseComponents/caseReview/caseReview";

import './SecondCase.css'

const SecondCase = () => {
    const btnInfo = ['Приложение']
    return (
        <>
            <CaseHeading title={'Делай вещи'}
                         text={"Создание одежды с индивидуальным дизайном на заказ"}
                         caseLogo={doLogo}
                         link={''}
                         appStore={appStore}
                         btnInfo={btnInfo}
                         backgroundColor={'#FF5C45'}/>

            <CaseProject
                text={'Делай Вещи - это мобильное приложение для упрощения процесса приобретения выписанных врачом назначений'}/>

            <CaseTasks title1='Вёрстка'
                       text1='Создали единый узнаваемый стиль. Разработали логотип, подобрали шрифты и цвет, исходя из позиционирования компании, особенностей отрасли и отношения к клиентам'
                       title2='Разработка'
                       text2='Мы разработали страницу для продвижения, быстрой продажи и информирования клиентов об услугах хранения и продажи драгоценных металлов. В итоге получилось проверить гипотезы для сайта и создать дополнительный источник продажи основных услуг клиента'
                       title3='Доработка дизайна'
                       text3='Разработали для того, чтобы компания могла на долгосрочной основе работать с лояльными пользователями, но при этом привлекать новых клиентов и в полном объёме информировать их об услугах и продавать эти услуги'/>

            <CaseTitle title='Функционал'
                       text='Мы взяли спокойные цвета, строгие формы для передачи рабочего настроения надёжной компании. В итоге мы создали минмалистичный дизайн, который решает задачи заказчика и настраивает его клиентов на деловой лад'/>

            <div className="case_banner wrapper">
                <img src={makeClothes} alt=""/>
            </div>

            <div className="case wrapper">
                <div className="caseTitle_block">
                    <h2>Стилевое решение</h2>
                </div>
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Цвет</h3>
                    </div>
                    <div className="orangeCircle">
                        <div className="circleMakeOrange">
                            <p>#6D76F3</p>
                        </div>
                        <div className="circleMakeBlack">
                            <p>Oil gradient</p>
                        </div>
                        <div className="circleMakeGray">
                            <p>Green gradient</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="case wrapper">
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Иконка</h3>
                    </div>
                    <div className="styleSolution_text">
                        <img src={doAim} alt=""/>
                        <img src={doAimTransparent} alt="" className='transparentImg'/>
                    </div>
                </div>
            </div>

            <div className="case wrapper">
                <div className="styleSolution_item_orange">
                    <div className="styleSolution_orange_title">
                        <h3>Шрифты</h3>
                    </div>
                    <div className="styleSolution_orange">
                        <h1>SF Pro Display</h1>
                        <p>Шрифт без засечек. Легко считывается. Отлично подходит для любого сервиса</p>
                    </div>
                </div>
            </div>

            <div className="case wrapper">
                <div className="mobile_orange">
                    <div className="styleSolution_item_orange">
                        <div className="styleSolution_orange_title">
                            <h3>Сетка</h3>
                        </div>
                        <div className="iphone12_block">
                            <div className="size">
                                <h4>iPhone 12</h4>
                                <p>375x812</p>
                            </div>
                            <div className="iPhone12">
                                <div className="desktopLine line_one">16</div>
                                <div className="iPhone12Line line_two">16</div>
                            </div>
                        </div>
                        <div className="iphoneSE_block">
                            <div className="size">
                                <h4>iPhone SE</h4>
                                <p>320x568</p>
                            </div>
                            <div className="iPhoneSE">
                                <div className="desktopLine line_one">24</div>
                                <div className="iPhone12Line line_two_SE">24</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <CustomerReview title='Отзыв заказчика'
                            text='Polydev отличается гибкостью и высокой скоростью разработки. В нашем непростом кейсе получилось добиться нужного результата за счет плотного контакта и глубогого погружения студии в нашу специфику. Студией были найдены и успешно протестированы лучшие решения, которые впоследствии привели нас к первым клиентам.'
                            name='Иван'
                            position='Руководитель проекта SwiftGlobal'
            />
            <CaseReview/>

        </>
    )
}

export default SecondCase