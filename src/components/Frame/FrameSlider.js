import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobileFrameImage from '../../assets/img/frame-img.png';
import videomp from '../../assets/media/400.mp4';
import videoweb from '../../assets/media/30.Love_OK.webm';
class FrameSlider extends Component {

    render() {
        var settings = {
            dots: true,
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (

            <Slider {...settings}>
                <div>
                    <div className="video-template">
                        <video autoPlay muted loop>
                            <source src={videomp} type="video/webm" />
                            <source src={videoweb} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div>
                    <div className="video-template">
                        <video autoPlay muted loop>
                            <source src={videomp} type="video/webm" />
                            <source src={videoweb} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div>
                    <div className="video-template">
                        <video autoPlay muted loop>
                            <source src={videomp} type="video/webm" />
                            <source src={videoweb} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div>
                    <div className="video-template">
                        <video autoPlay muted loop>
                            <source src={videomp} type="video/webm" />
                            <source src={videoweb} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div>
                    <div className="video-template">
                        <video autoPlay muted loop>
                            <source src={videomp} type="video/webm" />
                            <source src={videoweb} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div>
                    <div className="video-template">
                        <video autoPlay muted loop>
                            <source src={videomp} type="video/webm" />
                            <source src={videoweb} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </Slider>
        );

    }
}
export default FrameSlider;