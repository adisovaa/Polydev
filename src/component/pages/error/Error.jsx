import React from 'react'
import './Error.css'
import Button from "../../common/Button";
import {useHistory} from "react-router-dom";

const ErrorPage = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <div className="wrapper">
            <div className="error_btn">
                <Button/>
            </div>
            <div className="error">
                <div className="reason_one">
                    <h1>404</h1>
                    <h3>ошибка</h3>
                </div>
                <div className="reason_two">
                    <h1>Что-то пошло не так</h1>
                    <p>вы можете вернуться на главную или связаться с ними</p>
                    <div className="error_buttons">
                        <div className="heading_button white_btn">
                            <button onClick={handleClick}>Вернуться на главную</button>
                        </div>
                        <div className="heading_button purple_btn">
                            <button>Связаться <br/>с нами</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage