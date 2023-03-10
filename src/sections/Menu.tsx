import Icon from '../components/Icons';
import React, {useEffect, useState} from 'react';
import './menu.scss';

function Menu(props: any){
    const [menu, setMenu] = useState(false);

    return (
        <section className='menu-section shadow'>
            <span className="logo">
                <span className='logo-title'>Ubok</span>
                <span className="description">En kuratert samling av bokanbefalinger</span>
            </span>
            <Icon type="clear_all" onClick={() => setMenu(!menu)}/>
            {!menu ? <></> : 
                <>

                </>
            }
        </section>
    );
}

export default Menu;