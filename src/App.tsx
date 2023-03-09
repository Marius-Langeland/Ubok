import BookCover from './components/BookCover';
import React, {useEffect, useState} from 'react';
import Menu from './sections/Menu';
import Icon from './components/Icons';
import  "./utils/fetchForrigebok";
import './utils/forrigebokAPI';
import './App.scss';
import { WorksResponse } from './utils/forrigebokAPI';
import API, { Type } from './utils/fetchForrigebok';

function App() {
  const [weekly, setWeekly] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setWeekly({});
    setError(false);
    setLoading(true);


    API<WorksResponse>(Type.Work, {isbn: "9788283731354"})
      .then(setWeekly)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Menu />
      <span className='gap'></span>
      <section id="motd">
        <BookCover id="weekly-book"/>
        <h3>Ukens bok</h3>
        <span id="timer">6d 3t 24m</span>
        <span id="title">Title auf gaufmenchinnen</span>
        <span id="author">av Author von Bismarch</span>
      </section>
      
      <section id="weekly-vote">

      </section>
    </>
  );
}

export default App;

