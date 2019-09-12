import React, { Component } from 'react';
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';

class Welcome extends Component {
    render() {
        return (
            // Start Intro Section 
            <section id="intro" className="back-img">
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="title">
                            <div className="title-inner">
                                <h1 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Perfect Memory Creator</h1>
                            </div>
                        </div>
                        <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">Fun and fast, Vimory will help your social media posts
                            stand out from the crowd; perfect for Facebook news feed,
                            stories & profile video and Instagram feed & story.</p>

                        <ul>
                        
                            <li className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s"><a href="/"><img src={appleStore} alt="" /></a></li>
                            <li className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s"><a href="/"><img src={googlePlay} alt="" /></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            // End Intro Section
        );
    }
}
export default Welcome;