import React, { useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './Header.css';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/usericon1.png';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const navLinks = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
  {
    path: 'lookbook',
    display: 'LookBook',
  },
  {
    path: 'about',
    display: 'About',
  },
];

const handleLogoClick = () => {
  window.location.href = '/';
};

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalFavoriteItems = useSelector((state) => state.cart.totalFavoriteItems);

  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  const logout =()=>{
    signOut(auth).then(()=>{
    toast.success('Logged out')
    navigate('/home')
  }).catch(err=>{
      toast.error(err.message)
  })
  }

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle('nav__active');
  const navigateToCart = () => {
    navigate('/cart');
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle('show__profileActions');

  return (
    <header className='header' ref={headerRef}>
      <div className='containerNav'>
        <div className='message'>Free shipping available on all orders!</div>
      </div>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo' onClick={handleLogoClick}>
              <img src={logo} alt='logo' />
              <div>
                <h1 onClick={handleLogoClick}>VogueVie</h1>
              </div>
            </div>
            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {navLinks.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) => (navClass.isActive ? 'nav__active' : '')} // To highlight active links
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav__icons'>
            <span className='fav__icon'>
            <i className='ri-heart-3-line'></i>
          <span className='badge'>{totalFavoriteItems}</span>
        </span>
              <span className='cart__icon ' onClick={navigateToCart}>
                <i className='ri-shopping-bag-line'></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  initial={{ marginTop: 0 }}
                  animate={{ marginTop: -20 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=''
                  onClick={toggleProfileActions}
                />

                <div className='profile__actions' ref={profileActionRef} onClick={toggleProfileActions}>
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <Link to='/signup'>Signup</Link>
                      <Link to='/login'>Login</Link>
                      <Link to='/dashboard'>Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className='bags_menu'>
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
