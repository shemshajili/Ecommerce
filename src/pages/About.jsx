import React, { useEffect } from 'react';
import '../styles/about.css';
import { Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import about1 from '../assets/images/Mlouye.jpeg';
import about2 from '../assets/images/mlouye3.jpg';
import about3 from '../assets/images/home1.jpg';

const About = () => {
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

    return (
        <div className="about__page">
            <Helmet title={"About"} />
            <Container>
                <div className="about__name" id="about__name">About</div>
                <Row>
                    <section className='about__img'>
                        <img className='about1' src={about1} alt="" />
                        <img className='about2' src={about2} alt="" />
                        <img className='about3' src={about3} alt="" />
                    </section>
                </Row>
                <Row>
                    <section className='about__txt'>
                        <h2>About Us: VogueVie - Where Style and Elegance Converge</h2>
                        <div className="about__desc">Welcome! VogueVie is an e-commerce platform that offers carefully curated collections of shoes and handbags for women to express their style and accentuate their beauty. We don't just sell shoes and bags; we aim to help you create your style and enrich your personal expression.</div>
                        <h3>What is VogueVie?</h3>
                        <div className="about__desc">The word "Vogue" refers to the esteemed fashion authority, Vogue magazine, while "Vie" means "life" in French. This name reflects that we are a place where style and life come together, and we aspire to provide our customers with an inspiring experience not only through our products but also through their lifestyles.</div>
                        <h3>Our Mission</h3>
                        <div className="about__desc">Our mission is built on celebrating the unique beauty and personal style of every woman. At VogueVie, we strive to assist our customers in expressing themselves and boosting their confidence by offering a wide range of shoes and handbag options to suit every age, style, and budget. We want to be the place where you can find everything you need to discover and express your style.</div>
                        <div className="about__desc">At VogueVie, we're here to help you discover your style and support you in the best way possible. We thank you for choosing us and are excited to share this style journey with you.</div>
                        <div className="about__desc">Express your style, accentuate your beauty, and join the VogueVie family!</div>
                    </section>
                </Row>
                <Row>
                    <section className='our__promisse'>
                         <h2>Our quality promise</h2>
                         <div className="promise__desc">
                         Quality is never an accident. It is always the result of intelligent effort. We spend most of our time and energy for good design and to achieve high quality. Every single detail from material to technique is thought through with obsessive attention. If our product doesn't satisfy you, we'll take it back.
                         </div>
                    </section>
                </Row>
            </Container>
        </div>
    );
}

export default About;
