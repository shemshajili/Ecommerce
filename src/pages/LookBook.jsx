import React, { useEffect } from 'react';
import '../styles/lookbook.css'
import { Container, Row,Col } from 'reactstrap'
import ProductsList from '../components/UI/ProductsList';
import useGetData from '../custom-hooks/useGetData';
import Helmet from '../components/Helmet/Helmet';
import look1 from '../assets/images/LookBook1.webp'
import look2 from '../assets/images/LookBook3.webp'
import look3 from '../assets/images/blueimg.webp'
import look4 from '../assets/images/LookBook7.webp'
import look5 from '../assets/images/Mlouye (1).jpeg'
import look6 from '../assets/images/LookBook6.webp'
import look7 from '../assets/images/LookBook9.webp'
import look8 from '../assets/images/LookBook2.webp'
import kind from '../assets/images/kind.webp';
import kind2 from '../assets/images/Brand..jpeg';
import { Link } from 'react-router-dom';


const LookBook = () => {
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

    const { data: products } = useGetData('products');



    return (
        <div className="look__book">
            <Helmet title={"LookBook"} />
            <Container>
                <Row>
                    <div className="lookbokk__text">Summer inspiration</div>
                    <section className='lookbook1__img'>
                        <Link to={'/shop'}><img className='look1' src={look1} alt="" /></Link>
                        <Link to={'/shop'}><img className='look2' src={look2} alt="" /></Link>
                    </section>
                </Row>
                <Row>
                    <section className='lookbook2__img'>
                        <Link to={'/shop'}><img className='look3' src={look3} alt="" /></Link>
                        <Link to={'/shop'}><img className='look4' src={look4} alt="" /></Link>
                    </section>
                    <section className='lookbook3__img'>
                        <Link to={'/shop'}><img className='look5' src={look5} alt="" /></Link>
                    </section>
                    <section className='lookbook4__img'>
                        <Link to={'/shop'}><img className='look6' src={look6} alt="" /></Link>
                        <Link to={'/shop'}><img className='look7'src={look7} alt="" /></Link>
                        <Link to={'/shop'}><img className='look8'src={look8} alt="" /></Link>
                    </section>
                </Row>
                <Row>
                { <Col className='d-flex'>
              <div className='kindof'>
                <img src={kind} alt='' />
                <h2>A new kind of bag.</h2>
                <h4>
                  Unexpected shapes with smart details, functionality, a new
                  luxury feel with a contemporary price point.
                </h4>
              </div>
              <div className='kindof2'>
                <img src={kind2} alt='' />
                <h2>A new kind of shoes</h2>
                <h4>
                  Unexpected shapes with smart details, functionality, a new
                  luxury feel with a contemporary price point.
                </h4>
              </div>
            </Col> }
                </Row>
                {/* <section>
                <video controls poster="your-poster-image.jpg"
       id="video"
       className='homeVideo'>
      <source src="/videos/videos3.mp4" type="video/mp4" />
      Video not supported
      </video>
                </section> */}
            </Container>
        </div>
    );
}

export default LookBook;
