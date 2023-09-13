import React, {useState} from 'react';
import {Container,Row,Col} from 'reactstrap'
import {useParams} from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/productDetails.css'


const ProductDetails = () => {

const {id}=useParams()
const product =products.find(item=> item.id ===id)

const {imgUrl,productName,price,avgRating,reviews,description,shortDesc} =product
const [tab,setTab] = useState('desc');

    return <Helmet title={productName}>
        <CommonSection title={productName}/>
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img className='img' src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="product__raiting">
                                    <div>
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-half-s-line"></i></span>
                                    </div>
                                    <p>({avgRating} ratings)</p>
                                </div>
                                <span>{price}</span>
                                <p className='short__desc'>{shortDesc}</p>
                                <button className="buy__btn">Add to Cart</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <div className="tab__wrapper d-flex align-items-center gap-5">
                                    <h6 className={`${tab==='desc' ? 'active__tab' :""}`} onClick={() => setTab('desc')}>Description</h6>
                                    <h6 className={`${tab==='rev' ? 'active__tab' :""}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                                </div>

                                {
                                    tab==='desc' ?  <div className="tab__content mt-5">
                                                        <p>{description}</p>
                                                    </div>:<div className='product__review'>
                                                        <div className="review__wrapper">
                                                            <ul>
                                                                {
                                                                    reviews.map((item,index)=>(
                                                                        <li><span>{item.rating}</span>
                                                                        <p>{text}</p>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                }
                               
                            </Col>
                        </Row>
                    </Container>
            </section>
    </Helmet> 
}

export default ProductDetails;
