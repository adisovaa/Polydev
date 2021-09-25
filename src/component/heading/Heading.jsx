import React from 'react'
import './Heading.css'

const Heading = () => {
    return (
        <div className="heading">
            <div className="wrapper">
                <div className="heading_block">
                    <div className="heading_text">
                        <h1> <span> Digital-продукты</span>
                            <p>с умом</p>
                            <p className='right'>для бизнеса</p>
                        </h1>
                    </div>
                    <div className="heading_button">
                        <button>Оставить заявку</button>
                    </div>
                </div>

                <div className="blocks">
                    <div className="block">
                        <h4>LOLLO</h4>
                        <p>На конструкторе Tilda/Wordpress <br/> или самописные</p>
                    </div>

                    <div className="block">
                        <h4>Сайты</h4>
                        <p>Интернет-магазины, <br/> корпоративные сайты, блоги</p>
                    </div>

                    <div className="block">
                        <h4>Приложения</h4>
                        <p>От дизайна до <br/> публикации <br/> в сторе</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading