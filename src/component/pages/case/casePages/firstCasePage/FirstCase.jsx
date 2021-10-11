import React from 'react'
import swiftLogo from './../../../../../images/swift-logo.svg'
import CaseHeader from "../../caseComponents/caseHeader/caseHeader";
import {
    CaseDescription,
    CaseProject,
    CaseTasks,
    CaseTitle,
    CustomerReview
} from "../../caseComponents/caseProjects/CaseProject";
import caseFirst_1 from './../../../../../images/caseFirst-1.jpg'
import caseFirst_2 from './../../../../../images/caseFirst-2.png'
import caseFirst_3 from './../../../../../images/caseFirst-3.png'
import caseFirst_4 from './../../../../../images/caseFirst-4.png'
import caseFirst_5 from './../../../../../images/caseFirst-5.png'
import caseFirst_6 from './../../../../../images/caseFirst-6.png'
import caseFirst_7 from './../../../../../images/caseFirst-7.png'
import caseFirst_8 from './../../../../../images/caseFirst-8.svg'
import case_logo_1 from './../../../../../images/case-logo-1.svg'
import case_logo_2 from './../../../../../images/case-logo-2.svg'
import case_logo_3 from './../../../../../images/case-logo-3.svg'


import './FirstCase.css'

const FirstCase = () => {
    return (
        <>
            <CaseHeader title={'Swift Global'}
                        text={"Хранение и продажа драгоценных металлов"}
                        caseLogo={swiftLogo}
                        btnInfo1={'Лендинг'}
                        btnInfo2={'Сайт'}
                        btnInfo3={'Брендинг'}
                        link={'Перейти на сайт'}/>

            <CaseProject
                text={'Swift Global LTD – международная компания, предоставляющая услуги по купле, продаже и хранению драгоценных металлов'}/>

            <CaseTasks title1='Брендинг'
                       text1='Создали единый узнаваемый стиль. Разработали логотип, подобрали шрифты и цвет, исходя из позиционирования компании, особенностей отрасли и отношения к клиентам'
                       title2='Лендинг'
                       text2='Мы разработали страницу для продвижения, быстрой продажи и информирования клиентов об услугах хранения и продажи драгоценных металлов. В итоге получилось проверить гипотезы для сайта и создать дополнительный источник продажи основных услуг клиента'
                       title3='Многостраничный сайт'
                       text3='Разработали для того, чтобы компания могла на долгосрочной основе работать с лояльными пользователями, но при этом привлекать новых клиентов и в полном объёме информировать их об услугах и продавать эти услуги'/>

            <CaseTitle title='Лендинг'
                       text='Мы взяли спокойные цвета, строгие формы для передачи рабочего настроения надёжной компании. В итоге мы создали минмалистичный дизайн, который решает задачи заказчика  и настраивает его клиентов на деловой лад'/>

            <div className="case_banner wrapper">
                <img src={caseFirst_1} alt=""/>
            </div>

            <CaseTitle title='Основной сайт'
                       text='Сайт создан на основе брендбука и лендинга компании. Основные задачи сайта: долгосрочная работа с лояльными пользователями, а также продажа услуг новым клиентам и создание имиджа надёжности '/>

            <div className="case_banner wrapper">
                <img src={caseFirst_2} alt=""/>
            </div>

            <CaseDescription title='Калькулятор экономии'
                             text='Идея калькулятора экономии – показать клиентам в цифрах, а не на словах, насколько выгодно хранить драгоценные металлы в Swift Global LTD '/>

            <div className="case_banner wrapper">
                <div className="calcBanner">
                    <img src={caseFirst_3} alt=""/>
                    <img src={caseFirst_4} alt=""/>
                </div>
            </div>

            <CaseDescription title='Основные услуги'
                             text='Мы сделали классификацию не только по услугам, но и по выгодам, являющимеся дополнительными услугами, которые клиент может получить при работе со Swift Global LTD'/>

            <div className="case_banner wrapper">
                <img src={caseFirst_5} alt=""/>
            </div>

            <CaseDescription title='Покупка металлов онлайн'
                             text='Наша команда спроектировала сценарий быстрой покупки драгоценных металлов онлайн, руководствуясь законами юзабилити и требованиями к высоко конверсионным формам'/>

            <div className="case_banner wrapper">
                <img src={caseFirst_6} alt=""/>
            </div>

            <CaseTitle title='Брендинг'
                       text='В основе стиля лежит синий цвет. Он передаёт атмосферу надёжности и спокойствия. Также используются прямоугольные формы с острыми углами и круги, которые передают атмосферу работы, но при этом контрастируют друг с другом и привлекают внимание'/>

            <div className="case_banner wrapper">
                <img src={caseFirst_7} alt=""/>
            </div>

            <div className="case wrapper">
                <div className="caseTitle_block">
                    <h2>Стилевое решение</h2>
                </div>
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Логотип</h3>
                    </div>
                    <div className="styleSolution_text">
                        <img src={caseFirst_8} alt=""/>
                        <p>В основе лого лежит довольно простой шрифт “Montserrat”. Он отлично сочетается со строгими
                            прямоугольниками без скругления (у букв острые углы) и с кругами (бука “О” стремится по
                            форме к
                            кругу). Синий круг в логотипе ассоциируется с планетой или глобусом и говорит о том, что
                            компания работает не только в России, но и за рубежом</p>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="grid-container-case">
                    <div className="grid-item-a">
                        <img src={case_logo_1} alt=""/>
                    </div>
                    <div className="grid-item-b">
                        <img src={case_logo_2} alt=""/>
                    </div>
                    <div className="grid-item-c">
                        <img src={case_logo_3} alt=""/>
                    </div>
                </div>
            </div>

            <div className="case wrapper">
                <div className="styleSolution_item">
                    <div className="styleSolution_title">
                        <h3>Цвет</h3>
                    </div>
                    <div className="styleSolution_text">

                        <div className="circles">
                            <div className="circle-block">
                                <div className="circle_one">
                                    <p>#01579B</p>
                                </div>
                                <div className="circle_two">
                                    <p>#102027</p>
                                </div>
                            </div>
                            <div className="circle_three">
                                <p>#F5F5F5</p>
                            </div>

                        </div>

                        <p>Синий цвет в сочетании с тёмно-синим передают спокойствие и при этом настраивают на деловой
                            лад. Мы используем не чистый белый, а немного затемнённый белый для фона, что позволяет не
                            перегружать глаз пользователя</p>
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
                        <div className="desktop_block">
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
                        <div className="desktop_block">
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

            <CustomerReview title='Отзыв заказчика'
                            text='Polydev отличается гибкостью и высокой скоростью разработки. В нашем непростом кейсе получилось добиться нужного результата за счет плотного контакта и глубогого погружения студии в нашу специфику. Студией были найдены и успешно протестированы лучшие решения, которые впоследствии привели нас к первым клиентам.'
                            name='Иван'
                            position='Руководитель проекта SwiftGlobal'
            />
        </>
    )
}

export default FirstCase