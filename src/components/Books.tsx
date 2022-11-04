import React, { useState } from 'react';
import Icon from './Icons';

function Book(props: any){
    const [favorite, setFavorite] = useState(props.book.fav);

    return(
      <span className="book" id={props.book.title} onClick={(e) => {if(e.target == e.currentTarget) props.inspect();}}>
              <img onClick={props.inspect} src={props.book.coverSrc} alt={`${props.book.title} by ${props.book.author}`} />
              <div>
                <div className="book-title-author">
                  <span onClick={props.inspect} className="book-title">{props.book.title}</span>
                  <span onClick={props.inspect} className="book-author"> by {props.book.author}</span>
                </div>
                <span className="book-description">Description: <br /> {props.book.desc}</span>
                <div className="book-icons">
                  <Icon onClick={() => setFavorite(!favorite)} toggle={favorite} type='favorite'/>
                </div>
              </div>
      </span>
    );
}

export default Book;