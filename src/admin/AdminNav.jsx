import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import UseAuth from '../custom-hooks/useAuth';
import '../styles/admin-nav.css'

const AdminNav = () => {

    const {currentUser}=UseAuth()

    return <header className='admin__header'>
        <div className="admin__nav-top"></div>
        <Container>
            <div className='admin__nav-wrapper-top'>
                <div className="log">
                <h2>VogueVie</h2>
            </div>
            <div className="search__box">
                <input type="text" placeholder='Search...' />
                <span><i className="ri-search-line"></i></span>
            </div>
            <div className="admin__nav-top-right">
                <span><i className="ri-notification-3-line"></i></span>
                <span><i className="ri-settings-4-line"></i></span>
                <img src={currentUser.photoURL} alt="" />
            </div>
            </div>
        </Container>
    </header>
}

export default AdminNav;
