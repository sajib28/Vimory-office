import React, { Component } from 'react';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
//import mobileFrame from '../assets/img/mobile-frame.png';
//import mobileFrameEffect from '../assets/media/sample-video.mp4';
//import CommonTab from '../components/tab/CommonTab';
import triangle from '../../assets/img/icon/triangle.png';
import PhotoEditTab from './PhotoEditTab';
import BackgroundImage from '../../assets/img/photo-edit-bg.jpg';
import rectangle from '../../assets/img/icon/rectangle.png';
import round from '../../assets/img/icon/round.png';
class PhotoEdit extends Component {
    render() {
        return (
            <section id="photoEdit">
                <BackgroundWithText id="photoEditBg" backgroundImage={BackgroundImage} title="Photo Edit" shadowTitle="Photo Edit" />
                <div className="content-area">
                    <div className="vimory-animation animation-type-3 top-left">
                        <div className="vimory-animated-circle"></div>
                        <div className="vimory-animated-circle-container">
                            <img src={triangle} alt="Vimory" />
                        </div>
                    </div>
                    <div className="vimory-animation animation-type-4 bottom-right">
                        <img src={rectangle} alt="Vimory" />
                        <div className="brk-animated-circle__container">
                            <img src={round} alt="Vimory" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <PhotoEditTab />
                                {/* <CommonTab alt="Photo Edit"/> */}
                                {/* <div className="col-md-5">
                                    <div className="mobile-frame">
                                        <img src={mobileFrame} alt="" />
                                        <div className="mobile-frame-content">
                                            <video controls autoPlay>
                                                <source src={mobileFrameEffect} type="video/mp4"/></video> 
                                        </div>
                                    </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h3>Photo Edit</h3>
                                            <p>Try professional photo editing tools to edit single or multiple photos for adjustments, beautify or an ideal photogenic outlook.</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-clone"></i>Modern photo cropping tools allow you to crop your photo more easily.</li>
                                                <li><i className="far fa-clone"></i>Express the moment with emoji and do more with it.</li>
                                                <li><i className="far fa-clone"></i>So many options like Exposure, Brightness, Contrast, Saturation,Warmth, highlights that give you a professional photo editing experience.</li>
                                                <li><i className="far fa-clone"></i>Vimory gives you the power  to focus on a specific area of your photo.</li>
                                                <li><i className="far fa-clone"></i>So many filters to enhance your look.</li>
                                            </ul>
                                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Effect Section
        )
    }
}
export default PhotoEdit;