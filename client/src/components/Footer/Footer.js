import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './Footer.css';

class FooterPage extends React.Component {
    render() {
        return (
            <div className="footer">
                <Footer color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                    <div style={{ backgroundColor: '#2699FB' }}>
                        <Container>
                            <Row className="footer-header">
                                <Col md="8" lg="8" className="">
                                    <h5 className="mb-0 white-text">Social</h5>
                                </Col>
                                <div>
                                    <Col md="4" lg="4" className="text-center text-md-right">
                                        <div className="social-icons">
                                        <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                        <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                                        <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </div>
                    <Container className="mt-5 mb-4 text-center text-md-left">
                        <Row className="mt-3">
                            <Col md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                                <h6 className="text-uppercase font-weight-bold"><strong>All Artist United</strong></h6>
                                <hr />
                                <p>A Community of Artists</p>
                            </Col>
                            <Col md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                                <h6 className="text-uppercase font-weight-bold"><strong>Artist Area</strong></h6>
                                <hr />
                                <p><a href="#!" className="dark-grey-text">Oil Painting</a></p>
                                <p><a href="#!" className="dark-grey-text">Watercolors</a></p>
                                <p><a href="#!" className="dark-grey-text">Textiles and Fabric </a></p>
                                <p><a href="#!" className="dark-grey-text">Sculpture</a></p>
                                <p><a href="#!" className="dark-grey-text">Jewelry</a></p>
                            </Col>
                            <Col md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                                <h6 className="text-uppercase font-weight-bold"><strong>Existing Members</strong></h6>
                                <hr />
                                <p><a href="#!" className="dark-grey-text">Your Account</a></p>
                                <p><a href="#!" className="dark-grey-text">Become a member of our artist Community</a></p>
                                <p><a href="#!" className="dark-grey-text">Shipping Rates</a></p>
                                <p><a href="#!" className="dark-grey-text">Help</a></p>
                            </Col>
                            <Col md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                                <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                                <hr />                                
                                <p><i className="fa fa-home mr-3"></i> McMinneville, Oregon</p>
                                <p><i className="fa fa-envelope mr-3"></i>All Artists United</p>
                                <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                            </Col>
                        </Row>
                    </Container>

                </Footer>
            </div>
        );
    }
}

export default FooterPage;