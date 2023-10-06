import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaDollarSign, FaShoppingCart, FaBoxes, FaUsers } from 'react-icons/fa'; // FontAwesome simgeleri
import '../styles/dashboard.css';
import useGetData from '../custom-hooks/useGetData';

const Dashboard = () => {
    const { data: products } = useGetData('products');
    const { data: users } = useGetData('users');

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="dashboard__box">
                            <FaDollarSign className="dashboard__icon" />
                            <h5>Total Sales</h5>
                            <span>$7890</span>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className="dashboard__box">
                            <FaShoppingCart className="dashboard__icon" />
                            <h5>Orders</h5>
                            <span>7890</span>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className="dashboard__box">
                            <FaBoxes className="dashboard__icon" />
                            <h5>Total Products</h5>
                            <span>{products.length}</span>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className="dashboard__box">
                            <FaUsers className="dashboard__icon" />
                            <h5>Total Users</h5>
                            <span>{users.length}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Dashboard;
