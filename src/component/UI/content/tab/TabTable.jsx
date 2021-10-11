import React from 'react'
import './Tab.css'
import down from '../../../../images/Down.svg'

export const Landing = () => {
    const lending = [
        {
            title: 'Брифинг и ТЗ',
            duration: '1 день',
            images: down
        },
        {
            title: 'Анализ рынка',
            duration: '1 день',
            images: down
        },
        {
            title: 'Прототип',
            duration: '1 день',
            images: down
        },
        {
            title: 'Дизайн-концепция главной',
            duration: '1 день',
            images: down
        },
        {
            title: 'Дизайн внутренних страниц',
            duration: '1 день',
            images: down
        },
        {
            title: 'Адаптивы',
            duration: '1 день',
            images: down
        },
        {
            title: 'Вёрстка',
            duration: '1 день',
            images: down
        },
        {
            title: 'SEO оптимизация',
            duration: '1 день',
            images: down
        },
        {
            title: 'Поддержка (по желанию)',
            duration: '1 день',
            images: down
        },
    ]
    return (
        <div className="tab_table">
            <div className="tab_table_text">
                <p>Лендинг – это одна страница, которая продаёт один или несколько товаров или услуг</p>
            </div>
            <div className="table">
                {
                    lending.map((lending, i) => {
                        return (
                            <div className="table_row" key={i}>
                                <div className="table_row_text">
                                    <h6>{lending.title}</h6>
                                </div>
                                <div className="table_row_time">
                                    <p>{lending.duration}</p>
                                </div>
                                <div className="table_row_icon">
                                    <img src={lending.images} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="table_row_red">
                <p>*Без учёта времени на согласование</p>
            </div>
        </div>
    )
}

export const Website = () => {
    const website = [
        {
            title: 'Брифинг и ТЗ',
            duration: '1 день',
            images: down
        },
        {
            title: 'Анализ рынка',
            duration: '1 день',
            images: down
        },
        {
            title: 'Прототип',
            duration: '1 день',
            images: down
        },
        {
            title: 'Дизайн-концепция главной',
            duration: '1 день',
            images: down
        },
        {
            title: 'Дизайн внутренних страниц',
            duration: '1 день',
            images: down
        },
        {
            title: 'Адаптивы',
            duration: '1 день',
            images: down
        },
        {
            title: 'Вёрстка',
            duration: '1 день',
            images: down
        },
        {
            title: 'SEO оптимизация',
            duration: '1 день',
            images: down
        },
        {
            title: 'Поддержка (по желанию)',
            duration: '1 день',
            images: down
        }
    ]
    return (
        <div className="tab_table">
            <div className="tab_table_text">
                <p>Многостраничный сайт – это ресурс, состоящий из двух и более страниц. Такие площадки, как правило,
                    легко оптимизируются, отлично продвигаются.Oct</p>
            </div>
            <div className="table">
                {
                    website.map((website, i) => {
                        return (
                            <div className="table_row" key={i}>
                                <div className="table_row_text">
                                    <h6>{website.title}</h6>
                                </div>
                                <div className="table_row_time">
                                    <p>{website.duration}</p>
                                </div>
                                <div className="table_row_icon">
                                    <img src={website.images} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="table_row_red">
                <p>*Без учёта времени на согласование</p>
            </div>
        </div>
    )
}

export const App = () => {
    const app = [
        {
            title: 'Брифинг и ТЗ',
            duration: '1 день',
            images: down
        },
        {
            title: 'Анализ рынка',
            duration: '1 день',
            images: down
        },
        {
            title: 'Прототип',
            duration: '1 день',
            images: down
        },
        {
            title: 'Дизайн-концепция главной',
            duration: '1 день',
            images: down
        },
        {
            title: 'Дизайн внутренних страниц',
            duration: '1 день',
            images: down
        },
        {
            title: 'Адаптивы',
            duration: '1 день',
            images: down
        },
        {
            title: 'Вёрстка',
            duration: '1 день',
            images: down
        },
        {
            title: 'SEO оптимизация',
            duration: '1 день',
            images: down
        },
        {
            title: 'Поддержка (по желанию)',
            duration: '1 день',
            images: down
        }
    ]
    return (
        <div className="tab_table">
            <div className="tab_table_text">
                <p>Приложение - это программа, которая функционирует под управлением определенной операционной
                    системы. </p>
            </div>
            <div className="table">
                {
                    app.map((app, i) => {
                        return (
                            <div className="table_row" key={i}>
                                <div className="table_row_text">
                                    <h6>{app.title}</h6>
                                </div>
                                <div className="table_row_time">
                                    <p>{app.duration}</p>
                                </div>
                                <div className="table_row_icon">
                                    <img src={app.images} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="table_row_red">
                <p>*Без учёта времени на согласование</p>
            </div>
        </div>
    )
}