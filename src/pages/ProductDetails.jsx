import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import '../styles/productDetails.css';
import CommonSection from '../components/UI/CommonSection';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';

const ProductDetails = () => {
  const [product, setProduct] = useState({});

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

  const { id } = useParams();
  const { data: products } = useGetData('products'); 
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const docRef = doc(db, 'products', id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('no product!');
      }
    };

    getProduct();
  }, [id, docRef]);

  const {
    imgUrl,
    productName,
    price,
    description,
    shortDesc,
    category,
  } = product;

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    toast.success('Review submitted');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success('Product added successfully!');
  };

  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState();

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img className='img' src={imgUrl} alt='' />
            </Col>
            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-half-s-line'></i>
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <span className='price'>{price}</span>
                  <span className='category__name'>Category: {category}</span>
                </div>
                <p className='short__desc'>{shortDesc}</p>
                <button className='buy__btn' onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab__wrapper d-flex align-items-center gap-5'>
                <h6
                  className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className='tab__content mt-5'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product__review mt-5'>
                  <div className='review__wrapper'>
                    <div className='review__form'>
                      <h4>Live your experience</h4>
                      <form action='' onSubmit={submitHandler}>
                        <div className='form__group'>
                          <input
                            type='text'
                            placeholder='Enter name'
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className='form__group d-flex star-group'>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i className='ri-star-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i className='ri-star-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i className='ri-star-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i className='ri-star-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i className='ri-star-fill'></i>
                          </motion.span>
                        </div>

                        <div className='form__group'>
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type='text'
                            placeholder='Review Message..'
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type='submit'
                          className='buy__btn'
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12'>
              <h2 className='related__title'>You might also like</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
