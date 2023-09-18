import React, { useEffect, useState } from 'react';
import '../styles/lookbook.css'
import { Container, Row } from 'reactstrap'
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import look1 from '../assets/images/LookBook1.webp'
import look2 from '../assets/images/LookBook3.webp'
import look3 from '../assets/images/blueimg.webp'
import look4 from '../assets/images/LookBook7.webp'
import look5 from '../assets/images/Mlouye (1).jpeg'
import look6 from '../assets/images/LookBook6.webp'
import look7 from '../assets/images/LookBook9.webp'
import look8 from '../assets/images/LookBook2.webp'


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
    const [data, setData] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        setData(products);

        const featured = products.filter(product => product.category === 'featured');
        setFeaturedProducts(featured);
    }, []);

    return (
        <div className="look__book">
            <Helmet title={"LookBook"} />
            <Container>
                <Row>
                    <div className="lookbokk__text">Summer inspiration</div>
                    <section className='lookbook1__img'>
                        <img className='look1' src={look1} alt="" />
                        <img className='look2' src={look2} alt="" />
                    </section>
                </Row>
                <Row>
                    <section className='lookbook2__img'>
                        <img className='look3' src={look3} alt="" />
                        <img className='look4' src={look4} alt="" />
                    </section>
                    <section className='lookbook3__img'>
                        <img className='look5' src={look5} alt="" />
                    </section>
                    <section className='lookbook4__img'>
                        <img className='look6' src={look6} alt="" />
                        <img className='look7'src={look7} alt="" />
                        <img className='look8'src={look8} alt="" />
                    </section>
                </Row>
                <Row>
                    <section className='fetured__product'>
                        <h2>Featured</h2>
                    </section>
                    <ProductsList data={featuredProducts} />
                </Row>
            </Container>
        </div>
    );
}

export default LookBook;
