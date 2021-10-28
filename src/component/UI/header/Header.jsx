import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import logo from '../../../images/POLYDEV.svg';
import logoWhite from './../../../images/logo-white.svg'
import logo_mobile from '../../../images/Logo_mobile.svg';
import {openHandle} from "../../../redux/sliceReducer";
import Button from "../../common/Button";

import './Header.css';

const Header = () => {
    const [moviesUrlBackgroundColor, setMoviesUrlBackgroundColor] = useState('#fff');
    const [moviesUrlColor, setMoviesUrlColor] = useState('#000');
    const active = useSelector(state => state.slice.active);
    let history = useHistory();

    const navText = ['О студии', 'Кейсы', 'Контакты']
    const navTextMobile = ['Главная', 'О студии', 'Портфолио', 'Контакты']
    const [screen, setScreen] = useState(window.matchMedia('(max-width: 768px)').matches);
    const dispatch = useDispatch();

    const clickHeader = e => {
        dispatch(openHandle());
        if (e.target.textContent === 'О студии') {
            history.push('/about')
        } else if (e.target.textContent === 'Кейсы') {
            history.push('/case')
        } else if (e.target.textContent === 'Контакты') {
            history.push('/contact')
        } else if (e.target.textContent === 'Error') {
            history.push('/error')
        } else if (e.target.textContent === 'Главная') {
            history.push('/')
        }
    };

    let showText = navText.map((text, i) => {
        return (
            <p key={i}><a href={`#${i}`} onClick={clickHeader} style={{color: moviesUrlColor}}>{text}</a></p>
        )
    });

    let showTextMobile = navTextMobile.map((text, i) => {
        return (
            <p key={i}><a href={`#${i}`} onClick={clickHeader}>{text}</a></p>
        )
    });

    useEffect(() => {
        const handler = e => setScreen(e.matches);
        window.matchMedia('(max-width: 768px)').addListener(handler)
    });

    const locationURL = () => {
        const loc = history.location;
        return loc.pathname;
    }

    const mainPage = () => {
        history.push('/')
    };

    const getMoviesUrl = window.location.pathname;

    useEffect(() => {
        if (getMoviesUrl === '/swift-global') {
            setMoviesUrlBackgroundColor('#01579B');
        } else if (getMoviesUrl === '/') {
            setMoviesUrlBackgroundColor('#fff');
        } else if (getMoviesUrl === '/make-clothes'){
            setMoviesUrlBackgroundColor('#FF5C45');
        } else if (getMoviesUrl === '/canadian'){
            setMoviesUrlBackgroundColor('#262626');
        } else {
            setMoviesUrlBackgroundColor('#fff');
        }
    }, [getMoviesUrl]);

    useEffect(() => {
        if (getMoviesUrl === '/swift-global') {
            setMoviesUrlColor('#fff');
        } else if (getMoviesUrl === '/make-clothes') {
            setMoviesUrlColor('#fff');
        } else if (getMoviesUrl === '/canadian') {
            setMoviesUrlColor('#fff');
        } else {
            setMoviesUrlColor('#000');
        }
    }, [getMoviesUrl]);

    const adaptiveHeader = () => {
        if (active) {
            document.body.style.overflow = 'visible'
        } else {
            document.body.style.overflow = 'hidden'
        }
        return (
            <div className='container'>
                <div className="header_mobile wrapper">
                    <div className="logo" onClick={mainPage}>
                        <img src={active ? logo : logo_mobile} alt="logo"/>
                    </div>
                    <div className={active ? "burger" : "burger".concat(' active')}
                         onClick={() => dispatch(openHandle())}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={active ? "wallpaper" : "wallpaper".concat(' active')}>
                    <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                        <div className="navBar wrapper">
                            {
                                showTextMobile
                            }
                        </div>
                        <div className="headerNavLink wrapper">
                            <div className="headerLink">
                                <a href="https://www.instagram.com/">Instagram</a>
                                <a href="https://dribbble.com/">Dribble</a>
                            </div>
                        </div>
                        <div className="mobile_button">
                            <div className="mobile_wrapper">
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div>
            {
                screen ? adaptiveHeader()
                    :
                    <div className="header" style={{backgroundColor: moviesUrlBackgroundColor}}>
                        <div className="wrapper flexHeader">
                            <div className="logo" onClick={mainPage}>
                                <img src={locationURL() === "/swift-global" ? logoWhite : logo} alt="logo"/>
                            </div>
                            <div className={active ? "burger" : "burger".concat(' active')}
                                 onClick={() => openHandle()}>
                                <span></span>
                            </div>
                            <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                                <div className="navBar">
                                    {showText}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Header;