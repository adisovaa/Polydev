import React, {Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css'
import user from "../../../images/user.svg"
import userImg from '../../../images/3.svg'


class Review extends Component {
    state = {
        reviews: [
            {
                img: user,
                title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                name: 'Иван Андреев',
                position: 'Front-End developer',
                company: userImg
            },
            {
                img: user,
                title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                name: 'Иван Андреев',
                position: 'Front-End developer',
                company: userImg
            },
            {
                img: user,
                title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                name: 'Иван Андреев',
                position: 'Front-End developer',
                company: userImg
            },
            {
                img: user,
                title: 'Мы делаем проекты не для наград в нашем портфолио, а для бизнеса клиента: учитываем требования рынка в функционале, создаём актуальный и понятный пользователю дизайн, делаем проект от А до Я и оказываем поддержку. И всё по адекватным цена и по договору',
                name: 'Иван Андреев',
                position: 'Front-End developer',
                company: userImg
            }
        ],
    };

    render() {
        const {reviews} = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            className: 'eventSlides'
        };

        return (
            <div className="carousel">
                <div className="review">
                    <div className="review_heading">
                        <h2>Отзывы</h2>
                    </div>
                    <Slider {...settings}>
                        {
                            reviews.map((reviews, i) => {
                                return (
                                    <div key={i}>
                                        <div className="review_container">
                                            <div className="review_text">
                                                <p>Мы делаем проекты не для наград в нашем портфолио, а для бизнеса
                                                    клиента: учитываем требования рынка в функционале, создаём
                                                    актуальный и понятный пользователю дизайн, делаем проект от А до Я и
                                                    оказываем поддержку. И всё по адекватным цена и по договору</p>
                                            </div>
                                            <div className="review_items">
                                                <div className="reviewer">
                                                    <img className='user_logo' src={user} alt=""/>
                                                    <div className="userInfo">
                                                        <h3>{reviews.name}</h3>
                                                        <p>{reviews.position}</p>
                                                    </div>
                                                </div>

                                                <img className='logo' src={userImg} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Review;