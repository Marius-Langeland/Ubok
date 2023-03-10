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

const collections = {

}

function App() {
  //#region Weekly book hooks
  const [weekly, setWeekly] = useState<WorksResponse | undefined>(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Not necessary if useEffect is on mount
    //setWeekly(undefined);
    //setError(false);
    //setLoading(true);

    API<WorksResponse>(Type.Work, {isbn: books.weekly})
      .then(setWeekly)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
   }, []);
   //#endregion

  //#region Search book hooks
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState<WorksResponse | undefined>(undefined)
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchError, setSearchError] = useState(false)

  useEffect(() => {
    setSearch(undefined);
    setSearchLoading(true);
    setSearchError(false);

    API<WorksResponse>(Type.Work, {query: searchQuery})
      .then(setSearch)
      .catch(() => setSearchError(true))
      .finally(() => setSearchLoading(false));
   }, [searchQuery]);

  //#endregion
   
  //#region Collection search
  const [collections, setCollections] = useState<{}>();
  //#endregion

  return (
    <>
      <Menu />
      <span className='gap'></span>

      <section id="motd">
        <BookCover type="weekly" id="weekly-book" work={weekly?.works[0]}/>
        <h3>Ukens bok</h3>
        <span id="timer">6d 3t 24m</span>
        <span id="description">{weekly?.works[0].simplifiedPresentationMetadata.description}</span>
        <span id="title">{weekly?.works[0].simplifiedPresentationMetadata.title ?? "Ukjent bok"}</span>
        <span id="author">{`av ${weekly?.works[0].simplifiedPresentationMetadata.authors[0] ?? "ukjent forfatter"}`}</span>
      </section>
      
      <section id="weekly-vote">
        <span id='vote-text'>Stem på neste ukes bok!</span>
        <Icon type="hourglass_full"/>
        <span id="vote-timer"><span id="progress" /></span>
        <div id="array">{books.weeklyVote.map((e, i) => <BookCover type="vote" key={i} work={undefined}/>)}</div>
      </section>

      <section id="search">
        <div id="search-form">
          <Icon type="search"/>
          <form action="" onSubmit={(e) => {e.preventDefault(); setSearchQuery(e.currentTarget.value)}}>
            <input type="text" name="seach-bar" id="search-bar" placeholder='Søk etter noe spesielt'/>
          </form>
          <span id="filter"><Icon type="filter_list"/></span>
          <span id="clr"/>
        </div>

        <div id="search-result">
          {search?.works.map((e, i) => <BookCover type="search" key={i} work={e}/>)}
        </div>
      </section>

      <footer>

      </footer>
    </>
  );
}

export default App;

