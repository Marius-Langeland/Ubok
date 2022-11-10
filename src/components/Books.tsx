import React, { useState } from 'react';
import Icon from './Icons';

function Book(props: any){
    const [favorite, setFavorite] = useState(props.book.fav);

    return(
      <span className="book" id={props.book.title}>
              <img onClick={props.inspect} src={props.book.coverSrc} alt={`${props.book.title} by ${props.book.author}`} />
              <div>
                <div className="book-title-author">
                  <span onClick={props.inspect} className="book-title">{props.book.title}</span>
                  <span> by <span onClick={props.inspect} className="book-author">{props.book.author}</span>
                  </span>
                </div>
                <div className="book-icons">
                  <Icon onClick={() => setFavorite(!favorite)} toggle={favorite} type='favorite'/>
                  <Icon type="delete"/>
                </div>
                <hr />
                <span className="book-description">{props.book.desc}</span>
              </div>
      </span>
    );
}

export default Book;