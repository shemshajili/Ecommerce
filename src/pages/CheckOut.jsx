import React from 'react';
import {Container,Row,Col,Form,FormGroup} from "reactstrap"
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'

const CheckOut = () => {
    return <Helmet title="CheckOut">
        <CommonSection tittle={"Checkout"}/>
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <h6 className='mb-4 fw-bold'>Billing Information</h6>
                        <Form>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Enter your name' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="number" placeholder='Phone number' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Street adress' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='City' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Postal code' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Country' />
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col lg='4'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default CheckOut;
