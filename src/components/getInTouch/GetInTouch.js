import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import appilianLogo from '../../assets/img/logo-appilian.png';
// import axios from 'axios';
// const BASE_URL = "https://jsonplaceholder.typicode.com";
class GetInTouch extends Component {
    // constructor(props) {
    //     super(props);
    //     this.initialState = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }
    //     this.state = this.initialState;
    //     this.changeHandler = this.changeHandler.bind(this);
    //     this.SubmitHandler = this.SubmitHandler.bind(this);
    // }
    // changeHandler = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     const email = e.target.email;
    //     const message = e.target.message;
       
    //     this.setState({
    //         [name]:value,
    //         [email]:value,
    //         [message]:value

    //     })
    // }
    // SubmitHandler = (e) => {
    //     e.preventDefault();
    //     this.props.onSubmit(this.state);
    //     this.setState(this.initialState);
    //     console.log(this.state);
    //     }

    // handleFormSubmit = e => {
    //     e.preventDefault();
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost/vimory-contact/index.php',
    //         headers: { 'content-type': 'application/json' },
    //         data: this.state
    //     })
    //         .then(result => {
    //             this.setState({
    //                 mailSent: result.data.sent
    //             })
    //         })
    //         .catch(error => this.setState({ error: error.message }));
    // };

    render() {
        return (
            <section id="getInTouch" className="photo-with-content">
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2 className="wow zoomIn" data-wow-delay="0.2s" animation-delay="0.2s">Get In Touch<span className="shadow-text wow zoomIn" data-wow-delay="0.4s" animation-delay="0.4s">Get In Touch</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7">
                            <div className="contact-info text-center">
                                <h3 className="wow fadeInUp" data-wow-delay="0.4s" animation-delay="0.4s">Contact Us</h3>
                                <img className="wow fadeInUp" data-wow-delay="0.6s" animation-delay="0.6s" src={appilianLogo} alt="Appilian Logo" />
                                <div className="weblink wow fadeInUp" data-wow-delay="0.8s" animation-delay="0.8s">
                                    <p>B6, Plot-35, Sonargaon Janapath Road<br />
                                        Sector-07, Uttara, Dhaka-1230,  Bangladesh</p>
                                    Website: <a rel="noopener noreferrer" href="http://www.appilian.com" target="_blank">www.appilian.com</a><br />
                                    Email: <a href="mailto:contact@appilian.com">contact@appilian.com</a><br />
                                    Phone: <a href="tel:01759747387">+88-0175-974-7387</a>

                                </div>
                                <ul className="apps-logo wow fadeInUp" data-wow-delay="0.8s" animation-delay="0.8s">
                                    <li><a rel="noopener noreferrer" href="https://apps.apple.com/us/app/vimory-photo-video-maker/id1359573092" target="_blank"><img src={appleStore} alt="Apple Store" /></a></li>
                                    <li><a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.appilian.vimory" target="_blank"><img src={googlePlay} alt="Google Play Store" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group wow fadeInUp" data-wow-delay="0.4s" animation-delay="0.4s">
                                        <input type="text" className="form-control" placeholder="Name" name="name" id="name"/>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-delay="0.6s" animation-delay="0.6s">

                                        <input type="email" className="form-control" placeholder="Email" name="email" id="email" />
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-delay="0.8s" animation-delay="0.8s">
                                        <textarea className="form-control" placeholder="Message" name="message" rows="3" id="message"></textarea>
                                    </div>
                                    <div className="form-group wow fadeInUp" data-wow-delay="1.2s" animation-delay="1.2s">
                                        <button type="submit" className="btn btn-primary float-right wow fadeInUp" data-wow-delay="1s" animation-delay="1s">Send Message</button>
                                    </div>
                                    {/* {this.state.mailSent &&
                                        <div>Thank you for contcting us.</div>
                                    } */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default GetInTouch;
