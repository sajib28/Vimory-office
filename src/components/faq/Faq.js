import React, { Component } from 'react';
import FaqAccordion from './FaqAccordion';
class Faq extends Component {
    render() {
        return (
            <section id="faqs">
                <div className="circle-position two-circle left-circle">
                    <div className="circle-wrapper">
                        <div className="orbit circle-spin">
                            <div className="first-circle">
                                <div className="outer-orbit-small">
                                    <div className="small"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-position one-circle right-circle">
                    <div className="circle-wrapper">
                        <div className="orbit circle-spin">
                            <div className="first-circle"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-1">
                            <div className="section-title text-center">
                                <h2 className="wow fadeInUp" data-wow-delay="0.1s" animation-delay="0.1s">Frequently Asked Questions</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s" animation-delay="0.2s">Our Mobile App can be downloaded and installed on your compatible mobile device easily. If you have any question - please look through the most frequently asked questions or contact us for more details </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="accordion-menu">
                                <FaqAccordion />
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        )
    }
}
export default Faq;