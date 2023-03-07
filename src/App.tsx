import BookCover from './components/BookCover';
import React, {useEffect, useState} from 'react';
import Menu from './sections/Menu';
import Icon from './components/Icons';
import  "./utils/fetchForrigebok";
import './utils/forrigebokAPI';
import './App.scss';
import { WorksResponse } from './utils/forrigebokAPI';
import { forrigebokFetcher, Type } from './utils/fetchForrigebok';

function App() {

  const [weekly, setWeekly] = useState();

  //let weeklyBookPromise: Promise<WorksResponse> = forrigebokFetcher(Type.Work, {
  //  isbn: "9788283731354"
  //});

  return (
    <>
      <Menu />
      <span className='gap'></span>
      <section id="motd">
        <BookCover id="weekly-book"/>
        <h3>Ukens bok</h3>
        <span id="timer">6d 3t 24m</span>
        <span id="title">Title</span>
        <span id="author">av Author von Bismarch</span>
      </section>
      
      <section id="weekly-vote">

      </section>
    </>
  );
}

export default App;

