import React, {useEffect, useState} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {useSelector} from "react-redux"
import project1 from './../../../../images/project1.svg'
import project2 from './../../../../images/project2.svg'
import project3 from './../../../../images/project3.svg'
import project4 from './../../../../images/project4.svg'

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
                            <img src={project1} alt=""  style={{marginLeft:'17%'}}/>
                            <div className="item_text" style={{margin:'-18% 5%'}}>
                                <h5>Хранение </h5>
                                <p>Логотип, брендинг, лендинг, <br/> многостраничный сайт</p>
                            </div>
                        </div>

                        <div className="item b">
                            <img src={project4} alt="" style={{marginLeft:'7%'}}/>
                            <div className="item_text" style={{margin:'8%'}}>
                                <h5>Leastly</h5>
                                <p>Приложение под iOS с подпиской Typography</p>
                            </div>
                        </div>

                        <div className="item c">
                            <img src={project3} alt="" style={{margin:'11%'}}/>
                            <div className="item_text" style={{margin:'-16% 9%'}}>
                                <h5>Tempria</h5>
                                <p>Приложение-органайзер</p>
                            </div>
                        </div>

                        <div className="item d">
                            <img src={project2} alt="" style={{margin:'10%'}}/>
                            <div className="item_text" style={{margin:'-1% 8%'}}>
                                <h5>Guard Line</h5>
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