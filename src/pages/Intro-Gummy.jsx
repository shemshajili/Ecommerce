import React,{useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/gummy.css'
import gummy from '../assets/images/blogpage.webp'
import gummy1 from '../assets/images/blogpage2.webp'
import gummy2 from '../assets/images/blog3.webp'
import { Link } from 'react-router-dom';


const IntroGummy = () => {
    useEffect(() => {
        
        window.scroll(0, 0);
        
        // sehifenin basa getmesi ucun kod
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return <Helmet title='News'>
        <Container>
            <Row>
                <Col>
                    <section className='gummysec'>
                        <img className='gummyintro' src={gummy} alt="" />
                        <h2>Introducing Mini Sera Tote - Gummy</h2>
                        <p>Its exterior design is a surrealist dream, reminiscent of a maze-like structure protruding outwards, with sharp, clean lines, and a 3D façade. It has a suede drawstring top, securing your belongings on the go.

                        Folding inwards like an accordion and then stretching outwards to store those last-minute belongings. The Sera Tote also features a detachable shoulder strap. Carry it your way and relish every thoughtful detail.</p>
                        <img className='gummyimg1' src={gummy1} alt="" />
                        <img className='gummyimg2' src={gummy2} alt="" />
                    </section>
                    <section className='gummyback'>
                    <h2 className='backto'><i className="ri-arrow-left-line"></i><Link to='/blog'>Back to blog</Link></h2>
                    </section>
                </Col>
            </Row>
        </Container>
    </Helmet>
}

export default IntroGummy;
