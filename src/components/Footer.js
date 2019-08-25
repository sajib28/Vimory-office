import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="col-md-6">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Privacy policy</a></li>
                            <li><a href="/">Terms & Condition</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="social-icon">
                        <ul>
                            <li><a href="/">Follows Us: </a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;