import Icon from '../components/Icons';
import React, {useEffect, useState} from 'react';
import './menu.scss';

function Menu(props: any){
    return (
        <section className='menu-section shadow'>
            <span className="logo">
                <span className='logo-title'>Ubok</span>
                <span className="description">En kuratert samling av bokanbefalinger</span>
            </span>
            <Icon type="menu" onClick={() => props.toggleMenu}/>
        </section>
    );
}

export default Menu;