import React from 'react';
import './Box.css'
import logo_1 from '../../../../images/1.svg'
import logo_2 from '../../../../images/2.svg'
import logo_3 from '../../../../images/3.svg'
import logo_4 from '../../../../images/4.svg'
import logo_5 from '../../../../images/5.svg'
import logo_6 from '../../../../images/6.svg'
import tech1 from '../../../../images/tech1.svg'
import tech2 from '../../../../images/tech2.svg'
import tech3 from '../../../../images/tech3.svg'
import tech4 from '../../../../images/tech4.svg'
import tech5 from '../../../../images/tech5.svg'
import tech6 from '../../../../images/tech6.svg'
import logo_1_white from './../../../../images/1-white.svg'
import logo_2_white from './../../../../images/2-white.svg'
import logo_3_white from './../../../../images/3-white.svg'
import logo_4_white from './../../../../images/4-white.svg'
import logo_5_white from './../../../../images/5-white.svg'
import logo_6_white from './../../../../images/6-white.svg'
import tech1_white from './../../../../images/tech1-white.svg'
import tech2_white from './../../../../images/tech2-white.svg'
import tech3_white from './../../../../images/tech3-white.svg'
import tech4_white from './../../../../images/tech4-white.svg'
import tech5_white from './../../../../images/tech5-white.svg'
import tech6_white from './../../../../images/tech6-white.svg'

export const Box = () => {
    return (
        <div className='wrapper box'>
            <div className="grid-container ">
                <div className="grid-item one">
                    <img src={logo_1} className='img-initial' alt=""/>
                    <img src={logo_1_white} className='img-top' alt=""/>
                    <div className="img-text">
                        <p className='bold'>IGS</p>
                        <p>Приложения и сайты <br/> в сотрудничестве</p>
                    </div>
                </div>
                <div className="grid-item two">
                    <img src={logo_2} className='img-initial' alt=""/>
                    <img src={logo_2_white} className='img-top' alt=""/>
                    <div className="img-text">
                        <p className='bold'>Делай</p>
                        <p>Разработка приложения</p>
                    </div>
                </div>
                <div className="grid-item three">
                    <img src={logo_3} className='img-initial' alt=""/>
                    <img src={logo_3_white} className='img-top' alt=""/>
                    <div className="img-text">
                        <p className='bold'>Swift Global LTD.</p>
                        <p>Брендинг, лендинг, сайт</p>
                    </div>
                </div>
                <div className="grid-item four">
                    <img src={logo_4} className='img-initial' alt=""/>
                    <img src={logo_4_white} className='img-top' alt=""/>
                    <div className="img-text">
                        <p className='bold'>Россети</p>
                        <p>Приложение iOS/Android</p>
                    </div>
                </div>
                <div className="grid-item five">
                    <img src={logo_5} className='img-initial' alt=""/>
                    <img src={logo_5_white} className='img-top' alt=""/>
                    <div className="img-text">
                        <p className='bold'>VitaKit</p>
                        <p>Приложение</p>
                    </div>
                </div>
                <div className="grid-item six">
                    <img src={logo_6} className='img-initial' alt=""/>
                    <img src={logo_6_white} className='img-top' alt=""/>
                    <div className="img-text">
                        <p className='bold'>МинДорТранс Татарстана</p>
                        <p>Приложение “Караван”</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export const BoxTechnologies = () => {
    return (
        <>
            <div className="box_title wrapper">
                <h3>Используем современные инструменты работы</h3>
            </div>
            <div className="tech_box wrapper">
                <div className="grid-container">
                    <div className="grid-item one">
                        <img src={tech1} alt=""/>
                        <img src={tech1_white} className='img-top' alt=""/>
                        <div className="img-text boxTech">
                            <p className='bold'>HTML / CSS</p>
                            <p>Вёрстка и разработка</p>
                        </div>
                    </div>
                    <div className="grid-item two">
                        <img src={tech2} alt=""/>
                        <img src={tech2_white} className='img-top' alt=""/>
                        <div className="img-text boxTech">
                            <p className='bold'>React</p>
                            <p>Разработка</p>
                        </div>
                    </div>
                    <div className="grid-item three">
                        <img src={tech3} alt=""/>
                        <img src={tech3_white} className='img-top' alt=""/>
                        <div className="img-text boxTech">
                            <p className='bold'>Wordpress</p>
                            <p>CMS</p>
                        </div>
                    </div>
                    <div className="grid-item four">
                        <img src={tech4} alt=""/>
                        <img src={tech4_white} className='img-top' alt=""/>
                        <div className="img-text boxTech">
                            <p className='bold'>Figma</p>
                            <p>UX/UI дизайн</p>
                        </div>
                    </div>
                    <div className="grid-item five">
                        <img src={tech5} alt=""/>
                        <img src={tech5_white} className='img-top' alt=""/>
                        <div className="img-text boxTech">
                            <p className='bold'>Tilda</p>
                            <p>Создание сайтов на конструкторе</p>
                        </div>
                    </div>
                    <div className="grid-item six">
                        <img src={tech6} alt=""/>
                        <img src={tech6_white} className='img-top' alt=""/>
                        <div className="img-text boxTech">
                            <p className='bold'>Jira</p>
                            <p>Управление проектами</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}