import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layer1 from '../assets/images/blueimg.webp';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import mainImg from '../assets/images/LookBook12.webp'
import mainImg2 from '../assets/images/LookBook11.webp'
// import YouTube from 'react-youtube';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((item) => item.category === 'bag');
    setData(filteredProducts);
  }, []);


  
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
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Obsessive Attention. Intelligent Effort.</h2>
              <p className="custom-paragraph">Functional handbags made of luxurious materials to improve people's lives in small but mighty ways.</p>
            </Col>
            <ProductsList data={data} />
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
              <Link to='/bags'>
                <img src={mainImg} alt="" />
                <h4 className="img__text">Bags</h4>
              </Link>
            </div>
            <div className="main__img">
              <Link to='/shoes'>
                <img src={mainImg2} alt="" />
                <h4 className="img__text">Shoes</h4>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
