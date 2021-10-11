import React from 'react'
import './Case.css'
import case1 from './../../../images/case1.svg'
import case2 from './../../../images/case2.svg'
import case3 from './../../../images/case3.svg'
import case4 from './../../../images/case4.svg'
import Button from "../../common/Button"

const CasePage = () => {
    return (
        <div className="wrapper">
            <div className='casePage_heading'>
                <div className="studio_heading contact">
                    <h2>Кейсы</h2>
                </div>
                <div className="heading_button contact_btn">
                    <Button/>
                </div>
            </div>
            <div className="casePage_blocks" >
                <div className="casePage_block" style={{backgroundColor: '#6002FD'}}>
                    <div className="caseCard">
                        <div className="caseTitleCard">
                            <img src={case1} alt="" style={{marginLeft:'15%'}}/>
                            <div className="casePage_text" style={{margin: '-21% 7%' }}>
                                <h2>Vitakit</h2>
                                <p>Хранение рецептов, <br/> поиск и покупка лекарств</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="casePage_block" style={{backgroundColor: '#000'}}>
                    <div className="caseCard">
                        <div className="caseTitleCard">
                            <img src={case2} alt="" style={{margin:'5% 10%'}}/>
                            <div className="casePage_text" style={{margin:'-4% 8%'}}>
                                <h2>Swift global</h2>
                                <p>Хранение драг. металлов</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="casePage_block" style={{backgroundColor: '#000'}}>
                    <div className="caseCard">
                        <div className="caseTitleCard">
                            <img src={case3} alt="" style={{marginLeft:'15%'}}/>
                            <div className="casePage_text" style={{margin:'-15% 7%'}}>
                                <h2>Караван</h2>
                                <p>Сервис продажи билетов при <br/> поддержке Минтранса Республики <br/>Татарстан</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="casePage_block" style={{backgroundColor: '#6002FD'}}>
                    <div className="caseCard">
                        <div className="caseTitleCard">
                            <img src={case4} alt="" style={{marginLeft:'15%'}}/>
                            <div className="casePage_text" style={{margin:'-15% 7%'}}>
                                <h2>Делай вещи</h2>
                                <p>Приложение для производства <br/> вещей на заказ </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CasePage