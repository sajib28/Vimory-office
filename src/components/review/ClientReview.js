import React, { Component } from 'react'
import ReviewSlider from './ReviewSlider';
// import ClientSlider from './ClientSlider';
import triangle from '../../assets/img/icon/triangle.png';
class ClientReview extends Component {
    render() {
        return (
            <section id="review">
                <div className="circle-position one-circle left-circle">
                    <div className="circle-wrapper">
                            <div className="orbit circle-spin">
                                <div className="first-circle"></div>
                            </div>
                    </div>
                </div>
                <div className="vimory-animation animation-type-3 top-right">
                        <div className="vimory-animated-circle"></div>
                        <div className="vimory-animated-circle-container">
                            <img src={triangle} alt="Vimory" />
                        </div>
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <div className="section-title text-center">
                                <h2 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">Our Clients Say</h2>
                                <p className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1 text-center">
                            <ReviewSlider/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ClientReview;