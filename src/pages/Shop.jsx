import React,{useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap';
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductsList'

const Shop = () => {

    const [productsData,setProductsData]=useState(products)
    const handleFilter= e=>{
        const filterVale=e.target.value
        if(filterVale==='bags'){
            const filteredProducts=products.filter(item=> item.category==='bags')

            setProductsData(filteredProducts)
        }
    }
    return (
        <Helmet title='Shop'>
        <CommonSection tittle='Products'/>
        <section>
            <Container>
                <Row>
                    <Col lg='3' md='4'>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                                <option>Filter By Category</option>
                                <option value="bags">Bags</option>
                                <option value="shoes">Shoes</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                            <select >
                                <option>Sort By Category</option>
                                <option value="asdending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="search__box">
                            <input type='text' placeholder='Search......' />
                            <span><i className="ri-search-line"></i></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    {
                        productsData.length===0? <h1>No products are found!</h1>:<ProductList data={productsData}/>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
    )
}

export default Shop;
