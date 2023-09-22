import React, { useEffect } from 'react';
import '../styles/fav.css'; 
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Fav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

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

  const dispatch = useDispatch();

  const removeFromFav = (id) => {
    dispatch(cartActions.deleteFav(id));
  };

  return (
    <Helmet title="Favori Products">
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
                    <Card item={item} key={index} removeFromFav={removeFromFav} />
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

const Card = ({ item, removeFromFav }) => {
  return (
    <div className="fav-card">
      <img src={item.imgUrl} alt={item.productName} />
      <h3>{item.productName}</h3>
      <p className="price">${item.price}</p>
      <motion.button whileHover={{scale:1.2}} onClick={() => removeFromFav(item.id)} className="ri-delete-bin-line"></motion.button>
    </div>
  );
};

export default Fav;
