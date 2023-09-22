import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductsList';

const Shop = () => {
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

  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'bag') {
      const filteredProducts = products.filter((item) => item.category === 'bag');
      setProductData(filteredProducts);
    }

    if (filterValue === 'shoes') {
      const filteredProducts = products.filter((item) => item.category === 'shoes');
      setProductData(filteredProducts);
    }
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;

    if (sortValue === 'ascending') {
      // Fiyata göre artan sırayla sırala
      const sortedProducts = [...productData].sort((a, b) => a.price - b.price);
      setProductData(sortedProducts);
    }

    if (sortValue === 'descending') {
      // Fiyata göre azalan sırayla sırala
      const sortedProducts = [...productData].sort((a, b) => b.price - a.price);
      setProductData(sortedProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = products.filter(
      (item) => item.productName.toLowerCase().includes(searchTerm)
    );
    setProductData(searchedProducts);
  };

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />
      <section className='section__shop'>
        <Container className='container__shop'>
          <Row className='row__shop'>
            <Col lg='3' md='4'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option value='all'>All Products</option>
                  <option value='bag'>Bags</option>
                  <option value='shoes'>Shoes</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select onChange={handleSort}>
                  <option value='default'>Sort By</option>
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
            {productData.length === 0 ? (
              <h1 className='text-center fs-4'>No products found!</h1>
            ) : (
              <ProductList data={productData} />
            )}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productData.map((product) => (
              <Col lg='3' md='4' key={product.id}>
                <Link to={`/product-details/${product.id}`}>
                  <div className='product-card'>
                    <img src={product.imgUrl} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <p>${product.price}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;