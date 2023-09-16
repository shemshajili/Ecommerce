import React, {useEffect,useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col} from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import '../styles/shoes.css'

const Shoes = () => {

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
//CATEGORY SHOES
    const [data1,setData] = useState([]);
    const [shoesProducts, setShoesProducts] = useState([]);

      useEffect(() => {
      setData(products);

      const shoes = products.filter(product => product.category === 'shoes');
      setShoesProducts(shoes);
  }, []);

  //CATEGORY SHOES HOME
    const [data,setData1] = useState([]);
    const [shoesHomeProducts, setShoesHomeProducts] = useState([]);

         useEffect(() => {
         setData1(products);

      const shoesHome = products.filter(product => product.category === 'shoesHome');
      setShoesHomeProducts(shoesHome);
  }, []);

    return <Helmet title='Shoes'>
    <CommonSection tittle={"Shoes"}/>
    <section>
        <Container>
            <Row>
                <Col>
                <div className="product-list-container">
                <ProductsList data={shoesHomeProducts} />
                <ProductsList data={shoesProducts} />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </Helmet>
}

export default Shoes;
