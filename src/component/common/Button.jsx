import React from 'react'
import {useHistory} from "react-router-dom";

const Button = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/brief");
    }

    return (
        <div>
            <button onClick={handleClick}>Оставить заявку</button>
        </div>
    )
}

export default Button