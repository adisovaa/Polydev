import React from 'react'
import logo from './../../../../../images/1.svg'
import './CaseProject.css'

export const CaseProject = (props) => {
    return (
        <div className="wrapper">
            <div className="caseProject_block">
                <div className="caseProject_heading">
                    <h2>О проекте</h2>
                </div>
                <div className="caseProject_item">
                    <div className="caseProject_title">
                        <h3>Заказчик</h3>
                    </div>
                    <div className="caseProject_text">
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const CaseTasks = (props) => {
    return (
        <div className="wrapper">
            <div className="caseTasks_item">
                <div className="caseTasks_title">
                    <h3>Решённые задачи</h3>
                </div>
                <div className="caseTasks_texts">
                    <div className="caseTasks_text">
                        <h6>{props.title1}</h6>
                        <p>{props.text1}</p>
                    </div>
                    <div className="caseTasks_text">
                        <h6>{props.title2}</h6>
                        <p>{props.text2}</p>
                    </div>
                    <div className="caseTasks_text">
                        <h6>{props.title3}</h6>
                        <p>{props.text3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const CaseTitle = (props) => {
    return (
        <div className="wrapper">
            <div className="caseTitle_block">
                <h2>{props.title}</h2>
                <div className="caseProject_heading">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}


export const CaseDescription = (props) => {
    return (
        <div className="caseDescription_item wrapper">
            <div className="caseProject_item">
                <div className="caseProject_title">
                    <h3>{props.title}</h3>
                </div>
                <div className="caseProject_text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}


export const CustomerReview = (props) => {
    return (
        <div className="wrapper">
            <div className="caseTitle_block">
                <h2>{props.title}</h2>
                <div className="caseProject_heading">
                    <p>{props.text}</p>
                    <div className="customerInfo">
                        <div className="position">
                            <h6>{props.name}</h6>
                            <p>{props.position}</p>
                        </div>
                        <img src={logo} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}