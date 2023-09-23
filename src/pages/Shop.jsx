import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import ProductsList from '../components/UI/ProductsList';
import useGetData from '../custom-hooks/useGetData';


const Shop = () => {

  const { data: products, loading } = useGetData('products');

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

  const [productShop, setProductShop] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'bag') {
      const filteredProducts = products.filter((item) => item.category === 'bag');
      setProductShop(filteredProducts);
    }

    if (filterValue === 'shoes') {
      const filteredProducts = products.filter((item) => item.category === 'shoes');
      setProductShop(filteredProducts);
    }
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;

    if (sortValue === 'ascending') {
      // Price göre artan sırayla sırala
      const sortedProducts = [...productShop].sort((a, b) => a.price - b.price);
      setProductShop(sortedProducts);
    }

    if (sortValue === 'descending') {
      // Price göre azalan sırayla sırala
      const sortedProducts = [...productShop].sort((a, b) => b.price - a.price);
      setProductShop(sortedProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = products.filter(
      (item) => item.productName.toLowerCase().includes(searchTerm)
    );
    setProductShop(searchedProducts);
  };

  return (
    <Helmet title='Shop'>
      <CommonSection tittle={"Shopping Products"}/>
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
    <Col lg='12'>
      <div style={{ display: 'flex', flexWrap: 'wrap',gap:'10px' }}>
        {loading ? (
          <h5 className='fw-bold'>Loading....</h5>
        ) : (
          <ProductsList data={products} />
        )}
      </div>
    </Col>
  </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productShop.map((product) => (
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