import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import './Review.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    const review = useSelector(state => state.slice.items.reviews);
    const dispatch = useDispatch();
    const history = useHistory();
    const [screen9, setScreen9] = useState(false);
    const [screen6, setScreen6] = useState(window.matchMedia('(max-width: 650px)').matches);
    const [screen4, setScreen4] = useState(window.matchMedia('(max-width: 450px)').matches);
    const [screen3, setScreen3] = useState(window.matchMedia('(max-width: 420px)').matches);

    useEffect(() => {
        const handler = e => setScreen9(e.matches);
        const screenHandler = e => setScreen6(e.matches);
        const screen4Handler = e => setScreen4(e.matches);
        const screen3Handler = e => setScreen3(e.matches);
        window.matchMedia("(max-width: 900px)").addListener(handler);
        window.matchMedia("(max-width: 650px)").addListener(screenHandler);
        window.matchMedia("(max-width: 450px)").addListener(screen4Handler);
        window.matchMedia("(max-width: 420px)").addListener(screen3Handler);
    });

    const showOneSlides = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: screen6 ? 1 : 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            className: 'eventSlides'
        };

        return (
            <div className="wrapper">
                <div className="review_items_title">
                    <h1>Клиенты о работе с нами</h1>
                </div>
                <Slider {...settings}>
                    {
                        review.map((review, i) => {
                            return (
                                <div key={i}>
                                    <div className="reviewCard">
                                        <div className="reviewTitleCard">
                                            <div className="reviewParameters">
                                                <div className="reviewTime">
                                                    <img className="reviewImg" src={review.img} alt=""/>
                                                    <div className="reviewText">
                                                        <h3>{review.name}</h3>
                                                        <p>{review.position}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1>{review.title}</h1>
                                        </div>
                                        <img className='companyImg' src={review.company} alt=""/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: !screen9 ? 3 : 2,
        slidesToScroll: 1,
        className: 'eventSlides',
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="review">
            <div className="reviewContainer">
                <div className="reviewTitle">
                    <h1>Отзывы</h1>
                </div>
                {screen6 ?
                    showOneSlides() :
                    <Slider {...settings}>
                        {
                            review.map((review, i) => {
                                return (
                                    <div key={i}>
                                        <div className="reviewCard">
                                            <div className="reviewTitleCard">
                                                <p>{review.title}</p>
                                                <div className="reviewBlock">
                                                    <div className="reviewParameters">
                                                        <img className="reviewImg" src={review.img} alt=""/>
                                                        <div className="reviewText">
                                                            <h3>{review.name}</h3>
                                                            <p>{review.position}</p>
                                                        </div>
                                                    </div>
                                                    <img className='companyImg' src={review.company} alt=""/>
                                                </div>
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
};


export default Review;