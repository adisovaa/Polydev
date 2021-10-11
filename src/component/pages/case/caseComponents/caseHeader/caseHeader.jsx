import React from 'react'
import Button from "../../../../common/Button";

import './caseHeader.css'

const CaseHeader = (props) => {
    return (
        <div className='cases_heading'>
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
                    </div>
                    <div className="cases_block">
                        <div className="cases_buttons">
                            <button>{props.btnInfo1}</button>
                            <button>{props.btnInfo2}</button>
                            <button>{props.btnInfo3}</button>
                        </div>
                        <a href="/">{props.link}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseHeader