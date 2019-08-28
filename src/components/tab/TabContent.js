import React, { Component } from 'react'

export default class TabContent extends Component {
    render() {
        const { logoUrl } = this.props;
        return (
            <div className="tab-content-info">
                <div className="col-md-5">
                    <div className="mobile-frame">
                        <img src={this.props.mobileFrame} alt={this.props.alt} />
                        <div className="mobile-frame-content">
                            <img src={this.props.mobileFrameImg} alt={this.props.alt} />
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
            // <div className={this.props.class}>
            //     <h3>{this.props.title}</h3>
            //     <p>{this.props.description}</p>
            // </div>
        )
    }
}
