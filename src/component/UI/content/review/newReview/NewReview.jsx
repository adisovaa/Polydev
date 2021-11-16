import React from 'react'
import Slider from 'react-slick';
import './../Review.css'
import user from "../../../../../images/user.svg";
import companyImg from "../../../../../images/5.svg";

class NewReview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                },
                {
                    img: user,
                    title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                    name: 'Иван Андреев',
                    position: 'Руководитель проекта',
                    companyName: 'SwiftGlobal',
                    companyImg: companyImg
                }
            ]
        };
    }

    componentDidMount() {
        let slickListDiv = document.getElementsByClassName('slick-list')[0]
        slickListDiv.addEventListener('wheel', event => {
            event.preventDefault()
            event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
        })
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        const review = this.state.reviews;

        return (
            <div className="review">
                <div className="reviewContainer">
                    <div className="reviewTitle">
                        <h1>Отзывы</h1>
                    </div>
                    <Slider {...settings} ref={slider => this.slider = slider && slider['innerSlider']}>
                        {
                            review.map((review, i) => {
                                return (
                                    <div className="reviewCard" id={i}>
                                        <div className="reviewTitleCard">
                                            <p>{review.title}</p>
                                            <div className="reviewBlock">
                                                <div className="reviewParameters">
                                                    <div className="reviewText">
                                                        <h6>{review.name}</h6>
                                                        <p>{review.position}</p>
                                                        <p>{review.companyName}</p>
                                                    </div>
                                                </div>
                                                <img className='companyImg' src={review.companyImg} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    }
                </div>
            </div>
        );
    }
}

export default NewReview;