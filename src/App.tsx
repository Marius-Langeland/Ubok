import BookCover from './components/BookCover';
import React, {useEffect, useState} from 'react';
import Menu from './sections/Menu';
import Icon from './components/Icons';
import  "./utils/fetchForrigebok";
import './utils/forrigebokAPI';
import './App.scss';
import { WorksResponse } from './utils/forrigebokAPI';
import API, { Type } from './utils/fetchForrigebok';

const books = {
  weekly: "9788283731354",
  weeklyVote: [
    "9788283731750",
    "9788202765989",
    "9788202445911",
    "9788202761783",
    "9788241960130",
  ],
}

function App() {
  const [weekly, setWeekly] = useState<WorksResponse | undefined>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setWeekly(undefined);
    setError(false);
    setLoading(true);

    API<WorksResponse>(Type.Work, {isbn: books.weekly})
      .then(setWeekly)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
   }, []);

  return (
    <>
      <Menu />
      <span className='gap'></span>
      <section id="motd">
        <BookCover id="weekly-book" work={weekly?.works[0]}/>
        <h3>Ukens bok</h3>
        <span id="timer">6d 3t 24m</span>
        <span id="description">{weekly?.works[0].simplifiedPresentationMetadata.description}</span>
        <span id="title">{weekly?.works[0].simplifiedPresentationMetadata.title ?? "Ukjent bok"}</span>
        <span id="author">{`av ${weekly?.works[0].simplifiedPresentationMetadata.authors[0] ?? "ukjent forfatter"}`}</span>
      </section>
      
      <section id="weekly-vote">
        <span id='vote-text'>Stem på neste ukes bok!</span>
        <span id="vote-timer"><span id="progress" /></span>
        <div id="array">{books.weeklyVote.map((e, i) => <BookCover key={i} work={undefined}/>)}</div>
      </section>

      <footer>

      </footer>
    </>
  );
}

export default App;

