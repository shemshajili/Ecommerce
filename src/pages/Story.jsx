import React,{useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/story.css'
import blog from '../assets/images/Future Full of Promise_ LOUIS VUITTON Cruise 2022 Collection.jpeg'
import blog3 from '../assets/images/Lara Angelil Flashes Hi-Style Accessories in ELLE UK March 2022 — Anne of Carversville.jpeg'
import { Link } from 'react-router-dom';


const Story = () => {
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
                <section className='blog'>
                    <img src={blog} alt="" />
                    <h2>The VogueVie Origin Story</h2>
                    <p>VogueVie`s  founder and creative director Meb Rure hails from an industrial design background. In 2015, Meb decided to change gears and turn her energy towards VogueVie, a collection of exceptional handbags. Focusing on quality material, good design, craftsmanship and sustainability, VogueVie reflects the epitome of quality over quantity.</p>
                    <p>Meb was highly inspired by the Bauhaus Movement's artists and architects. From Mies van der Rohe's works to Kandinsky's paintings, to Aalto's furniture, she acquired a rationalist vision of design by gleaning how they served a utilitarian purpose in a cleverly simple way. VogueVie merges industrial design and fashion, creating functional handbags made of luxurious and honest materials to improve people's lives in small but important ways.</p>
                </section>
                <section className='blog1'>
                    <img src={blog3} alt="" />
                    <p className='blog__desc'>Innovation being the key factor alongside aesthetic, VogueVie has brought unexpected shapes with smart details, functionality and a new luxury feel with a contemporary price point.

                     is where VogueVie was born, the company's headquarters is now split between the US, and Turkey.</p>
                </section>
                <section className='gummyback'>
                <h2 className='backto'><i className="ri-arrow-left-line"></i><Link to='/blog'>Back to blog</Link></h2>
                </section>
                </Col>
            </Row>
        </Container>
    </Helmet>
}

export default Story;
