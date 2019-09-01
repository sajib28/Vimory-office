import React, { Component } from 'react';
import BootsrapAcc from './BootsrapAcc';
class Faq extends Component {
    render() {
        return (
            <section id="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-1">
                            <div className="section-title text-center">
                                <h2>Frequently Asked Questions</h2>
                                <p>WExpenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="accordion-menu">
                                <BootsrapAcc />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
export default Faq;