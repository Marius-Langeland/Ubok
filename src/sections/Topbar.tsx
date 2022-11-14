import React, {useState, useEffect} from 'react'
import Icon from '../components/Icons'
import { ReactComponent as SiteLogo } from '../logo.svg';

function Topbar(){

    function Logo(){
      return(
        <a className='link-home' href=''>
          <SiteLogo className='logo'/>
        </a>
      );
    }
    
    function Configs(){
      const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') ?? JSON.stringify('light')));
  
      useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
        document.body.dataset.theme = theme;
      }, [theme])
  
      return(
        <span className='config-buttons'>
          <span className='theme-switches'>
            {
              theme === 'dark'
              ?<Icon type='dark_mode' onClick={() => setTheme('light')}/>
              :<Icon type='light_mode' onClick={() => setTheme('dark')}/>
            }
          </span>
          <Icon type='language'/>
          <Icon type='person'/>
        </span>
      );
    }
  
    return(
        <section className="top-bar">
          <Logo/>
          <div className="banner">
            Bøker for ungdom. Blogg, bokbase og leselyst!
            <br />
            Ubok-arkivet inneholder 3287 bøker, 1037 forfattere og 818 bloggposter.
          </div>
          <Configs/>
        </section>
    );
  }

  export default Topbar;