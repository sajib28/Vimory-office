import React, { Component } from 'react'
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from "uuid";
import { config } from "react-spring";
import Slide1 from '../../assets/img/template-1.gif';
import Slide2 from '../../assets/img/template-2.gif';
import Slide3 from '../../assets/img/template-2.gif';
import { relative } from 'path';
import videomp from '../../assets/media/30.Love_OK.mp4';
import videoweb from '../../assets/media/30.Love_OK.webm';
let slides = [
    // {
    //     key: uuidv4(),
    //     content: <div className="video-template">
    //     <video autoPlay muted>
    //         <source src={videomp} type="video/webm"/>
    //         <source src={videomp} type="video/mp4"/>
    //         </video>
    //     </div>
    // },
    // {
    //     key: uuidv4(),
    //     content: <div className="video-template">
    //     <video autoPlay muted>
    //         <source src={videomp} type="video/webm"/>
    //         <source src={videomp} type="video/mp4"/>
    //         </video>
    //     </div>
    // },
    // {
    //     key: uuidv4(),
    //     content: <div className="video-template">
    //     <video autoPlay muted>
    //         <source src={videomp} type="video/webm"/>
    //         <source src={videomp} type="video/mp4"/>
    //         </video>
    //     </div>
    // },
    // {
    //     key: uuidv4(),
    //     content: <div className="video-template">
    //     <video autoPlay muted>
    //         <source src={videomp} type="video/webm"/>
    //         <source src={videomp} type="video/mp4"/>
    //         </video>
    //     </div>
    // },
    // {
    //     key: uuidv4(),
    //     content: <div className="video-template">
    //     <video autoPlay muted>
    //         <source src={videomp} type="video/webm"/>
    //         <source src={videomp} type="video/mp4"/>
    //         </video>
    //     </div>
    // },
    // {
    //     key: uuidv4(),
    //     content: <div className="video-template">
    //     <video autoPlay muted>
    //         <source src={videomp} type="video/webm"/>
    //         <source src={videomp} type="video/mp4"/>
    //         </video>
    //     </div>
    // }
    {
        key: uuidv4(),
        content: <img className="slide-img" src={Slide1} alt="5" />
    },
    {
        key: uuidv4(),
        content: <img className="slide-img" src={Slide3} alt="6" />
    },
    {
        key: uuidv4(),
        content: <img className="slide-img" src={Slide1} alt="7" />
    }
];
class AnimationSlider extends Component {
    state = {
        goToSlide: 1,
        offsetRadius: 10,
        showNavigation: true,
        autoPlay: true,
        loop: true,
        config: config.slow


    };
    render() {

        return (
            <div className="slider-section">
                <div className="circle-position">
                    <div class="circle-wrapper">
                        <div class="orbit mercury-orbit"></div>
                        <div class="mercury-spin">
                            <div id="mercury"></div>
                        </div>
                    </div>
                </div>

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
                            <div id id="threedSlider" style={{ width: "80%", height: "480px", margin: "100px auto 70px", position: "relative" }}>
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
            </div>
        )
    }
}
export default AnimationSlider;