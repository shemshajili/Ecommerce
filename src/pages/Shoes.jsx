import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import ProductsList from '../components/UI/ProductsList';
import useGetData from '../custom-hooks/useGetData';
import '../styles/bags.css';

const Shoes = () => {
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

  const { category } = useParams(); 

  const { data: allProducts, loading } = useGetData('products');

  const productList = allProducts.filter((product) => product.category === 'shoes');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

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

  // Ada göre filtreleme fonksiyonu
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = allProducts.filter(
      (item) => item.productName.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(searchedProducts);
  };

  // Fiyata göre filtreleme fonksiyonu
  const handleSort = (e) => {
    const sortValue = e.target.value;

    if (sortValue === 'ascending') {
      // Fiyata göre artan sırayla sırala
      const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    } else if (sortValue === 'descending') {
      // Fiyata göre azalan sırayla sırala
      const sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      setFilteredProducts(sortedProducts);
    }
  };

  // Sezona göre filtreleme fonksiyonu
  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === 'winter') {
      const winterProducts = allProducts.filter((item) => item.season === 'winter');
      setFilteredProducts(winterProducts);
    } else if (filterValue === 'summer') {
      const summerProducts = allProducts.filter((item) => item.season === 'summer');
      setFilteredProducts(summerProducts);
    } else {
      // Tüm ürünleri göstermek için filtreleme yapma
      setFilteredProducts(productList);
    }
  };

  return (
    <Helmet title='Shoes'>
      <CommonSection tittle={"Shoes"}/>
      <section className='section__shop'>
        <Container className='container__shop'>
          <Row className='row__shop'>
            <Col lg='3' md='4'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option value='default'>Sort By Season</option>
                  <option value='summer'>Summer</option>
                  <option value='winter'>Winter</option>
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

export default Shoes;
