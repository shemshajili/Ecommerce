import React, {useRef,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './Header.css';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/usericon1.png';
import { motion } from 'framer-motion';

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
    path: 'shoes',
    display: 'Shoes',
  },
  {
    path: 'bags',
    display: 'Bags',
  },
];

const handleLogoClick = () => {
  window.location.href = '/';
};
const Header = () => {

const headerRef =useRef(null)

const menuRef=useRef(null)

  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      } else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return ()=> window.removeEventListener("scroll",stickyHeaderFunc)
  });

  const menuToggle=()=>menuRef.current.classList.toggle('nav__active')

  return (
    
    <header className='header' ref={headerRef}>
        <div className="containerNav">
             <div className="message">Free shipping available on all orders!</div>
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
                      className={(navClass)=>navClass.isActive?'nav__active' :''}// To highlight active links
                      >{item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav__icons'>
              <span className='fav__icon'>
                <i className='ri-heart-3-line'></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart__icon'>
                <i className='ri-shopping-bag-line'></i>
                <span className='badge'>1</span>
              </span>
              <span>
                <motion.img
                whileTap={{ scale: 1.2 }}
                initial={{ marginTop: 0 }}
                animate={{ marginTop: -20 }} src={userIcon} alt='' />
              </span>
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
