import React from 'react';
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';


const Footer = () => {
    const year=new Date().getFullYear();

    const handleLogoClick = () => {
        const homePagePath = "/";
        window.location.href = homePagePath;
      };
    return (
        <footer className='footer'>
             <Container>
                <Row>
                <div style={{ borderBottom: '1px solid gray', marginBottom: '20px', marginTop: '-50px' }}></div>
                <Col lg='4'>
                    <div className='logo' onClick={handleLogoClick}>
                        <img src={logo} alt='logo' />
                    <div>
                        <h1>VogueVie</h1>
              </div>
                    </div>
                        <p className="footer__text mt-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus distinctio sed provident adipisci omnis quis iste, consequuntur porro, id harum fuga.
                        </p>
                </Col>

                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Quick Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0 '>
                                    <Link to='/bags'>Bags</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shoes'>Shoes</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    
                    <Col lg='2'>
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3'>
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
                            <ListGroup className='footer__contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>Azerbaijan,Baku</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+9940000000</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>example123@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className='footer__copyright'>©{year} developed by Shams Hajili.</p>
                    </Col>
                </Row>
             </Container>
        </footer>
    );
}

export default Footer;
