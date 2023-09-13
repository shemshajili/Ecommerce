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
        const filterValue=e.target.value
        if(filterValue==='bag'){
            const filteredProducts=products.filter(item=> item.category==='bag')

            setProductsData(filteredProducts)
        }

        if(filterValue==='shoes'){
            const filteredProducts=products.filter(item=> item.category==='shoes')

            setProductsData(filteredProducts)
        }
    }

    const handleSearch = e=>{
        const searchTerm =e.target.value

        const searchedProducts =products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }

    return (
        <Helmet title='Shop'>
        <CommonSection tittle='Products'/>
        <section className='section__shop'>
            <Container className='container__shop'>
                <Row className='row__shop'>
                    <Col lg='3' md='4'>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                                <option>Filter By Category</option>
                                <option value="bag">Bags</option>
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
                            <input type='text' placeholder='Search......' onChange={handleSearch} />
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
                        productsData.length===0? <h1 className='text-center fs-4'>No products are found!</h1>:<ProductList data={productsData}/>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
    )
}

export default Shop;
