import React, {useState, useEffect} from 'react'
import Icon from '../components/Icons'
import Book from '../components/Books'
import BookPage from './Book-page';

let books = [
    {
      id: 0,
      author: "Jude Combs",
      title: "Quality Design",
      coverSrc: "https://www.adobe.com/express/create/cover/media_1a1c99c9bbc4c5bd26974a96b19b1cdaee9bc866c.jpeg?width=400&format=jpeg&optimize=medium",
      desc: "The quick brown fox",
      published_ddmmyy: [28, 4, 2017],
      fav: true
    },
  ];
  
  function Result(props: any){
    const [layout, setLayout] = useState(JSON.parse(localStorage.getItem('layout') ?? JSON.stringify("layout-grid")));
    const [inspectedBook, setInspectedBook] = useState(0);

    useEffect(() => {
      localStorage.setItem('layout', JSON.stringify(layout));
    }, [layout]);
    
    let bookNodes = books.map((book, i) => <Book inspect={() => setInspectedBook(i)} key={book.id} book={book} />);
  
    let isInspecting = () => (inspectedBook >= 0 && inspectedBook < books.length);

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
            {bookNodes}
        </div>

        <BookPage book={isInspecting() ? books[inspectedBook] : {}} hide={() => setInspectedBook(-1)} hidden={!isInspecting()} />
      </section>
    );
  }

  export default Result;