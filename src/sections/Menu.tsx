import Icon from '../components/Icons';
import React, {useEffect, useState} from 'react';
import './menu.scss';

function Menu(props: any){
    let [toggleSettings, setToggleSettings] = useState(false);

    useEffect(() => {
        document.body.className = toggleSettings ? 'menu-opened' : '';
    }, [toggleSettings])

    return (
        <section className='menu-section shadow'>
            <span className="logo">
                <span className='logo-title'>Ubok</span>
                <span className="description">En kuratert samling av bokanbefalinger</span>
            </span>
        </section>
    );
}

export default Menu;