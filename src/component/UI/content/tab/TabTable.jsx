import React, {Component} from 'react'
import './Tab.css'
import down from '../../../../images/Down.svg'

function LandingTab(props) {
    const classes = ['askAnswerBlock'];
    if (props.answer.showAnswer) {
        classes.push('show')
    }

    return (
        <div className="askAnswerItem" onClick={props.onQuest}>
            <div className="table_row">
                <div className="table_row_text">
                    <p>{props.answer.title}</p>
                </div>
                <div className="table_row_time">
                    <p>{props.answer.duration}</p>
                </div>
                <div className="table_row_icon">
                </div>
            </div>
            <div className={classes.join(' ')}>
                <p>{props.answer.answer}</p>
            </div>
        </div>
    )
}
export class Landing extends Component {
    state = {
        answer: [
            {
                showAnswer: false,
                title: 'Брифинг и ТЗ',
                duration: 'От 1 дня',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Анализ рынка',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Прототип',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Дизайн-концепция главной',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Дизайн внутренних страниц',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Адаптивы',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Вёрстка',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'SEO оптимизация',
                duration: '1 день',
                images: down,
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Поддержка (по желанию)',
                duration: '1 день',
                images: down,
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }
        ],
        numberUser: '',
    };

    handleNumber = (event) => {
        const numberUser = (event.target.validity.valid) ? event.target.value : this.state.numberUser;
        this.setState({numberUser});
    };

    clickQuestion = (quest) => {
        const answers = this.state.answer.concat();
        const answer = answers.find(a => a.title === quest);
        answer.showAnswer = !answer.showAnswer;
        this.setState({answer: answers})
    };

    renderAnswer = () => {
        return this.state.answer.map((answer, i) => {
            return (
                <LandingTab
                    answer={answer}
                    key={i}
                    onQuest={this.clickQuestion.bind(this, answer.title)}
                />
            )
        })
    };

    render() {
        return (
            <>
                <div className="tab_table_text">
                    <p>Лендинг – это одна страница, которая продаёт     один или несколько товаров или услуг</p>
                </div>
                <div className="table">
                    {
                        this.renderAnswer()
                    }
                </div>
                <div className="table_row_red">
                    <div className="total_time">
                        <div className="without_dev">
                            <p>Итого без разработки:</p>
                            <h6>от 17 дней</h6>
                        </div>
                        <div className="with_dev">
                            <p>Итого с разработкой:</p>
                            <h6>от 24 дней</h6>
                        </div>
                    </div>
                    <p>*Без учёта времени на согласование</p>
                </div>
            </>
        );
    }
};


function WebsiteTab(props) {
    const classes = ['askAnswerBlock'];
    if (props.website.showAnswer) {
        classes.push('show')
    }

    return (
        <div className="askAnswerItem" onClick={props.onQuest}>
            <div className="table_row">
                <div className="table_row_text">
                    <p>{props.website.title}</p>
                </div>
                <div className="table_row_time">
                    <p>{props.website.duration}</p>
                </div>
                <div className="table_row_icon">
                </div>
            </div>
            <div className={classes.join(' ')}>
                <p>{props.website.answer}</p>
            </div>
        </div>
    )
}
export class Websites extends Component     {
    state = {
        website: [
            {
                showAnswer: false,
                title: 'Брифинг и ТЗ',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Анализ рынка',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Прототип',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Дизайн-концепция главной',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Дизайн внутренних страниц',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Адаптивы',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Вёрстка',
                duration: '1 день',
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'SEO оптимизация',
                duration: '1 день',
                images: down,
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }, {
                showAnswer: false,
                title: 'Поддержка (по желанию)',
                duration: '1 день',
                images: down,
                answer: 'In commodo, eu hendrerit id laoreet fermentum ligula sit quam. Aenean convallis faucibus elementum purus in. Amet, nibh aliquam donec est volutpat habitant risus vel.'
            }
        ],
        numberUser: '',
    };

    handleNumber = (event) => {
        const numberUser = (event.target.validity.valid) ? event.target.value : this.state.numberUser;
        this.setState({numberUser});
    };

    clickQuestion = (quest) => {
        const answers = this.state.website.concat();
        const website = answers.find(a => a.title === quest);
        website.showAnswer = !website.showAnswer;
        this.setState({website: answers})
    };

    renderAnswer = () => {
        return this.state.website.map((website, i) => {
            return (
                <WebsiteTab
                    website={website}
                    key={i}
                    onQuest={this.clickQuestion.bind(this, website.title)}
                />
            )
        })
    };

