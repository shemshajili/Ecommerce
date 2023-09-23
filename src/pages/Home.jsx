import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layer1 from '../assets/images/mlouye2.jpeg';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import mainImg from '../assets/images/LookBook12.webp';
import mainImg2 from '../assets/images/LookBook11.webp';
import home1 from '../assets/images/home1.jpeg';
import home2 from '../assets/images/home2.jpeg';
import home3 from '../assets/images/home3.jpeg';
import '../styles/home.css';
import logoImg from '../assets/images/RefinerLogo.webp'
import cutImg from '../assets/images/TheCutLogo.webp'
import victryIMg from '../assets/images/victoryimg.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from '../assets/images/Alexander Wang Pre-Fall 2018 Fashion Show (1).jpeg'
import img2 from '../assets/images/Alexander Wang Pre-Fall 2018 Fashion Show (2).jpeg'
import img3 from '../assets/images/Alexander Wang Pre-Fall 2018 Fashion Show.jpeg'
import img4 from '../assets/images/Memet Erol for Elele Turkey with Anastasiia Apukhtina.jpeg'
import img5 from '../assets/images/Lara Angelil Flashes Hi-Style Accessories in ELLE UK March 2022 — Anne of Carversville.jpeg'
import img6 from '../assets/images/Bolso Lula de charol con hebilla - Negro _ CHARLES & KEITH.jpeg'

const Home = () => {
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

  // const [data, setData] = useState([]); ==================FOR USED FRONT END=================

  // useEffect(() => {        productlari getirme
  //   setData(products);
  // }, []);

  // const [data1,setData] = useState([]);
  // const [shoesHomeProducts, setShoesProducts] = useState([]);

  // useEffect(() => {
  //     setData(products);

  //     const shoesHome = products.filter(product => product.category === 'shoesHome');
  //     setShoesProducts(shoesHome);
  // }, []);

  // const [data,setData1] = useState([]);     
  // const [bagsHomeProducts, setBagProducts] = useState([]);

  // useEffect(() => {
  //     setData1(products);

  //     const bagHome = products.filter(product => product.category === 'bagHome');
  //     setBagProducts(bagHome);
  // }, [products]);

  return ( 
    <div>
      {/* Page title */}
      <Helmet title={"Home"} />

      {/* Parallax effect */}
      <Parallax pages={1.45}>
        {/* Background layer */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={0.1}
          style={{
            backgroundColor: 'transparent',
            height: '20px',
          }}
        />

        {/* Parallax background image */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1.5}
          style={{
            backgroundImage: `url(${layer1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        />

        {/* Parallax content layer */}
        <ParallaxLayer
          offset={0}
          speed={0.8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
          }}
        >
          {/* Hero section */}
          <section className="hero__section">
            <Container>
              <Row>
                <div className="hero__content">
                  {/* Hero title */}
                  <h2>Industrial design meets fashion.</h2>
                </div>
              </Row>
            </Container>
          </section>
          {/* Hero description */}
          <p className="hero__description">Atypical leather goods</p>
          {/* Shop Now button */}
          <motion.button whileTap={{ scale: 1 }} className='buy_btn'>
            {/* Shop Now text with a link */}
            <span className='buy_btn_text'>
              <Link to='/shop'>Shop Now</Link>
            </span>
          </motion.button>
        </ParallaxLayer>
      </Parallax>
      <Services />
      <Row>
        <section className='home__img'>
          <div className='image-container'>
            <Link to="/shop">
              <img className='home1' src={home1} alt="" />
              <div className='image-text'>Tedy-Gummy</div>
            </Link>
          </div>
          <div className='image-container'>
            <Link to="/shop">
              <img className='home2' src={home2} alt="" />
              <div className='image-text'>Mini Flex</div>
            </Link>
          </div>
          <div className='image-container'>
            <Link to="/shop">
              <img className='home3' src={home3} alt="" />
              <div className='image-text'>Atlas-Jade</div>
            </Link>
          </div>
        </section>
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
      </Row>
      <section className="trending__products">
      <Container>
  <Row>
    <Col lg='12' className='text-center'>
      <h2 className='section__title'>Obsessive Attention. Intelligent Effort.</h2>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000}  className="hide-indicators">
  <div>
    <img
      src={img1}
      alt="Image 1"
      style={{ maxWidth: '900px', maxHeight: '800px' }}
    />
    <p className="legend"></p>
  </div>
  <div>
    <img
      src={img2}
      alt="Image 2"
      style={{ maxWidth: '900px', maxHeight: '800px' }}
    />
    <p className="legend"></p>
  </div>
  <div>
    <img
      src={img3}
      alt="Image 3"
      style={{ maxWidth: '900px', maxHeight: '800px' }}
    />
    <p className="legend"></p>
  </div>
</Carousel>

      <p className="custom-paragraph"></p>
    </Col>
  </Row>

</Container>
      </section>
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
    <section>
      <Row>
        <div className="image-container">
          <img src={victryIMg} alt="" />
          <div className="overlay-text"><Link className='pink' to={'/shop'}>VogueVia</Link></div>
        </div>
      </Row>
    </section>
    </div>
  );
}

export default Home;
