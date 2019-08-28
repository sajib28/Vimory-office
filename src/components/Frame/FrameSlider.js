import React, { Component } from 'react';
import Slider from "react-slick";
import mobileFrameImage from '../../assets/img/frame-img.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FrameSlider extends Component {

    render() {
        var settings = {
            dots: true,
            fade:true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
        };
        return (

            <Slider {...settings}>
                <div>
                    <img src={mobileFrameImage} alt="Frame"/>
                </div>
                <div>
                    <img src={mobileFrameImage} alt="Frame"/>
                </div>
                <div>
                    <img src={mobileFrameImage} alt="Frame"/>
                </div>
                <div>
                    <img src={mobileFrameImage} alt="Frame"/>
                </div>
                <div>
                    <img src={mobileFrameImage} alt="Frame"/>
                </div>
                <div>
                    <img src={mobileFrameImage} alt="Frame"/>
                </div>
            </Slider>
        );

    }
}
export default FrameSlider;