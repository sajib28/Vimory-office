import React, { Component } from 'react'
import Feature from './Feature';
export default class AppFeature extends Component {
    render() {
        return (
            <section id="appFeature">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2>App Features</h2>
                                <p>We have created a lot of Templates, So that you can make a videomore easily.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Feature />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