    render() {
        return (
            <>
                <div className="tab_table_text">
                    <p>Многостраничный сайт – это ресурс, состоящий из двух и более страниц. Такие площадки, как
                        правило, легко оптимизируются, отлично продвигаются.Oct</p>
                </div>
                <div className="table">
                    {
                        this.renderAnswer()
                    }
                </div>
                <div className="table_row_red">
                    <div className="total_time">
                        <div className="without_dev">
                            <p>Итого без разработки:</p>
                            <h6>от 17 дней</h6>
                        </div>
                        <div className="with_dev">
                            <p>Итого с разработкой:</p>
                            <h6>от 24 дней</h6>
                        </div>
                    </div>
                    <p>*Без учёта времени на согласование</p>
                </div>
            </>
        );
    }
};


function AppTab(props) {
    const classes = ['askAnswerBlock'];
    if (props.app.showAnswer) {
        classes.push('show')
    }

    return (
        <div className="askAnswerItem" onClick={props.onQuest}>
            <div className="table_row">
                <div className="table_row_text">
                    <p>{props.app.title}</p>
                </div>
                <div className="table_row_time">
                    <p>{props.app.duration}</p>
                </div>
                <div className="table_row_icon">
                </div>
            </div>
            <div className={classes.join(' ')}>
                <p>{props.app.answer}</p>
            </div>
        </div>
    )
}
export class App extends Component {
    state = {
        app: [
            {
                showAnswer: false,
                title: 'Брифинг и ТЗ',
                duration: 'От 1 дня',
                answer: 'Знакомимся с бизнесом, заполняем бриф, уточняем детали. Составляем ТЗ, если его нет и утверждаем. В конце этого этапа заключается договор и вносится предоплата'
            }, {
                showAnswer: false,
                title: 'Прототип',
                duration: 'От 3 дней',
                answer: 'Используя согласованное ТЗ, создаём прототип сайта. Сначала проводим конкурентный и визуальный анализ, выдвигаем гипотезы, проектируем структуру и на основе этого делаем схематичную версию страницы с основным функционалом'
            }, {
                showAnswer: false,
                title: 'Дизайн-концепция',
                duration: 'От 3 дней',
                answer: 'На основе принятых решений из предыдущего этапа создаём дизайн экранов из основного пользовательского сценария. Презентуем их заказчику. По итогам вносим правки и утверждаем визуал'
            }, {
                showAnswer: false,
                title: 'Дизайн всех экранов',
                duration: '1 день',
                answer: 'Используя утверждённые стилистические решения, дизайним остальные экраны. Презентуем, вносим правки и утверждаем'
            }, {
                showAnswer: false,
                title: 'Дизайн под разные платформы',
                duration: 'От 4 дней',
                answer: 'Адаптируем дизайн под платформы iOS и Android, а также популярные разрешения экрана'
            }, {
                showAnswer: false,
                title: 'Разработка',
                duration: 'От 7 дней',
                answer: 'Разрабатываем приложения на нативных языках (Swift, Kotlin), присылаем приглашение на бета-тест. После проведения тестов вносим правки и корректировки, если они появляются'
            }, {
                showAnswer: false,
                title: 'Завершение',
                duration: 'От 1 дня',
                answer: 'После получения оплаты переносим приложение на ваш аккаунт. Подписываем закрывающие документы'
            }, {
                showAnswer: false,
                title: 'Поддержка (по желанию)',
                duration: 'Сколько потребуется',
                images: down,
                answer: 'Проследим чтобы все корректно работало, адаптируем приложения под обновления и оперативно решим все технические вопросы'
            }
        ],
        numberUser: '',
    };

    handleNumber = (event) => {
        const numberUser = (event.target.validity.valid) ? event.target.value : this.state.numberUser;
        this.setState({numberUser});
    };

    clickQuestion = (quest) => {
        const answers = this.state.app.concat();
        const app = answers.find(a => a.title === quest);
        app.showAnswer = !app.showAnswer;
        this.setState({app: answers})
    };

    renderAnswer = () => {
        return this.state.app.map((app, i) => {
            return (
                <AppTab
                    app={app}
                    key={i}
                    onQuest={this.clickQuestion.bind(this, app.title)}
                />
            )
        })
    };

    render() {
        return (
            <>
                <div className="tab_table_text">
                    <p>Мобильные приложения под платформы iOS и Android на нативных языках</p>
                </div>
                <div className="table">
                    {
                        this.renderAnswer()
                    }
                </div>
                <div className="table_row_red">
                    <div className="total_time">
                        <div className="without_dev">
                            <p>Итого без разработки:</p>
                            <h6>от 17 дней</h6>
                        </div>
                        <div className="with_dev">
                            <p>Итого с разработкой:</p>
                            <h6>от 24 дней</h6>
                        </div>
                    </div>
                    <p>*Без учёта времени на согласование</p>
                </div>
            </>
        );
    }
};