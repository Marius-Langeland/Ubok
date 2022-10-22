import React, { ReactPropTypes } from 'react';

interface IconType{type: string}
function Icon(props : IconType){
  return <span className={`material-symbols-outlined ${props.type}`}>{props.type}</span>;
}

function App() {
  return (
    <>
        <Navbar />
        <Filtering />
        <Result />
    </>
  );
}

function Navbar(){

  function Logo(){
    return(
      <a className='link-home' href=''>
        <img className='logo' alt='Logo' />
      </a>
    );
  }
  function Configs(){
    return(
      <span className='config-buttons'>
        <span className='theme-switches'>
          <Icon type='dark_mode'/>
          <Icon type='light_mode'/>
        </span>
        <Icon type='language'/>
        <Icon type='person'/>
      </span>
    );
  }

  return(
      <section className="top-bar">
        <Logo/>
        <Configs/>
      </section>
  );
}

function Filtering(){

  function Search(){
    return(
      <div className="search">
        <Icon type='search'/>
        <input type="text" name='book-name' className='book-name' placeholder='Search title, author, topic...'/>
      </div>
    );
  }

  function Categories(){
    return(
      <div className="categories">
        <Icon type='filter_list'/>
      </div>
    );
  }

  return(
    <section className="filtering">
      <Search/>
      <Categories/>
    </section>
  );
}

function Result(){
  return(
    <>
    </>
  );
}

export default App;

