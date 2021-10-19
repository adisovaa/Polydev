import React from 'react'
import Button from "../../../../common/Button";

import './caseHeading.css'

const CaseHeading = (props) => {
    return (
        <div className='cases_heading' style={{backgroundColor: props.backgroundColor}}>
            <div className="wrapper">
                <div className="cases_heading_block">
                    <div className="casesBlock">
                        <div className="cases_text">
                            <h1>{props.title}</h1>
                            <p>{props.text}</p>
                        </div>
                        <div className="heading_button cases_btn">
                            <Button/>
                        </div>
                    </div>
                    <div className="case_logo">
                        <img src={props.caseLogo} alt=""/>
                        <a href="/">{props.link}</a>
                    </div>
                    <div className="cases_block">
                        <div className="cases_buttons">
                            {props.btnInfo.map((btnInfo, i) => {
                                return (<button key={i}>{btnInfo}</button>)
                            })}
                        </div>
                        <a href="/">
                            <img src={props.appStore} alt="" className='appStore'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseHeading