import React from 'react';
import '../styles/lookbook.css'
import { Container, Row } from 'reactstrap'
import look1 from '../assets/images/LookBook1.webp'
import look2 from '../assets/images/LookBook3.webp'
import look3 from '../assets/images/LookBook8.webp'
import look4 from '../assets/images/LookBook7.webp'
import look5 from '../assets/images/LookBook4.jpg'
import look6 from '../assets/images/LookBook6.webp'
import look7 from '../assets/images/LookBook9.webp'
import look8 from '../assets/images/LookBook2.webp'


const LookBook = () => {
    return (
        <div className="look__book">
            <Container>
                <Row>
                    <div className="lookbokk__text">Summer inspiration</div>
                    <section className='lookbook1__img'>
                        <img className='look1' src={look1} alt="" />
                        <img className='look2' src={look2} alt="" />
                    </section>
                </Row>
                <Row>
                    <section className='lookbook2__img'>
                        <img className='look3' src={look3} alt="" />
                        <img className='look4' src={look4} alt="" />
                    </section>
                    <section className='lookbook3__img'>
                        <img className='look5' src={look5} alt="" />
                    </section>
                    <section className='lookbook4__img'>
                        <img className='look6' src={look6} alt="" />
                        <img className='look7'src={look7} alt="" />
                        <img className='look8'src={look8} alt="" />
                    </section>
                </Row>
            </Container>
        </div>
    );
}

export default LookBook;
