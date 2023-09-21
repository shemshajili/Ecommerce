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

  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'bag') {
      const filteredProducts = products.filter((item) => item.category === 'bag');
      setProductsData(filteredProducts);
    }

    if (filterValue === 'shoes') {
      const filteredProducts = products.filter((item) => item.category === 'shoes');
      setProductsData(filteredProducts);
    }
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;

    if (sortValue === 'ascending') {
      // Qiymete gore artan sırayla sıralyla siralayir 
      const sortedProducts = [...productsData].sort((a, b) => a.price - b.price);
      setProductsData(sortedProducts);
    }

    if (sortValue === 'descending') {
      //  Qiymete gore azalan sırayla sıralayir
      const sortedProducts = [...productsData].sort((a, b) => b.price - a.price);
      setProductsData(sortedProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(
      (item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title='Shop'>
      <CommonSection tittle='Products' />
      <section className='section__shop'>
        <Container className='container__shop'>
          <Row className='row__shop'>
            <Col lg='3' md='4'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value='bag'>Bags</option>
                  <option value='shoes'>Shoes</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select onChange={handleSort}>
                  <option>Sort By Price</option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='search__box'>
                <input type='text' placeholder='Search......' onChange={handleSearch} />
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
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.map((product) => (
              <Col lg='3' md='4' key={product.id}>
                <Link to={`/product-details/${product.id}`}>
                  <div className='product-card'>
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
