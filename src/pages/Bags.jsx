import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import '../styles/bags.css'

const Bags = () => {
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

    const [data1, setData] = useState([]);
    const [bagProducts, setBagsProducts] = useState([]);

    useEffect(() => {
        setData(products);

        const bags = products.filter(product => product.category === 'bag');
        setBagsProducts(bags);
    }, []);

    const [data, setData1] = useState([]);
    const [bagsHomeProducts, setBagsHomeProducts] = useState([]);

    useEffect(() => {
        setData1(products);

        const bagsHome = products.filter(product => product.category === 'bagHomme');
        setBagsHomeProducts(bagsHome);
    }, []);

    return (
        <Helmet title='Bags'>
            <CommonSection tittle={"Bags"} />
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="product-list-container">
                                <ProductsList data={bagsHomeProducts} />
                                <ProductsList data={bagProducts} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Bags;
