import React, {useEffect} from 'react';
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from "reactstrap"
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Fav = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

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
        <Helmet title="Fav">
            <CommonSection tittle={"Favorite Products"}/>
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            { cartItems.length === 0 ?(
                                 <h2 className='noFav'>No item favorite to the cart</h2>
                                 ):(
                                <table className='table bordered'>
                                    <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th >Delete</th>
                                            </tr>
                                         </thead>
                                    <tbody>
                                        {cartItems.map((item,index)=>(
                                        <Tr item={item} key={index}/>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}
const Tr =({item})=>{

    const dispatch =useDispatch()

    const deleteProduct =()=>{
    dispatch(cartActions.deleteItem(item.id))
    }

    return   <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>{item.price}</td>
    <td>
        <motion.i whileHover={{scale:1.2}}
        onClick={deleteProduct}
        className="ri-delete-bin-line"></motion.i>
    </td>
</tr>
}
export default Fav;
