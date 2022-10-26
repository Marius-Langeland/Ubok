import React, { useState, useEffect } from 'react';
import Icon from './Icons';

interface IBook{
    author: string;
    title: string;
    coverURL: string;
    desc: string;

    displayMode?: string,
}

function Book(props: IBook){
    const [favorite, setFavorite] = useState(false);
  
    let toggleFavorite = () => {
      setFavorite((prev) => !prev);
    }

    return(
      <span className="book" id={props.title}>
        <img src={props.coverURL} alt={`${props.title} by ${props.author}`} />
        <span className="book-author">{`${props.author}'s`}</span>
        <span className="book-title">{props.title}</span>
        <p className="book-description">{props.desc}</p>
        <div className="book-buttons">
          <Icon onClick={toggleFavorite} toggle={favorite} type='favorite'/>
        </div>
      </span>
    );
}

export default Book;