import Icon from '../components/Icons';
import React from 'react';
import './menu.scss';

function Menu(){
    return (
        <section className='menu-section shadow'>
            <span className="background"></span>
            <span className="logo">
                Ubok <br />
                <span className="description">Curated library of recommendations</span>
            </span>
            <span className="menu-button shadow">
                <Icon type="menu"/>
            </span>
        </section>
    );
    
}

export default Menu;