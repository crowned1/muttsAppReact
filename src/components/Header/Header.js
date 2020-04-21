import React, { Component } from 'react';
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar'
import HeaderMain from '../HeaderMain/HeaderMain'
import './Header.css'

function Header({clickedChat}) {
    // console.log(props)
    return (
        <header>
            <HeaderSidebar />
            <HeaderMain {...clickedChat} />
        </header>
    );
}

export default Header;