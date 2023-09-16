import React, { useEffect } from 'react';
import '../styles/blog.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import blog from '../assets/images/Future Full of Promise_ LOUIS VUITTON Cruise 2022 Collection.jpeg'
import blogimg1 from '../assets/images/blogpage.webp'
import blogimg2 from '../assets/images/blogpage4.webp'
import { Link } from 'react-router-dom';

const Blog = () => {
    useEffect(() => {

        window.scroll(0, 0);

        // Sayfanın başına gitmek için kod
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return <Helmet title={'Blog'}>
        <Container>
            <Row>
                <Col>
                    <section className='news'>
                        <h3>News</h3>
                        <div className="blog__image-container">
                            <img className='blog__img' src={blog} alt="" />
                        </div>
                        <h2><Link to={'/story'} className='blog-link'>The VogueVie Origin Story</Link></h2>
                        <p>Innovation being the key factor alongside aesthetics, VogueVie has brought unexpected shapes with smart details,
                            functionality and a new luxury feel with a contemporary price point.</p>
                    </section>
                    <section className='blog'>
                        <div>
                        <img className='blog__img1' src={blogimg1} alt="" />
                        <h2><Link to={'/gummy'} className='blog-link'>Introducing Mini Sera Tote - Gummy </Link></h2>
                        <p>"Its exterior design is a surrealist dream, reminiscent of a maze-like structure protruding outwards, with sharp, clean lines, and a 3D façade. It has a suede drawstring top, securing your belongings on the go."</p>
                        </div>
                        <div>
                        <img className='blog__img1' src={blogimg2} alt="" />
                        <h2><Link to={'/mirror'} className='blog-link'>Introducing S-X3 - Mirror</Link></h2>
                        <p>"Harness the Power of Versatility Elevate your ensemble with our unique removable harness, tailored to provide diverse wearing options."</p>
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>
    </Helmet>
}

export default Blog;
