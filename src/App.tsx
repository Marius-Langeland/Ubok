import Menu from './sections/Menu';
import React, {useEffect} from 'react';
import Collections from './sections/Collections';
import './App.scss';

function App() {
    

  return (
    <>
      <Menu />
      <span className='gap'></span>
      <Collections />


    </>
  );
}

export default App;

