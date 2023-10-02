import React, { useState, useEffect } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import ProductsList from '../components/UI/ProductsList';
import useGetData from '../custom-hooks/useGetData';

const Shop = () => {
  const { data: products, loading } = useGetData('products');
  const [filteredProducts, setFilteredProducts] = useState(products);

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

  // Kategoriye göre filtreleme fonksiyonu
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'bag') {
      const filteredProducts = products.filter((item) => item.category === 'bag');
      setFilteredProducts(filteredProducts);
    } else if (filterValue === 'shoes') {
      const filteredProducts = products.filter((item) => item.category === 'shoes');
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  };

  // Qiymete göre filtreleme fonksiyonu
  const handleSort = (e) => {
    const sortValue = e.target.value;

    if (sortValue === 'ascending') {
      // Price göre artan sırayla sırala
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    } else if (sortValue === 'descending') {
      // Price göre azalan sırayla sırala
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setFilteredProducts(sortedProducts);
    } else {
      setFilteredProducts(products);
    }
  };

  // Ada göre filtreleme fonksiyonu
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = products.filter(
      (item) => item.productName.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(searchedProducts);
  };

  return (
    <Helmet title='Shop'>
      <CommonSection tittle={"Shopping Products"} />
      <section className='section__shop'>
        <Container className='container__shop'>
          <Row className='row__shop'>
            <Col lg='3' md='4'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option value='all'>Sort By Category</option>
                  <option value='bag'>Bags</option>
                  <option value='shoes'>Shoes</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select onChange={handleSort}>
                  <option value='default'>Sort By Price</option>
                  <option value='ascending'>Price: Low to High</option>
                  <option value='descending'>Price: High to Low</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='search__box'>
                <input type='text' placeholder='Search...' onChange={handleSearch} />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {loading ? (
                  <h5 className='fw-bold'>Loading....</h5>
                ) : (
                  <ProductsList data={filteredProducts} />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
