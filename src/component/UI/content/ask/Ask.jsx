import React, {Component} from 'react';
import './Ask.css'

function AskAnswer(props) {
    const classes = ['askAnswerBlock'];

    if (props.answer.showAnswer) {
        classes.push('show')
    }

    return (
        <div className="askAnswerItem" onClick={props.onQuest}>
            <div className="askButtonAnswer">
                <p className='question'>{props.answer.question}</p>
                <p className="askAnswerIcon" />
            </div>
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
                answer: 'In vel id viverra ipsum, tellus. Tellus suspendisse nunc nibh id augue. Luctus pharetra non lacus, non.'
            },
            {
                showAnswer: false,
                question: 'Кого выбрать: веб-студию или фрилансера?',
                answer: 'In vel id viverra ipsum, tellus. Tellus suspendisse nunc nibh id augue. Luctus pharetra non lacus, non.'
            },
            {
                showAnswer: false,
                question: 'Помогаете ли вы с SEO продвижением?',
                answer: 'In vel id viverra ipsum, tellus. Tellus suspendisse nunc nibh id augue. Luctus pharetra non lacus, non.'
            },
            {
                showAnswer: false,
                question: 'Что если я не могу ответить на вопрос брифа?',
                answer: 'In vel id viverra ipsum, tellus. Tellus suspendisse nunc nibh id augue. Luctus pharetra non lacus, non.'
            },
            {
                showAnswer: false,
                question: 'Смогу ли я сам управлять своим сайтом?',
                answer: 'In vel id viverra ipsum, tellus. Tellus suspendisse nunc nibh id augue. Luctus pharetra non lacus, non.'
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
            <div className="wrapper ask">
                <h2>Частые вопросы</h2>
                <div className="askAnswer">
                    {
                        this.renderAnswer()
                    }
                </div>
            </div>
        );
    }
};

export default Ask;