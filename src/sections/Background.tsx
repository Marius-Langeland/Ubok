import React, {useState, useEffect} from 'react'
import { ReactComponent as SiteLogo } from '../logo.svg';
import './background.scss'

function Background(){
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => setScroll(window.scrollY);
  
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
      <section className="background">
        <span className="background-elements" style={{'filter': `blur(${Math.min(10, scroll / 70)}px)`, 'marginTop': `${Math.max(-(scroll * scroll)*0.001, -500)}px`}}>
          <SiteLogo className='logo'/>
          <div className="background-content">
            <div>818 <br/> Bloggposter</div>
            <div>1037 <br/> Forfattere</div>
            <div>3287 <br/> Bøker</div>
          </div>
        </span>
      </section>
  );
}

export default Background;