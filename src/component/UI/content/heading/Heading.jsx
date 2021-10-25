import React from 'react'
import './Heading.css'
import Button from "../../../common/Button";

const Heading = () => {
    const heading = [
        {
            title: 'Лендинги',
            text: 'Дизайним и разрабатываем высоко конверсионные лендинги на конструкторах'
        },
        {
            title: 'Сайты',
            text: 'Продумываем логику, создаём визуал и разрабатываем сайты, которыми пользуются'
        },
        {
            title: 'Приложения',
            text: 'Проектируем и разрабатываем приложения   iOS/Android , которые решают бизнес-задачи'
        },
    ]
    return (
        <div className="heading">
            <div className="wrapper">
                <div className="heading_block">
                    <div className="heading_text">
                        <h1>современные</h1>
                          <h1> <span className='left'> Digital-продукты</span></h1>
                            <h1 className='right'>для бизнеса</h1>
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