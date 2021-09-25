import React, {Component} from 'react';
import down from '../../../images/Down.svg'
import './Ask.css'

function AskAnswer(props) {
    const classes = ['askAnswerBlock'];

    if (props.answer.showAnswer) {
        classes.push('show')
    }

    return (
        <div className="askAnswerItem" onClick={props.onQuest}>
            <button className="askButtonAnswer">
                {props.answer.question}
                <img src={down} className="askAnswerIcon" alt=""/>
            </button>
            <div className={classes.join(' ')}>
                <p>{props.answer.answer}</p>
            </div>
        </div>
    )
}

class Ask extends Component {
    state = {
        answer: [
            {
                showAnswer: false,
                question: 'Что если я нахожусь в другом городе?',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Кого выбрать: веб-студию или фрилансера?',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Помогаете ли вы с SEO продвижением?',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Что если я не могу ответить на вопрос брифа?',
                answer: 'Lorem ipsum dolor sit amet'
            },
            {
                showAnswer: false,
                question: 'Смогу ли я сам управлять своим сайтом?',
                answer: 'Lorem ipsum dolor sit amet'
            },
        ],
        numberUser: '',
    };

    handleNumber = (event) => {
        const numberUser = (event.target.validity.valid) ? event.target.value : this.state.numberUser;

        this.setState({numberUser});
    };

    clickQuestion = (quest) => {
        const answers = this.state.answer.concat();
        const answer = answers.find(a => a.question === quest);
        answer.showAnswer = !answer.showAnswer;

        this.setState({answer: answers})
    };

    renderAnswer = () => {
        return this.state.answer.map((answer, i) => {
            return (
                <AskAnswer
                    answer={answer}
                    key={i}
                    onQuest={this.clickQuestion.bind(this, answer.question)}
                />
            )
        })
    };

    render() {
        return (
            <div className="wrapper">
                <div className="askAnswer review_heading">
                    <h2>Частые вопросы</h2>
                    {
                        this.renderAnswer()
                    }
                </div>
            </div>
        );
    }
};

export default Ask;