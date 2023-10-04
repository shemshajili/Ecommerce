import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/fav.css'; 
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useGetData from '../custom-hooks/useGetData';

const Fav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const { data: products } = useGetData('products');
  const [productFav] = useState(products);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const removeFromFav = (id) => {
    setTimeout(() => {
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
                    <Card
                      item={item}
                      key={index}
                      removeFromFav={removeFromFav}
                      addToCart={addToCart}
                    />
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

const Card = ({ item, removeFromFav, addToCart }) => {
  return (
    <div className="fav-card">
      <img src={item.imgUrl} alt={item.productName} />
      <h3>{item.productName}</h3>
      <p className="price">${item.price}</p>
      <motion.button
        onClick={() => removeFromFav(item.id)}
        className={`ri-delete-bin-line`}
      ></motion.button>
      <button className='favButton' onClick={() => addToCart(item.id)}>Add to cart</button>
    </div>
  );
};

export default Fav;
