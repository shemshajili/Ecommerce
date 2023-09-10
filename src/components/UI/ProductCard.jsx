import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const controls = useAnimation();
  const cardRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverAnimation = {
    scale: 0.9,
  };

  const tapAnimation = {
    scale: 1.2,
  };

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = cardRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardPosition < windowHeight * 0.75) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <Col lg='3' md='4'>
      <motion.div
        className="product__item"
        initial="hidden"
        animate={controls}
        variants={variants}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        ref={cardRef}
      >
        <div className="product__img">
          <motion.img src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product__info'>
          <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price}</span>
          <motion.span whileTap={tapAnimation}><i className="ri-add-line"></i></motion.span>
        </div>
      </motion.div>
    </Col>
  );
}

export default ProductCard;
