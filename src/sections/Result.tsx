import React, {useState, useEffect} from 'react'
import Icon from '../components/Icons'
import Book from '../components/Books'

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
  
  function Result(){
    const [layout, setLayout] = useState(JSON.parse(localStorage.getItem('layout') ?? JSON.stringify("layout-grid")));
  
    useEffect(() => {
      localStorage.setItem('layout', JSON.stringify(layout));
    }, [layout]);
    
    let bookNodes = books.map(book => <Book key={book.id} book={book} />);
  
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
      </section>
    );
  }

  export default Result;