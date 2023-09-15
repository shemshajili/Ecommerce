import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const SignUp = () => {

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [file,setFile]=useState(null)

    return <Helmet title='SignUp'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold fs-4'>SignUp</h3>

                        <Form className='auth__form'>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Username'
                                 value={email} onChange={e=>setEmail((e).target.value)} />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email'
                                 value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="password" placeholder='Enter your password'
                                value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="file"
                                onChange={(e)=>setFile(e.target.files[0])} />
                            </FormGroup>

                            <button type='submit' className='buy__btn auth__btn'>Create an Account</button>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
}

export default SignUp;
