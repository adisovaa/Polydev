import React from 'react'
import case1 from './../../../images/case1.svg'
import case2 from './../../../images/case2.svg'
import case3 from './../../../images/project3.svg'
import case4 from './../../../images/case4.svg'
import './Case.css'
import {Link} from "react-router-dom";


const CasePage = () => {
    return (
        <div className="wrapper">
            <div className="case" id={2}>
                <div className='casePage_heading'>
                    <div className="studio_heading contact">
                        <h2>Кейсы</h2>
                    </div>
                </div>
                <div className="casePage_blocks">

                    <Link to="/" className="casePage_block" style={{backgroundColor: '#6002FD'}}>
                        <div className="caseCard">
                            <div className="caseTitleCardOne">
                                <img src={case1} alt="case1"/>
                                <div className="casePage_text">
                                    <h2>Vitakit</h2>
                                    <p>Хранение рецептов, <br/> поиск и покупка лекарств</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/swift-global" className="casePage_block" style={{backgroundColor: '#000'}}>
                        <div className="caseCard">
                            <div className="caseTitleCardTwo">
                                <img src={case2} alt="case2"/>
                                <div className="casePage_text">
                                    <h2>Swift global</h2>
                                    <p>Хранение драг. металлов</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/canadian" className="casePage_block" style={{backgroundColor: '#000'}}>
                        <div className="caseCard">
                            <div className="caseTitleCardThree">
                                <img src={case3} alt="case3"/>
                                <div className="casePage_text">
                                    <h2>Караван</h2>
                                    <p>Сервис продажи билетов при <br/> поддержке Минтранса Республики <br/>Татарстан
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/make-clothes" className="casePage_block" style={{backgroundColor: '#6002FD'}}>
                        <div className="caseCard">
                            <div className="caseTitleCardFour">
                                <img src={case4} alt="case4"/>
                                <div className="casePage_text">
                                    <h2>Делай вещи</h2>
                                    <p>Приложение для производства <br/> вещей на заказ </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CasePage