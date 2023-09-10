import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';

const Shoes = () => {

    const [shoesProducts, setShoesProducts] = useState([]);
    
    useEffect(() => {
        const filteredProducts = products.filter(
            (item) => item.category === 'shoes'
        );
        setShoesProducts(filteredProducts)
    }, []);

    return (
        <section>
            <Container>
                <div style={{ borderBottom: '1px solid gray', marginBottom: '20px' }}></div>
                <Row>
                    <Col lg='12' className='text-center' style={{ marginTop: '50px' }}>
                        <h2 className="section__title">Shoes</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginBottom: '20px' }}>
                    </Col>
                </Row>
                <Row>
                    <ProductsList data={shoesProducts}/>
                </Row>
            </Container>
        </section>
    )
}

export default Shoes;
