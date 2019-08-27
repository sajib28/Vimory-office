import React, { Component } from 'react'
import SliderCom from './SliderCom';
class ClientReview extends Component {
    render() {
        return (
            <section id="review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <div className="section-title text-center">
                                <h2>Our Clients Say</h2>
                                <p>WExpenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-2 text-center">
                            <SliderCom/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ClientReview;