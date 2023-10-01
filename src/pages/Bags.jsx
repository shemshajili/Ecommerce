import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import ProductsList from '../components/UI/ProductsList';
import useGetData from '../custom-hooks/useGetData';
import '../styles/bags.css';

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

  const [searchError, setSearchError] = useState('');
  const { category } = useParams(); 
  const { data: allProducts, loading } = useGetData('products');
  const productList = allProducts.filter((product) => product.category === 'bag');
  const [filteredProducts, setFilteredProducts] = useState(productList); // Başlangıçta productList'i göster

  // Ada göre filtreleme fonksiyonu
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = productList.filter(
      (item) => item.productName.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(searchedProducts);

    if (searchedProducts.length === 0) {
      setSearchError('No matching products found!'); 
    } else {
      setSearchError(''); 
    }
  };

  return (
    <Helmet title='Bags'>
      <CommonSection tittle={"Bags"}/>
      <Col lg='6' md='6' >
        <div className='search__box'>
          <input type='text' placeholder='Search...' onChange={handleSearch} />
          <span>
            <i className='ri-search-line'></i>
          </span>
        </div>
        {searchError && <p className="text-danger" style={{ fontSize: '13px', fontWeight:'bold'}}>{searchError}</p>}
      </Col>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {loading ? (
                  <h5 className='fw-bold'>Loading....</h5>
                ) : (
                  <ProductsList data={productList} />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Bags;
