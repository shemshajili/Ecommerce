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
import { doc, getDoc, collection, addDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import useGetData from '../custom-hooks/useGetData';



const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]); // Commentleri saklar
  const [imageURL, setImageURL] = useState(''); // Yorum resmi URL'si

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
      try {
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log('no product!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    getProduct();
    loadComments();
  }, [id, docRef]);
  

  const {
    imgUrl,
    productName,
    price,
    description,
    shortDesc,
    category,
  } = product;

  const addComment = async (productId, userName, message, imageUrl) => {
    try {
      const commentsCollection = collection(db, 'comments');
      await addDoc(commentsCollection, {
        productId,
        userName,
        message,
        imageUrl,
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  
    try {
      await addComment(id, reviewUserName, reviewUserMsg, imageURL, rating);
      toast.success('Review submitted');
      loadComments();
      reviewUser.current.value = '';
      reviewMsg.current.value = '';
      setImageURL('');
      setRating(null); 
    } catch (error) {
      console.error('Error adding comment:', error);
    }
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

  // Firestore'dan yorumları yüklemek için
  const loadComments = async () => {
    const commentsCollection = collection(db, 'comments'); // Comment koleksiyonundan verileri alır
    const q = query(commentsCollection, where('productId', '==', id)); 
    const querySnapshot = await getDocs(q);

    const commentsArray = [];
    querySnapshot.forEach((doc) => {
      commentsArray.push({ id: doc.id, ...doc.data() });
    });

    setComments(commentsArray);
  };

  const deleteComment = async (commentId) => {
    try {
      // Firestore'dan yorumu siler
      const commentDocRef = doc(db, 'comments', commentId);
      await deleteDoc(commentDocRef);

      // Yorumlar listesini günceller
      const updatedComments = comments.filter((comment) => comment.id !== commentId);
      setComments(updatedComments);

      toast.success('Comment deleted successfully');
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast.error('An error occurred while deleting the comment');
    }
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `comment_images/${id}/${imageFile.name}`);
  
    try {
      // Resmi yükle
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      await uploadTask;
  
      // Resmin URL'sini al
      const imageURL = await getDownloadURL(storageRef);
  
      // imageURL'yi ayarla
      setImageURL(imageURL);
  
      // Bildirim göster
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('An error occurred while uploading the image');
    }
  };
  

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
                      <h4>Live your experience</h4><br></br>
                      <form action='' onSubmit={submitHandler}>
                        <div className='form__group'>
                          <input
                            type='text'
                            placeholder='Enter name'
                            ref={reviewUser}
                            required
                          />
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
                        <div className='form__group'>
                          <label htmlFor='imageInput' className='camera-icon'>
                              <i className='ri-camera-line'></i> Add Image
                          </label>
                            <input
                              className='camera'
                              id='imageInput'
                              type='file'
                              accept='image/*'
                              onChange={handleImageUpload}
                              style={{ display: 'none' }}
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
                  {comments.map((comment) => (
                    <div key={comment.id} className='comment'>
                      <div className='comment__user'>{comment.userName}</div>
                      <div className='comment__rating'>
                        {Array.from({ length: comment.rating }, (_, index) => (
                          <i key={index} className='ri-star-fill'></i>
                        ))}
                      </div>
                      <div className='comment__message'>{comment.message}</div>
                      <button
                        className='delete__comment__btn'
                        onClick={() => deleteComment(comment.id)}
                      >
                        Delete
                      </button>
                      <img src={comment.imageUrl} alt='Comment Image' />
                    </div>
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

export default ProductDetails;