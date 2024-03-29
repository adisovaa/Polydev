import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import logo from '../../../images/POLYDEV.svg';
import mobileArrow from '../../../images/arrow-mobile.svg';
import logoWhite from './../../../images/logo-white.svg'
import logo_mobile from '../../../images/Logo_mobile.svg';
import {openHandle} from "../../../redux/sliceReducer";
import BriefModal from "../../pages/briefPage/BriefPage";
import './Header.css';

const Header = () => {
    const active = useSelector(state => state.slice.active);
    let history = useHistory();

    const navTextMobile = ['Главная', 'О студии', 'Портфолио', 'Контакты']
    const [screen, setScreen] = useState(window.matchMedia('(max-width: 900px)').matches);
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
    }

    let showTextMobile = navTextMobile.map((text, i) => {
        return (
            <p key={i}><a href={`#${i}`} onClick={clickHeader}>{text} <img src={mobileArrow} alt=""/></a></p>
        )
    });

    useEffect(() => {
        const handler = e => setScreen(e.matches);
        window.matchMedia('(max-width: 900px)').addListener(handler)
    });

    const locationURL = () => {
        const loc = history.location;
        return loc.pathname;
    }

    const mainPage = () => {
        history.push('/')
    };

    const adaptiveHeader = () => {
        if (active) {
            document.body.style.overflow = 'visible'
        } else {
            document.body.style.overflow = 'hidden'
        }
        return (
            <div className='headerContainer'>
                <div className="header_mobile wrapper">
                    <div className="logo" onClick={mainPage}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='burger' onClick={() => dispatch(openHandle())}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="header_button">
                        <BriefModal/>
                    </div>
                </div>

                <div className={active ? "wallpaper" : "wallpaper".concat(' active')}>
                    <div className={active ? "menu-burger" : "menu-burger".concat(' active')} >
                       <div className="wrapper mobile_header_items">
                           <div className="logo" onClick={mainPage}>
                               <img src={logo_mobile} alt="logo"/>
                           </div>
                           <div className={active ? "burger" : "burger".concat(' active')}
                                onClick={() => dispatch(openHandle())}>
                               <span></span>
                               <span></span>
                           </div>
                           <div className="mobile_button">
                               <BriefModal/>
                           </div>
                       </div>
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
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div style={{
            background: useLocation().pathname !== "/swift-global" ? "#fff" : "#01579B"
        }}>
            {
                screen ? adaptiveHeader()
                    :
                    <div className="header" id='top'>
                        <div className="wrapper flexHeader">
                            <div className="logo" onClick={mainPage}>
                                <img src={locationURL() === "/swift-global" ? logoWhite : logo} alt="logo"/>
                            </div>
                            <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                                <div className="navBar">
                                  <p><a href="/about">О студии</a></p>
                                    <p><a href="/case">Кейсы</a></p>
                                    <p><a href="/contact">Контакты</a></p>
                                </div>
                            </div>
                            <div className={active ? "burger" : "burger".concat(' active')}
                                 onClick={() => openHandle()}>
                                <span></span>
                            </div>
                            <div className="header_button">
                                <BriefModal/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Header;