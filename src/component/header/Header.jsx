import React, {useState} from 'react'
import logo from '../../images/POLYDEV.svg'
import './Header.css'
import {useHistory} from "react-router-dom";

const Header = () => {
    let history = useHistory()
    const [active, setActive] = useState(true);
    const navText = ['О студии', 'Кейсы', 'Контакты']
    const showText = navText.map((text, i) => <p key={i}><a href="#">{text}</a></p>)

    const mainPage = () => {
        history.push('/')
    }

    let showNavBar = e => {
        e.preventDefault();
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    };

    return (
        <div className="wrapper">
            <header>
                <div className="logo" onClick={mainPage}>
                    <img src={logo} alt=""/>
                </div>
                <div className={active ? "burger" : "burger".concat(' active')} onClick={showNavBar}>
                    <span></span>
                </div>
                <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                    <div className="navBar">
                        {
                            showText
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header