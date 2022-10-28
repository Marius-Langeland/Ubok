import React, {useState, useEffect} from 'react';
import Icon from './components/Icons'
import Book from './components/Books'
import Tick from './components/Ticks'
import { ReactComponent as SiteLogo } from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Topbar />
      <Filtering />
      <Result />
    </>
  );
}

function Topbar(){

  function Logo(){
    return(
      <a className='link-home' href='/'>
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

function Result(){
  const [layout, setLayout] = useState(JSON.parse(localStorage.getItem('layout') ?? JSON.stringify("layout-grid")))

  useEffect(() => {
    localStorage.setItem('layout', JSON.stringify(layout));
  }, [layout]);

  return(
    <section className="filter-results">
      <div className="display-mode">
        {
          layout === 'layout-list'
          ? <Icon type='density_medium' onClick={() => setLayout('layout-grid')} />
          : <Icon type='dataset' onClick={() => setLayout('layout-list')}/>
        }
      </div>
      <div className={`results ${layout}`}>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
        <Book author='Frank Herbert' title='Dune' coverURL='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217' desc='lorem ipsum dolor sit amet'/>
      </div>
    </section>
  );
}

export default App;

