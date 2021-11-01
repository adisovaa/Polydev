import React from 'react'
import {useHistory} from "react-router-dom";

const Button = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/brief");
    }

    return (
        <button onClick={handleClick}>Оставить заявку</button>
    )
}

export default Button