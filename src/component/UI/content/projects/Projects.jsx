import React, {useEffect, useState} from 'react'
import './Projects.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "react-redux";

const Project = () => {
    const project = useSelector(state => state.slice.items.project);
    const [screen9, setScreen9] = useState(false);
    const [screen6, setScreen6] = useState(window.matchMedia('(max-width: 650px)').matches);
    const [screen4, setScreen4] = useState(window.matchMedia('(max-width: 450px)').matches);
    const [screen3, setScreen3] = useState(window.matchMedia('(max-width: 420px)').matches);

    useEffect(() => {
        const handler = e => setScreen9(e.matches);
        const screenHandler = e => setScreen6(e.matches);
        const screen4Handler = e => setScreen4(e.matches);
        const screen3Handler = e => setScreen3(e.matches);
        window.matchMedia("(max-width: 900px)").addListener(handler);
        window.matchMedia("(max-width: 650px)").addListener(screenHandler);
        window.matchMedia("(max-width: 450px)").addListener(screen4Handler);
        window.matchMedia("(max-width: 420px)").addListener(screen3Handler);
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
                            <div className="item_text">
                                <h2>Хранение драг.металлов</h2>
                                <p>Логотип, брендинг, лендинг, <br/> многостраничный сайт</p>
                            </div>
                        </div>

                        <div className="item b">
                            <div className="item_text">
                                <h2>Leastly</h2>
                                <p>Приложение под iOS с подпиской Typography</p>
                            </div>
                        </div>

                        <div className="item c">
                            <div className="item_text">
                                <h2>Tempria</h2>
                                <p>Приложение-органайзер</p>
                            </div>
                        </div>

                        <div className="item d">
                            <div className="item_text">
                                <h2>Guard Line</h2>
                                <p>Хранилище паролей для iOS</p>
                            </div>
                        </div>
                    </div>
                    <div className="show_more">
                        <button className='btn'>Смотреть все</button>
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
        // autoplay: true,
        // autoplaySpeed: 2000,
        className: 'projectMobileSlides',
    };

    return (
        <div className="project" id='2'>
            <div className="wrapper">
                <div className="projectTitle">
                    <h1>Проекты</h1>
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