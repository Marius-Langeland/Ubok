import Icon from '../components/Icons';
import React from 'react';
import './menu.scss';

function Menu(){
    return (
        <section className='menu-section'>
            <Icon type="menu" className="menu-button"/>
            <div className='settings'>
                <Icon type='lightbulb'/>
                <Icon type='empty_dashboard'/>
                <Icon type='public'/>
                <Icon type='info'/>
            </div>
            <span className="logo">Ubok</span>
            <span className="profile shadow">Profile</span>
            <div className="description">
                <span>2543</span>
                <span>42</span>
                <span>672</span>
                <span>15</span>
                <span>781</span>
            </div>
            <div className="buttons">
                <span className='shadow'></span>
                <span className='shadow'></span>
            </div>
        </section>
    );
    
}

export default Menu;