import React, { Component } from 'react'
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from "uuid";
import { config } from "react-spring";
import $ from 'jquery';
import { relative } from 'path';
import Template1 from '../../assets/media/template/kids.mp4';
import Template2 from '../../assets/media/template/girls.mp4';
import Template3 from '../../assets/media/template/love.mp4';
//import Template4 from '../../assets/media/template/love2.mp4';
import Template5 from '../../assets/media/template/food.mp4';
import Template6 from '../../assets/media/template/spring.mp4';

let slides = [
    {
        key: uuidv4(),
        content: <div className="video-template">
            <video muted loop>
                <source src={Template1} type="video/webm" />
                <source src={Template1} type="video/mp4" />
            </video>
        </div>
    },
    {
        key: uuidv4(),
        content: <div className="video-template">
            <video muted loop>
                <source src={Template2} type="video/webm" />
                <source src={Template2} type="video/mp4" />
            </video>
        </div>
    },
    {
        key: uuidv4(),
        content: <div className="video-template">
            <video muted loop>
                <source src={Template3} type="video/webm" />
                <source src={Template3} type="video/mp4" />
            </video>
        </div>
    },
    // {
    //     key: uuidv4(),
    //     content: <div className="video-template">
    //     <video autoPlay muted loop>
    //         <source src={Template4} type="video/webm"/>
    //         <source src={Template4} type="video/mp4"/>
    //         </video>
    //     </div>
    // },
    {
        key: uuidv4(),
        content: <div className="video-template">
            <video muted loop>
                <source src={Template5} type="video/webm" />
                <source src={Template5} type="video/mp4" />
            </video>
        </div>
    },
    {
        key: uuidv4(),
        content: <div className="video-template">
            <video muted loop>
                <source src={Template6} type="video/webm" />
                <source src={Template6} type="video/mp4" />
            </video>
        </div>
    }
    // {
    //     key: uuidv4(),
    //     content: <img className="slide-img" src={Slide1} alt="5" />
    // },
    // {
    //     key: uuidv4(),
    //     content: <img className="slide-img" src={Slide3} alt="6" />
    // },
    // {
    //     key: uuidv4(),
    //     content: <img className="slide-img" src={Slide1} alt="7" />
    // }
];
class AnimationSlider extends Component {
    componentDidMount() {
        $('div[style*="left: 50%"] video').trigger('play');
        $(".css-1qzevvg img:last-child").click(function () {
            $('div[style*="left: 50%"] video').trigger('pause');
            $('div[style*="left: 75%"] video').trigger('play');

        });
        $(".css-1qzevvg img:first-child").click(function () {
            $('div[style*="left: 50%"] video').trigger('pause');
            $('div[style*="left: 25%"] video').trigger('play');

        });
    }

    state = {
        goToSlide: 1,
        offsetRadius: 2,
        showNavigation: true,
        autoPlay: true,
        loop: true,
        config: config.slow


    };
    render() {

        return (
            <div className="slider-section">
                {/* <div class="orbit venus-orbit"></div>
                    <div class="venus-spin">
                        <div id="venus"></div>
                    </div> */}
                {/* <div class="orbit earth-orbit"></div> */}
                {/* <div class="earth-spin">
                        <div class="orbit moon-orbit"></div>
                        <div class="moon-spin">
                            <div id="moon"></div>
                        </div>
                    </div> */}


                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div id id="threedSlider" style={{ width: "80%", height: "600px", margin: "100px auto 70px", position: "relative" }}>
                                <Carousel
                                    slides={slides}
                                    goToSlide={this.state.goToSlide}
                                    offsetRadius={this.state.offsetRadius}
                                    showNavigation={this.state.showNavigation}
                                    animationConfig={this.state.config}
                                    autoPlay={this.state.autoPlay}
                                    loop={this.state.loop} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-2 text-center">
                            <p>Create and share your memory more easily with the help of lots of templates. We have created so many templates for many purposes, just select a template and some photos and vimory will make it ready for you.</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default AnimationSlider;