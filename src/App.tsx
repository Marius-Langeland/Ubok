import React, {useState, useEffect} from 'react';
import Icon from './components/Icons'
import Book from './components/Books'
import Tick from './components/Ticks'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Topbar />
      <Filtering />
      <Result layout="list"/>
    </>
  );
}

function Topbar(){
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') ?? 'light'));

  function Logo(){
    return(
      <a className='link-home' href='/'>
        <img src={logo} className='logo' alt='Logo' />
      </a>
    );
  }
  
  function Configs(){
    useEffect(() => {
      const value = localStorage.getItem('theme');
      if(value != null)
        setTheme(JSON.parse(value));
    }, [])

    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme));
      document.body.dataset.theme = theme;
    }, [theme])

    return(
      <span className='config-buttons'>
        <span className='theme-switches'>
          {
            theme == 'dark'
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
        <Configs/>
      </section>
  );
}

function Filtering(){

  function Search(){
    return(
      <div className="search-input">
        <Icon type='search'/>
        <input type="text" name='search-text' className='search-text' placeholder='Search title, author, topic...'/>
      </div>
    );
  }

  function Categories(){
    return(
      <div className="category-input">
        <Icon type='filter_list'/>
        <div className="category-list">
          <Tick text='Non-fiction'/>
          <Tick text='Action'/>
          <Tick text='History'/>
          <Tick text='Drawing'/>
          <Tick text='Autobiography'/>
          <Tick text='Childhood'/>
          <Tick text='School'/>
        </div>
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

function Result(props: any){
  const layout = props.layout === "" ? "" : `layout-${props.layout}`;
  return(
    <section className={`results ${layout}`}>
      <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
      <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
      <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
      <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
      <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
    </section>
  );
}

export default App;

