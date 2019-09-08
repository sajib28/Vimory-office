import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frame1 from '../../assets/img/frame/1.png';
import frame2 from '../../assets/img/frame/2.png';
import frame3 from '../../assets/img/frame/3.png';
import frame4 from '../../assets/img/frame/4.png';
import frame5 from '../../assets/img/frame/5.png';
class FrameSlider extends Component {

    render() {
        var settings = {
            dots: true,
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (

            <Slider {...settings}>
                <div>
                    <img src={frame1} alt="Vimory Frame" />
                </div>
                <div>
                    <img src={frame2} alt="Vimory Frame" />
                </div>
                <div>
                    <img src={frame3} alt="Vimory Frame" />
                </div>
                <div>
                    <img src={frame4} alt="Vimory Frame" />
                </div>
                <div>
                    <img src={frame5} alt="Vimory Frame" />
                </div>
            </Slider>
            //     <Slider {...settings}>
            //     <div>
            //         <div className="video-template">
            //             <video autoPlay muted loop>
            //                 <source src={videomp} type="video/webm" />
            //                 <source src={videoweb} type="video/mp4" />
            //             </video>
            //         </div>
            //     </div>
            //     <div>
            //         <div className="video-template">
            //             <video autoPlay muted loop>
            //                 <source src={videotest} type="video/webm" />
            //                 <source src={videoweb} type="video/mp4" />
            //             </video>
            //         </div>
            //     </div>
            //     <div>
            //         <div className="video-template">
            //             <video autoPlay muted loop>
            //                 <source src={videomp} type="video/webm" />
            //                 <source src={videoweb} type="video/mp4" />
            //             </video>
            //         </div>
            //     </div>
            //     <div>
            //         <div className="video-template">
            //             <video autoPlay muted loop>
            //                 <source src={videomp} type="video/webm" />
            //                 <source src={videoweb} type="video/mp4" />
            //             </video>
            //         </div>
            //     </div>
            //     <div>
            //         <div className="video-template">
            //             <video autoPlay muted loop>
            //                 <source src={videomp} type="video/webm" />
            //                 <source src={videoweb} type="video/mp4" />
            //             </video>
            //         </div>
            //     </div>
            //     <div>
            //         <div className="video-template">
            //             <video autoPlay muted loop>
            //                 <source src={videomp} type="video/webm" />
            //                 <source src={videoweb} type="video/mp4" />
            //             </video>
            //         </div>
            //     </div>
            // </Slider>
        );

    }
}
export default FrameSlider;