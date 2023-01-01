import Icon from '../components/Icons';
import React from 'react';
import './menu.scss';

function Menu(){
    return (
        <section className='menu-section shadow'>
            <span className="background"></span>
            <Icon type="menu" className="menu-button"/>
            <div className='settings'>
                <Icon type='lightbulb'/>
                <Icon type='empty_dashboard'/>
                <Icon type='public'/>
            </div>
            <span className="logo">Ubok</span>
            <span className="profile shadow">
                <span></span>
            </span>
            <div className="description">
                <span>2543</span>
                <span>42</span>
                <span>672</span>
                <span>15</span>
                <span>781</span>
            </div>
        </section>
    );
    
}

export default Menu;