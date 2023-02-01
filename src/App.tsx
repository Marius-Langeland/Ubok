import Menu from './sections/Menu';
import React, {useEffect} from 'react';
import './App.scss';
import BookCover from './components/BookCover';

function App() {
  return (
    <>
      <Menu />
      <span className='gap'></span>
      <main>
        <section id="motd">
          <BookCover id="book-of-the-week"/>
          <div id="collection-of-the-week">
              
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

