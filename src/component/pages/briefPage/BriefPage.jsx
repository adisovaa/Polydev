import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import Modal from 'react-modal';
import './BriefPage.css'
import plus from "../../../images/plus.svg";
import {useHistory} from "react-router-dom";
import briefImages from './../../../images/briefImages.svg'

class BriefModal extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            username: " ",
            company: " ",
            email: " ",
            number: " ",
            text: " ",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
        console.log("changed");
    }

    handleSubmit() {
        console.log("submited");
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const modalStyles = {
            overlay: {
                backgroundColor: '#ffffff',
            },
        };
        return (
            <>
                <button onClick={this.toggleModal}>
                    Заполнить бриф
                </button>

                <CSSTransition
                    in={this.state.isOpen}
                    timeout={300}
                    classNames="dialog"
                >
                    <Modal
                        closeTimeoutMS={500}
                        isOpen={this.state.isOpen}
                        style={modalStyles}
                        ariaHideApp={false}
                    >
                        <div className="wrapper">
                            <div className="briefPageFlex">
                                <div className="brief_page">
                                    <div className="brief_info">
                                        <h1>Бриф</h1>
                                        <p>Для того, чтобы начать обсуждать проект, нам необходимо узнать некоторые
                                            детали.
                                            Вы
                                            можете
                                            позвонить нам по телефону <span
                                                className='purple'>+7(910)-862-55-88</span> или
                                            заполнить эту
                                            форму</p>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="register_block">
                                            <div className="register_name entire_block">
                                                <label htmlFor="username"><h5>Имя <span>*</span></h5></label>
                                                <input
                                                    type="text"
                                                    value={this.state.username}
                                                    name="username"
                                                    onChange={this.handleChange}
                                                    className="input"
                                                    required>
                                                </input>
                                            </div>
                                            <div className="register_company entire_block">
                                                <label htmlFor="company"><h5>Компания <span>*</span></h5></label>
                                                <input
                                                    type="text"
                                                    value={this.state.company}
                                                    name="company"
                                                    onChange={this.handleChange}
                                                    className="input"
                                                    required>
                                                </input>
                                            </div>

                                        </div>
                                        <div className="register_block">
                                            <div className="register_name entire_block">
                                                <label htmlFor="email"><h5>Email <span>*</span></h5></label>
                                                <input
                                                    type="email"
                                                    value={this.state.email}
                                                    name="email"
                                                    onChange={this.handleChange}
                                                    className="input"
                                                    required>
                                                </input>
                                            </div>
                                            <div className="register_company entire_block">
                                                <label htmlFor="number"><h5>Телефон <span>*</span></h5></label>
                                                <input
                                                    type="number"
                                                    value={this.state.number}
                                                    name="number"
                                                    onChange={this.handleChange}
                                                    className="input"
                                                    required>
                                                </input>
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
                                                <label htmlFor="task"><h5>О задаче и сроках <span>*</span></h5></label>
                                                <input
                                                    type="text"
                                                    value={this.state.text}
                                                    name="text"
                                                    onChange={this.handleChange}
                                                    className="input"
                                                    required>
                                                </input>
                                            </div>
                                        </div>
                                        <div className="register_block textarea">
                                            <div className="register_text">
                                                <input type="file" name="imageUpload" id="imageUpload" className="hide"
                                                       onChange={this.handleChange} required/>
                                                <img src={plus} alt=""/>
                                                <label htmlFor="imageUpload" className="btn btn-large">Добавить
                                                    файл</label>
                                            </div>
                                        </div>
                                        <div className="brief_button">
                                            <button>Отправить</button>
                                            <p>Нажимая “Отправить”, вы даёте <span className='purple'>согласие на обработку персональных данных</span>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <div className="cl-btn-2" onClick={this.toggleModal}>
                                    <div>
                                        <div className="leftRight"></div>
                                        <div className="rightLeft"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </CSSTransition>
            </>
        );
    }
}

export default BriefModal

export const ConfirmBrief = () => {
    let history = useHistory()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const mainPageLink = () => {
        history.push("/");
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className="wrapper">
                <div className="brief_send">
                    <div className="brief-send-text">
                        <h1>Бриф отправлен</h1>
                        <p>Мы его прочитаем и свяжемся с вами по Email или по телефону</p>
                        <button onClick={mainPageLink}>Вернуться на главную</button>
                    </div>
                    <img src={briefImages} alt=""/>
                </div>
            </div>
        </Modal>
    )
}