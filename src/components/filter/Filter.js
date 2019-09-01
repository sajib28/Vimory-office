import React, { Component } from 'react'
import TabCom from './TabCom';
class Filter extends Component {
    render() {
        return (
            <section id="filter">
            <div id="filterBg" className="photo-area">
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2>Filter<span className="shadow-text">Filter</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-area">
                <div className="container">
                    <div className="row">
                        <div className="photo-content">
                        <TabCom/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // End Filter Section
        )
    }
}
export default Filter;