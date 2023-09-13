import React, { useState,useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import '../styles/productDetails.css';
import ProductsList from '../components/UI/ProductsList';
import CommonSection from '../components/UI/CommonSection'
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
  const dispstch=useDispatch()

  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category
  } = product;

  const relatedProducts=products.filter(item=> item.category===category)

  const submitHandler=(e)=>{
    e.preventDefault()

    const reviewUserName=reviewUser.current.value
    const reviewUserMsg=reviewMsg.current.value
  }

  const addToCart=()=>{
    dispstch(cartActions.addItem({
        id,
        image:imgUrl,
        productName,
        price
    }))
    toast.success('Product added successfully!')
  }

  const [tab, setTab] = useState('desc');
  const [rating,setRating]=useState()

  return (
    <Helmet title={productName}>
        <CommonSection tittle={productName}/>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
            <img className="img" src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating">
                  <div>
                    <span onClick={()=>setRating(1)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setRating(2)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setRating(3)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setRating(4)}>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setRating(5)}>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>({avgRating} ratings)</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                <span className='price'>{price}</span>
                    <span className='categry__name'>Category:{category}</span>
                </div>
                <p className="short__desc">{shortDesc}</p>
                <button className="buy__btn" onClick={addToCart}>Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
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
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review__form">
                      <h4>Live your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" placeholder="Enter name" ref={reviewUser} />
                        </div>
                        <div className="form__group d-flex ">
                          <span>1<i className="ri-star-fill"></i></span>
                          <span>2<i className="ri-star-fill"></i></span>
                          <span>3<i className="ri-star-fill"></i></span>
                          <span>4<i className="ri-star-fill"></i></span>
                          <span>5<i className="ri-star-fill"></i></span>
                        </div>
                        <div className="form__group">
                          <textarea ref={reviewMsg} rows={4} type="text" placeholder="Review Message.." />
                        </div>
                        <button type='submit' className="buy__btn">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12'>
                <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
