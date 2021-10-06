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

export const Box = () => {
    return (
        <div className='wrapper box'>
            <div className="grid-container ">
                <div className="grid-item one">
                    <img src={logo_1} alt=""/>
                </div>
                <div className="grid-item two">
                    <img src={logo_2} alt=""/>
                </div>
                <div className="grid-item three">
                    <img src={logo_3} alt=""/>
                </div>
                <div className="grid-item four">
                    <img src={logo_4} alt=""/>
                </div>
                <div className="grid-item five">
                    <img src={logo_5} alt=""/>
                </div>
                <div className="grid-item six">
                    <img src={logo_6} alt=""/>
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
                    </div>
                    <div className="grid-item two">
                        <img src={tech2} alt=""/>
                    </div>
                    <div className="grid-item three">
                        <img src={tech3} alt=""/>
                    </div>
                    <div className="grid-item four">
                        <img src={tech4} alt=""/>
                    </div>
                    <div className="grid-item five">
                        <img src={tech5} alt=""/>
                    </div>
                    <div className="grid-item six">
                        <img src={tech6} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}