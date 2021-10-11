import React from 'react'
import './Heading.css'
import Button from "../../../common/Button";

const Heading = () => {
    const heading = [
        {
            title: 'Лендинги',
            text: 'На конструкторе Tilda/Wordpress или самописные'
        },
        {
            title: 'Сайты',
            text: 'Интернет-магазины,  корпоративные сайты, блоги'
        },
        {
            title: 'Приложения',
            text: 'От дизайна до публикации в сторе'
        },
    ]
    return (
        <div className="heading">
            <div className="wrapper">
                <div className="heading_block">
                    <div className="heading_text">
                        <h1><span> Digital-продукты</span>
                            <h1 className='left'>с умом</h1>
                            <h1 className='right'>для бизнеса</h1>
                        </h1>
                    </div>
                    <div className="heading_button">
                        <Button/>
                    </div>
                </div>

                <div className="blocks">
                    {
                        heading.map((heading, i) => {
                            return (
                                <div className="block" key={i}>
                                    <h4>{heading.title}</h4>
                                    <p>{heading.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Heading