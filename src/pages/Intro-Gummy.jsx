import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/gummy.css';
import gummy from '../assets/images/blogpage.webp';
import gummy1 from '../assets/images/blogpage2.webp';
import gummy2 from '../assets/images/blog3.webp';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const IntroGummy = () => {
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

  const closeShareOptions = () => {
    setIsOpen(false);
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
              <img className='gummyintro' src={gummy} alt='' />
              <h2>Introducing Mini Sera Tote - Gummy</h2>
              <p>
                Its exterior design is a surrealist dream, reminiscent of a maze-like structure protruding outwards,
                with sharp, clean lines, and a 3D façade. It has a suede drawstring top, securing your belongings on
                the go.
              </p>
              <img className='gummyimg1' src={gummy1} alt='' />
              <img className='gummyimg2' src={gummy2} alt='' />
            </section>
            <section className='gummyback'>
              <h2 className='backto'>
                <i className='ri-arrow-left-line'></i>
                <Link to='/blog'>Back to blog</Link>
              </h2>
              <div className='share-button'>
                <button onClick={toggleShareOptions}>Shared</button>
                {isOpen && (
                  <div className='share-options'>
                    <FacebookShareButton url={shareUrl} quote={title} className='share'>
                      <h2>
                        <i className='ri-arrow-right-line'></i>Share in Facebook
                      </h2>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={title} className='share'>
                      <h2>
                        <i className='ri-arrow-right-line'></i>Share in Twitter
                      </h2>
                    </TwitterShareButton>
                    <a href={instagramShareUrl} target='_blank' rel='noopener noreferrer'>
                      <p className='insta'>
                        <i className='ri-arrow-right-line'></i>Share in Instagram
                      </p>
                    </a>
                    <button onClick={closeShareOptions}>Close</button>
                  </div>
                )}
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default IntroGummy;
