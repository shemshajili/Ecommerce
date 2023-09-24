import React, { useEffect, useState } from 'react';
import '../styles/fav.css'; 
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion, useAnimation } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useGetData from '../custom-hooks/useGetData';
import { Link } from 'react-router-dom'; 

const Fav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [brokenHeart, setBrokenHeart] = useState(false);

  const { data: products} = useGetData('products');
  const [productFav] = useState(products);

  useEffect(() => {
    window.scroll(0, 0);
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
                    <Card item={item} key={index} removeFromFav={removeFromFav} className='addbtn' addToCart={addToCart} />
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
        <Row>
        {productFav.map((product) => (
              <Col lg='3' md='4' key={product.id}>
                <Link to={`/product-details/${product.id}`}>
                  <div className='product-card'>
                    <img src={product.imgUrl} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <p>${product.price}</p>
                  </div>
                </Link>
              </Col>
            ))}
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
        onClick={() => removeFromFav(item.id)}
        className={`ri-delete-bin-line`}
      ></motion.button>
      <button onClick={() => addToCart(item.id)}>Add to cart</button>
    </div>
  );
};
export default Fav;
