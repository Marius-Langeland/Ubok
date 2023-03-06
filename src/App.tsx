import {ReactComponent as Logo} from './logo.svg';
import Cover from './components/BookCover'
import React, {useEffect} from 'react';
import './theme.css';
import './App.scss';

let nextBooks = [1, 2, 3, 4, 5, 6, 7];

function App() {
  return (
    <main>
      <div className="page-logo">
        <Logo className='logo'/>
        <div />
      </div>
      <section className="weekly-book">
        <Cover />
        <span id="weekly-book-header">Ukens bok</span>
        <span id="weekly-book-timer">6d 13t 32m</span>
        <span id="weekly-book-title">Lorem Ipsum</span>
        <p id="weekly-book-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quia soluta eum vero praesentium et magnam fugiat earum. Expedita natus ipsa officia laudantium sapiente voluptatem numquam. Accusantium magnam voluptatem sed.</p>
      </section>

      <section id="next-week-vote">
        <div>
            {nextBooks.map((e, i) => <Cover key={i}/>)}
          </div>
        </section>
    </main>
  );
}

export default App;

