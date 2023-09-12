import React from 'react';
import { Container } from 'reactstrap';
import '../../styles/common-section.css'

const CommonSection = ({tittle}) => {
    return <section className="common__section">
        <Container className='text-center'>
            <h1>{tittle}</h1>
        </Container>
    </section>
}
export default CommonSection;
