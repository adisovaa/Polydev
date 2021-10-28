import React, {useEffect, useState} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {useSelector} from "react-redux"
import project1 from './../../../../images/project1.svg'
import project2 from './../../../../images/project2.svg'
import project3 from './../../../../images/project3.svg'
import project4 from './../../../../images/project4.svg'
import hover_line from './../../../../images/hover_line.svg'

import './Projects.css'

const Project = () => {
    const project = useSelector(state => state.slice.items.project);
    const [screen9, setScreen9] = useState(false);
    const [screen6, setScreen6] = useState(window.matchMedia('(max-width: 650px)').matches);

    useEffect(() => {
        const handler = e => setScreen9(e.matches);
        const screenHandler = e => setScreen6(e.matches);
        window.matchMedia("(max-width: 900px)").addListener(handler);
        window.matchMedia("(max-width: 650px)").addListener(screenHandler);
    });

    const desktopProject = () => {
        return (
            <div className="projects_block">
                <div className="wrapper">
                    <div className="heading">
                        <h3>Проекты</h3>
                    </div>
                    <div className="projects_blocks">
                        <div className="item_big a">
                            <img src={project1} alt="" />
                            <div className="item_text">
                                <h5>Vitakit</h5>
                                <p>Хранение рецептов, поиск <br/>и покупка лекарств </p>
                            </div>
                            <div className="overlay_up">
                                <h4>СМОТРЕТЬ КЕЙС</h4>
                                <img src={hover_line} alt=""/>
                            </div>
                        </div>

                        <div className="item b">
                            <img src={project2} alt="" />
                            <div className="item_text" >
                                <h5>Swift global</h5>
                                <p>Хранение драг. металлов</p>
                            </div>
                            <div className="overlay_up">
                                <h4>СМОТРЕТЬ КЕЙС</h4>
                                <img src={hover_line} alt=""/>
                            </div>
                        </div>

                        <div className="item c">
                            <img src={project3} alt="" />
                            <div className="item_text" style={{margin: '1% 10%'}}>
                                <h5>Canadian international</h5>
                                <p>Помощь по иммиграции в Канаду <br/>по учебной и спортивной визам</p>
                            </div>
                            <div className="overlay_bottom">
                                <h4>СМОТРЕТЬ КЕЙС</h4>
                                <img src={hover_line} alt=""/>
                            </div>
                        </div>

                        <div className="item d">
                            <img src={project4} alt="" />
                            <div className="item_text">
                                <h5>Делай вещи</h5>
                                <p>Приложение для производства <br/>вещей на заказ </p>
                            </div>
                            <div className="overlay_bottom">
                                <h4>СМОТРЕТЬ КЕЙС</h4>
                                <img src={hover_line} alt=""/>
                            </div>
                        </div>

                    </div>
                    <div className="show_more">
                        <button className='project_btn'>Смотреть все</button>
                    </div>
                </div>
            </div>
        )
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: !screen6 ? 1 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: 'projectMobileSlides',
    };

    return (
        <div className="project">
            <div className="wrapper">
                <div className="projectTitle">
                    <h3>Проекты</h3>
                </div>
                {screen6 ?
                    <Slider {...settings}>
                        {
                            project.map((project, i) => {
                                return (
                                    <div key={i}>
                                        <div className="projectCard" style={{background: project.background}}>
                                            <div className="projectTitleCard">
                                                <h2>{project.title}</h2>
                                                <p>{project.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    : desktopProject()
                }
                <div className="show_more_mobile">
                    <button className='btn'>Смотреть все</button>
                </div>
            </div>
        </div>
    )
}

export default Project