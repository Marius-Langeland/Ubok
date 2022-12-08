import React, { useState } from 'react';
import Icon from './Icons';
import './book.scss'

function Book(props: any){
    const [favorite, setFavorite] = useState(props.book.fav);

    if(!props.visible)
      return <span className='book'></span>;

    return(
      <span className="book visible">
        <img className='book-cover' onClick={props.inspect} src={props.book.coverSrc} alt={`'${props.book.title}' by ${props.book.author}`} />
        <div className="book-metadata">
          <span className="book-title">{props.book.title}</span>
          <span> by </span>
          <span className="book-author">{props.book.author}</span>
        </div>
        <div className="book-actions">
          <Icon type='favorite' />
          <Icon type="delete"/>
        </div>
      </span>
    );
}

export default Book;