import React, { useEffect, useState, useRef } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import mainImg from '../assets/images/LookBook12.webp';
import mainImg2 from '../assets/images/LookBook11.webp';
import '../styles/home.css';
import logoImg from '../assets/images/RefinerLogo.webp'
import cutImg from '../assets/images/TheCutLogo.webp'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img4 from '../assets/images/Simon Miller - Jessie Cundiff.jpeg'
import img5 from '../assets/images/Lara Angelil Flashes Hi-Style Accessories in ELLE UK March 2022 — Anne of Carversville.jpeg'
import img6 from '../assets/images/Bolso Lula de charol con hebilla - Negro _ CHARLES & KEITH.jpeg'

const Home = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isPlaying3, setIsPlaying3] = useState(true);

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

  useEffect(() => {
    if (videoRef1.current) {
      if (isPlaying1) {
        videoRef1.current.play();
      } else {
        videoRef1.current.pause();
      }
      videoRef1.current.addEventListener('ended', handleVideoEnd1);
    }

    if (videoRef2.current) {
      if (isPlaying2) {
        videoRef2.current.play();
      } else {
        videoRef2.current.pause();
      }
      videoRef2.current.addEventListener('ended', handleVideoEnd2);
    }

    if (videoRef3.current) {
      if (isPlaying3) {
        videoRef3.current.play();
      } else {
        videoRef3.current.pause();
      }
      videoRef3.current.addEventListener('ended', handleVideoEnd3);
    }

    return () => {
      if (videoRef1.current) {
        videoRef1.current.removeEventListener('ended', handleVideoEnd1);
      }
      if (videoRef2.current) {
        videoRef2.current.removeEventListener('ended', handleVideoEnd2);
      }
      if (videoRef3.current) {
        videoRef3.current.removeEventListener('ended', handleVideoEnd3);
      }
    };
  }, [isPlaying1, isPlaying2, isPlaying3]);

  const toggleVideo1 = () => {
    setIsPlaying1(!isPlaying1);
  };

  const toggleVideo2 = () => {
    setIsPlaying2(!isPlaying2);
  };

  const toggleVideo3 = () => {
    setIsPlaying3(!isPlaying3);
  };

  const handleVideoEnd1 = () => {
    if (isPlaying1) {
      videoRef1.current.play();
    }
  };

  const handleVideoEnd2 = () => {
    if (isPlaying2) {
      videoRef2.current.play();
    }
  };

  const handleVideoEnd3 = () => {
    if (isPlaying3) {
      videoRef3.current.play();
    }
  };

  return (
    <div>
      <Helmet title={"Home"} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <video controls autoPlay poster="your-poster-image.jpg" ref={videoRef1} style={{ height: '700px', marginLeft: "20px", borderRadius: "10px" }}>
          <source src="/videos/cq5dam.mp4" type="video/mp4" />
          Video not supported
        </video>
        <div style={{ position: 'absolute', top: '20px', left: '50px', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          Fall Winter 2023
        </div>
        <div style={{ position: 'absolute', top: '60px', left: '20px', color: 'white', fontSize: '18px', fontWeight: 'bold', display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '30px' }}>
          <Link to="/bags" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
            <div>Bags</div>
          </Link>
          <Link to="/shoes" style={{ textDecoration: 'none', color: 'white' }}>
            <div>Shoes</div>
          </Link>
        </div>
      </div>
      <div className="animation-container">
          <div className="text-container">
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
            <span className="moving-text">VogueVie</span>
          </div>
        </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ flex: '1', marginRight: '20px' }}>
    <div style={{ position: 'relative' }}>
      <video controls autoPlay poster="your-poster-image.jpg" ref={videoRef2} style={{ height: 'auto',width:"600px", borderRadius: "10px",marginLeft:"20px",marginTop:"20px" }}>
        <source src="/videos/cq4.mp4" type="video/mp4" />
        Video not supported
      </video>
      <div style={{ position: 'absolute', top: '20px', left: '50px', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        Women's Bags
      </div>
    </div>
  </div>
  <div style={{ flex: '1', marginRight: '20px' }}>
    <div style={{ position: 'relative' }}>
      <video controls autoPlay poster="your-poster-image.jpg" ref={videoRef3} style={{ height: 'auto',width:"600px", borderRadius: "10px",marginLeft:"20px",marginTop:"20px" }}>
        <source src="/videos/cq5dam.video.mp4" type="video/mp4" />
        Video not supported
      </video>
      <div style={{ position: 'absolute', top: '20px', left: '50px', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        Women's Shoes
      </div>
    </div>
  </div>
      <section className='back_stock'>
        <Container>
          <Row>
            <Col>
              <h2 className="section__tittle">Back in Stock !</h2>
            </Col>
          </Row>
          <div className="main__img-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="main__img" style={{ marginRight: '20px' }}>
              <Link to='/bags' className='custom-link'>
                <img src={mainImg} alt="" />
                <h4 className="img__text">Bags</h4>
              </Link>
            </div>
            <div className="main__img">
              <Link to='/shoes' className='custom-link'>
                <img src={mainImg2} alt="" />
                <h4 className="img__text">Shoes</h4>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className='cardHome'>
        <div class="card">
          <img className='shoesImg' src={img4} alt="Women's Shoes and Bags!" />
          <div class="card-content">
            <h2 class="card-title">Women's Shoes!</h2>
            <p class="card-description">Discover the New Collection!</p>
            <a href="link-to-category" class="card-button"><Link to={'/shoes'}>View Products.</Link></a>
          </div>
        </div>
        <div class="card">
          <img src={img5} alt="Women's Bags!" />
          <div class="card-content">
            <h2 class="card-title">Women's Bag!</h2>
            <p class="card-description">Discover the New Collection!</p>
            <a href="link-to-category" class="card-button"><Link to={'/bags'}>View Products.</Link></a>
          </div>
        </div>
        <div class="card">
          <img src={img6} alt="Women's Shoes and Bags!" />
          <div class="card-content">
            <h2 class="card-title">Women's Bags&Shoes!</h2>
            <p class="card-description">Discover the New Collection!</p>
            <a href="link-to-category" class="card-button"><Link to={'/shop'}>View Products.</Link></a>
          </div>
        </div>
      </section>
      <section>
        <div className="marka__logo">
          <div className="refiry__logo">
            <img src={logoImg} alt="" />
            <div className="refiry__logo-text">
              " What it takes to make an eco-friendly handbag."
            </div>
          </div>
          <div className="cut__logo">
            <img src={cutImg} alt="" />
            <div className="cut__logo-text">
              " This bag is going to be everywhere soon. "
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
