import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favoriteItems);
  const totalFavoriteItems = useSelector((state) => state.cart.totalFavoriteItems);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success('Product added successfully');
  };

  const toggleFavorite = () => {
    dispatch(cartActions.addFav({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }));
    toast.success('Product added to favorites');
  };

  const isFavorite = favorites.some((favorite) => favorite.id === item.id);

  return (
    <Col lg='3' md='4'>
      <div className="product__img">
        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
      </div>
      <div className='p-2 product__info'>
        <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
      </div>
      <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
        <span className="price">${item.price}</span>
        <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}><i className="ri-add-line"></i></motion.span>
        <motion.span
          whileTap={{ scale: 1.2 }}
          onClick={toggleFavorite}
          className={`favorite-icon ${isFavorite ? 'red' : ''}`}
        >
        <div className={`heart-container ${isFavorite ? 'red' : ''}`}>
        <i className="ri-heart-3-line"></i>
        </div>
      </motion.span>
      </div>
    </Col>
  );
}

export default ProductCard;
