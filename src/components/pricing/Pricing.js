import React, { Component } from 'react'
import priceImg1 from '../../assets/img/price-img-1.png';
import priceImg2 from '../../assets/img/price-img-2.png';
class Pricing extends Component {
    render() {
        return (
            <section id="pricing" className="photo-with-content">
                <span className="shadow-text  wow zoomIn" data-wow-delay="0.4s" data-wow-delay="0.4s">Our Pricing Plan</span>
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2  className="wow zoomIn" data-wow-delay="0.2s" data-wow-delay="0.2s">Our Pricing Plan</h2>
                                </div>
                            </div>
                            <div className="text-center subconetnt">
                            <h5>Unlimited Access to All Features</h5>
                            <p>Get access to all Premium Templates, Photo Editing<br />Features, Slides, Effect, Filters and Frames.<br />No Watermark & no Ads</p>
                            </div>
                            {/* <div className="title">
                                <div className="title-inner text-center">
                                    <h2>Our Pricing Plan</h2>
                                    <h5>Unlimited Access to All Features</h5>
                                    <p>Get access to all Premium Templates, Photo Editing<br />Features, Slides, Effect, Filters and Frames.<br />No Watermark & no Ads</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="price-container">
                                <div className="price-panel">
                                    <div className="overlay"></div>
                                    <div className="price-inner">
                                        <img src={priceImg1} alt="" />
                                        <h5>Monthly Plan</h5>
                                        <h4>Subscribe Now</h4>
                                        <p className="cost"><span>$</span> 2.99</p>
                                        <a className="btn" href="/">Buy Now</a>
                                    </div>
                                </div>
                                <div className="price-panel">
                                    <div className="price-inner">
                                        <img src={priceImg2} alt="" />
                                        <h5>Annual plan</h5>
                                        <h4>Subscribe Now</h4>
                                        <p className="cost"><span>$</span>19.99</p>
                                        <a className="btn" href="/">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Pricing;

