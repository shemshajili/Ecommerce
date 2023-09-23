import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/fav.css'; 
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion, useAnimation } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Fav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [brokenHeart, setBrokenHeart] = useState(false);

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

  const removeFromFav = (id) => {
    setBrokenHeart(true); 
    setTimeout(() => {
      setBrokenHeart(false);
      dispatch(cartActions.deleteFav(id));
    }, 1000); 
  };

  const addToCart = (id) => {
    dispatch(
      cartActions.addItem({
        id,
        image: cartItems.find(item => item.id === id).imgUrl,
        productName: cartItems.find(item => item.id === id).productName,
        price: cartItems.find(item => item.id === id).price,
      })
    );
    toast.success('Product added successfully!');
  };

  return (
    <Helmet title="Favorite Products">
      <CommonSection tittle={'Favorite Products'} />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="noitems">No items favorited</h2>
              ) : (
                <div className="fav-list">
                  {cartItems.map((item, index) => (
                    <Card item={item} key={index} removeFromFav={removeFromFav} addToCart={addToCart} brokenHeart={brokenHeart} />
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Card = ({ item, removeFromFav, addToCart, brokenHeart }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (brokenHeart) {
      controls.start({ width: '0%', opacity: 0 }); 
    } else {
      controls.start({ width: '100%', opacity: 1 }); 
    }
  }, [brokenHeart, controls]);

  return (
    <div className="fav-card">
      <img src={item.imgUrl} alt={item.productName} />
      <h3>{item.productName}</h3>
      <p className="price">${item.price}</p>
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={() => removeFromFav(item.id)}
        className={`ri-heart-${brokenHeart ? 'broken' : 'fill'}`}
        animate={controls} 
      ></motion.button>
      <Link to={`/product/${item.id}`}>Ürün Detaylarına Git</Link>
      <button onClick={() => addToCart(item.id)}>Add to cart</button>
    </div>
  );
};

export default Fav;
