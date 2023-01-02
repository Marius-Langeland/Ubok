import Icon from '../components/Icons';
import React, {useState} from 'react';
import './menu.scss';

function Menu(props: any){
    let [toggleSettings, setToggleSettings] = useState(false);

    return (
        <section className='menu-section shadow'>
            <span className="background"></span>
            <span className="logo">
                <span className='logo-title'>Ubok</span>
                <span className="description">Curated library of book recommendations</span>
            </span>
            <span className={`menu-button shadow ${toggleSettings ? 'enabled' : ''}`} onClick={() => setToggleSettings((b) => !b)}>
                <Icon type="menu"/>
            </span>

            <div className={`settings ${toggleSettings ? 'enabled' : ''}`}>

            </div>
        </section>
    );
    
}

export default Menu;