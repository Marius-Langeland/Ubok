import React, {useState} from 'react';
import logo from './logo.svg';
import './themes/lighttheme.css'
import './App.css';

// #region OBJECTS

interface IconType{
  type: string;
  toggle?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}
function Icon(props : IconType){
  return (
      <span onClick={props.onClick} 
            className={`material-symbols-outlined ${props.type}${props.toggle ? " enabled" : ""} `}>
        {props.type}
      </span>
  );
}

interface Book{
  author: string;
  title: string;
  coversrc: string;
  desc: string;
}
function Book(props: Book){
  const [favorite, setFavorite] = useState(false);

  let toggleFavorite = () => {
    setFavorite((prev) => !prev);
  }

  return(
    <span className="book" id={props.title}>
      <img src={props.coversrc} alt={`${props.title} by ${props.author}`} />
      <span className="book-author">{`${props.author}'s`}</span>
      <span className="book-title">{props.title}</span>
      <p className="book-description">{props.desc}</p>
      <div className="book-buttons">
        <Icon onClick={toggleFavorite} toggle={favorite} type='favorite'/>
      </div>
    </span>
  );
}

interface Category{
  text : string;
}
function Tick(props: Category){
  return(
    <span className="tick">
      <Icon type='remove'/>
      <span className="category">{props.text}</span>
    </span>
  );
}

// #endregion

// #region APP

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
        <img src={logo} className='logo' alt='Logo' />
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
        <Tick text='Non-fiction'/>
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
    <section className="results">
      <Book author='Frank Herbert' title='Dune' coversrc='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
    </section>
  );
}

// #endregion

export default App;

