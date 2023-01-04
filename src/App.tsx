import Menu from './sections/Menu';
import React, {useEffect} from 'react';
import Collections from './sections/Collections';
import './App.scss';

function App() {
  // Background scrolling
  useEffect(() => {
    let bg = document.body.querySelector('body>.background') as HTMLElement;
    document.addEventListener('scroll', () => {
      if(bg != null)
        bg.style.top = `-${Math.min(window.scrollY/18, 100)}vh`;
    });
  }, [])

  return (
    <>
      <Menu />
      <span className='gap'></span>
      <Collections />
    </>
  );
}

export default App;

