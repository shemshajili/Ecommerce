import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/mirror.css'
import gummy from '../assets/images/blogpage4.webp'
import gummy1 from '../assets/images/blogpage5.webp'
import gummy2 from '../assets/images/blog7.webp'
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const IntroMirror = () => {
    useEffect(() => {
        window.scroll(0, 0);
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleShareOptions = () => {
        setIsOpen(!isOpen);
    };

    const shareUrl = window.location.href;
    const title = 'Başlık buraya gelecek';

    const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;

    return (
        <Helmet title='News'>
            <Container>
                <Row>
                    <Col>
                        <section className='gummysec'>
                            <img className='gummyintro' src={gummy} alt="" />
                            <h2>Introducing S-X3 - Mirror</h2>
                            <p>Harness the Power of Versatility
                            Elevate your ensemble with our unique removable harness, tailored to provide diverse wearing options. Whether you’re dressing up for an evening soirée or running daily errands, the S-X3 is versatile enough to be worn solo, as a chic clutch, or paired with its distinctive harness. Don't be deceived by its sleek exterior. The S-X3 boasts ample room, thoughtfully designed to accommodate your daily essentials.</p>
                            <img className='gummyimg1' src={gummy1} alt="" />
                            <img className='gummyimg2' src={gummy2} alt="" />
                        </section>
                        <section className='gummyback'>
                       
                            <h2 className='backto'><i className="ri-arrow-left-line"></i><Link to='/blog'>Back to blog</Link></h2>
                            <div className="share-button">
                                <button onClick={toggleShareOptions}>Shared</button>
                                {isOpen && (
                                    <div className="share-options">
                                        <FacebookShareButton url={shareUrl} quote={title} className='share'>
                                        <h2><i className="ri-arrow-right-line"></i>Share in Facebook</h2>
                                        </FacebookShareButton>
                                        <TwitterShareButton url={shareUrl} title={title} className='share'>
                                        <h2><i className="ri-arrow-right-line"></i>Share in Twitter</h2>
                                        </TwitterShareButton>
                                        <a href={instagramShareUrl} target="_blank" rel="noopener noreferrer">
                                        <p className='insta'><i className="ri-arrow-right-line"></i>Share in Instagram</p>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}

export default IntroMirror;
