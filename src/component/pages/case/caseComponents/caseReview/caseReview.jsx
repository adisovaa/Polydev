import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import './caseReview.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseReview = () => {
    const project = useSelector(state => state.slice.items.project);
    const history = useHistory();
    const [screen9, setScreen9] = useState(false);
    const [screen6, setScreen6] = useState(window.matchMedia('(max-width: 650px)').matches);

    useEffect(() => {
        const handler = e => setScreen9(e.matches);
        const screenHandler = e => setScreen6(e.matches);
        window.matchMedia("(max-width: 900px)").addListener(handler);
        window.matchMedia("(max-width: 650px)").addListener(screenHandler);
    });

    const showOneCaseSlides = () => {
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
                    <h3>Клиенты о работе с нами</h3>
                </div>
                <Slider {...settings}>
                    {
                        project.map((project, i) => {
                            return (
                                <div className="caseReviewCard" key={i}>

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
        slidesToShow: !screen9 ? 1 : 2,
        slidesToScroll: 1,
        className: 'eventSlides',
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="caseReview">
            <div className="caseReviewContainer">
                <div className="reviewTitle">
                    <h1>Другие проекты</h1>
                </div>
                {screen6 ?
                    showOneCaseSlides() :
                    <Slider {...settings}>
                        {
                            project.map((review, i) => {
                                return (
                                    <div key={i}>
                                        <div className="caseReviewCard">

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


export default CaseReview;