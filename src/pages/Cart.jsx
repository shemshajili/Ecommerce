import React, {useEffect} from 'react';
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from "reactstrap"
import tdImg from '../assets/images/FlexBag1.webp'
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

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

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            { cartItems.length === 0 ?( <h2 className='fs-4 text-center'>No item added to the
                                     cart</h2>):(
                                          <table className='table bordered'>
                                          <thead>
                                                 <tr>
                                                     <th>Image</th>
                                                     <th>Title</th>
                                                     <th>Price</th>
                                                     <th>Qty</th>
                                                     <th >Delete</th>
                                                 </tr>
                                         </thead>
     
                                         <tbody>
                                                {
                                                 cartItems.map((item,index)=>(
                                                    <tr key={index}>
                                                    <td><img src={item.imgUrl} alt="" /></td>
                                                    <td>{item.productName}</td>
                                                    <td>${item.price}</td>
                                                    <td>{item.quantity}px</td>
                                                    <td>
                                                        <motion.i whileHover={{scale:1.2}} className="ri-delete-bin-line"></motion.i>
                                                    </td>
                                                </tr>
                                                 ))
                                                }
                                         </tbody>
                                     </table>
                                    )
                               
                            }
                        </Col>
                        <Col lg='3'>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Cart;
