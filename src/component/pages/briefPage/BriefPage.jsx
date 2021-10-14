import React from 'react'
import {useForm} from "react-hook-form";
import plus from './../../../images/plus.svg'
import Button from "../../common/Button";

import './BriefPage.css'

const BriefPage = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="wrapper">
            <div className="brief_page">
                <div className="brief_info">
                    <h1>Бриф</h1>
                    <p>Для того, чтобы начать обсуждать проект, нам необходимо узнать некоторые детали. Вы можете
                        позвонить нам по телефону <span className='purple'>+7(910)-862-55-88</span> или заполнить эту
                        форму</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="register_block">
                        <div className="register_name entire_block">
                            <h5>Имя<span>*</span></h5>
                            <input type="text" name="name" className="input" ref={register({required: true})}/>
                        </div>
                        <div className="register_company entire_block">
                            <h5>Компания</h5>
                            <input type="text" name="company" className="input" ref={register({required: true})}/>
                        </div>
                    </div>
                    <div className="register_block">
                        <div className="register_name entire_block">
                            <h5>Email<span>*</span></h5>
                            <input type="email" name="email" className="input" ref={register({required: true})}/>
                        </div>
                        <div className="register_company entire_block">
                            <h5>Телефон</h5>
                            <input type="number" name="phone" className="input" ref={register({required: true})}/>
                        </div>
                    </div>
                    <div className="register_block">
                        <div className="register_name entire_block">
                            <h5>Вид проекта</h5>
                            <select id="projects" name="projects">
                                <option value="site"></option>
                                <option value="site">website</option>
                                <option value="site">app</option>
                                <option value="site">spa</option>
                                <option value="site">al</option>
                            </select>
                        </div>

                        <div className="register_company entire_block">
                            <h5>Бюджет</h5>
                            <select id="projects" name="projects">
                                <option value="site"></option>
                                <option value="site">1000$</option>
                                <option value="site">2000$</option>
                                <option value="site">3000$</option>
                                <option value="site">4000$</option>
                            </select>
                        </div>
                    </div>
                    <div className="register_block">
                        <div className="register_name entire">
                            <h5>О задаче и сроках</h5>
                            <input type="textarea" name="textValue" className="textarea" ref={register({required: true})}/>
                        </div>
                    </div>
                    <div className="register_block textarea">
                        <div className="register_text">
                            <input type="file" name="imageUpload" id="imageUpload" className="hide" ref={register({required: true})}/>
                            <img src={plus} alt=""/>
                            <label htmlFor="imageUpload" className="btn btn-large">Добавить файл</label>
                        </div>
                    </div>
                    <div className="brief_button">
                        <Button/>
                        <p>Нажимая “Отправить”, вы даёте <span className='purple'>согласие на обработку персональных данных</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BriefPage