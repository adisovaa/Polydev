import React from 'react'
import './Projects.css'

const Project = () => {
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
}

export default Project