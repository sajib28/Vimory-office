import React, { Component } from 'react'
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from "uuid";
import { config } from "react-spring";
import $ from 'jquery';
// import { relative } from 'path';
import prev from '../../assets/img/icon/prev.png';
import next from '../../assets/img/icon/next.png';
import Template1 from '../../assets/media/template/love.mp4';
import Template2 from '../../assets/media/template/girls.mp4';
import Template3 from '../../assets/media/template/spring.mp4';
import Template4 from '../../assets/media/template/kids.mp4';
import Template5 from '../../assets/media/template/love2.mp4';
import pentagon from '../../assets/img/icon/pentagon.png';
import triangleIndigo from '../../assets/img/icon/triangle-indigo.png';

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
                <source src={Template4} type="video/webm" />
                <source src={Template4} type="video/mp4" />
            </video>
        </div>
    },
    {
        key: uuidv4(),
        content: <div className="video-template">
            <video muted loop>
                <source src={Template5} type="video/webm" />
                <source src={Template5} type="video/mp4" />
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
        // let prev='../../assets/img/icon/prev.png';
        // let next='../../assets/img/icon/next.png';
        $('div[style*="z-index: 0"]').css({ opacity: 0 });
        $('div[style*="z-index: 0"]').css({ opacity: 0 });
        $('.css-1qzevvg img:first-child').attr("src", prev);
        $('.css-1qzevvg img:last-child').attr("src", next);
        $('div[style*="left: 50%"]').addClass('active');
        // $('div[style*="left: 25%"]').addClass('beforeActive');
        // $('div[style*="left: 75%"]').addClass('afterActive');

        $('div.active video').trigger('play');

        $(".css-1qzevvg img:last-child").click(function () {
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            $("div.active video").trigger('pause');
            $("div.active").next().addClass('active');
            $("div.active").first().removeClass('active');
            $("div.active video").trigger('play');


            // $('div.active video').trigger('pause');
            // $('div.afterActive').removeClass('afterActive').addClass('active');
            // $('div.active').first().removeClass('active').addClass('beforeActive');
            // $('div.active video').trigger('play');

            //$('div.afterActive video').trigger('play');
            //$('div[style*="left: 75%"] video').trigger('play');

        });
        $(".css-1qzevvg img:first-child").click(function () {
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            // $('div[style*="left: 50%"] video').trigger('pause');
            // $('div[style*="left: 25%"] video').trigger('play');

            $("div.active video").trigger('pause');
            $("div.active").prev().addClass('active');
            $("div.active:eq(1)").removeClass('active');
            $("div.active video").trigger('play');

        });
    }
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        autoPlay: true,
        play: true,
        autoplay: true,
        loop: true,
        config: config.slow
    };
    render() {

        return (
            <div className="slider-section">
                <div className="circle-position two-circle bottom-left">
                    <div className="circle-wrapper">
                        <div className="orbit circle-spin">
                            <div className="first-circle">
                                <div className="outer-orbit-small">
                                    <div className="small">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vimory-animation animation-type-4 top-right">
                    <img src={pentagon} alt="" />
                    <div className="brk-animated-circle__container">
                        <img src={triangleIndigo} alt="" />
                    </div>
                </div>
                {/* <div className="orbit venus-orbit"></div>
                <div className="venus-spin">
                    <div id="venus"></div>
                </div>
                <div className="orbit earth-orbit"></div>
                 <div className="earth-spin">
                    <div className="orbit moon-orbit"></div>
                    <div className="moon-spin">
                        <div id="moon"></div>
                    </div>
                </div> */}


                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div id="threedSlider" style={{ width: "70%", height: "594px", margin: "100px auto 70px", position: "relative" }}>
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
                            <p className="wow fadeInUp" data-wow-delay="0.2s" animation-delay="0.2s">Create and share your memory more easily with the help of lots of templates. We have created so many templates for many purposes, just select a template and some photos and vimory will make it ready for you.</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default AnimationSlider;