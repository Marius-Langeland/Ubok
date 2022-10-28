import React, { useState, useEffect } from 'react';
import Icon from './Icons';

interface IBook{
    author: string;
    title: string;
    coverURL: string;
    desc: string;

    layout? : string;
}

function Book(props: IBook){
    const [favorite, setFavorite] = useState(false);

    return(
      <span className="book" id={props.title}>
              <img src={props.coverURL} alt={`${props.title} by ${props.author}`} />
              <div>
                <div className="book-title-author">
                  <span className="book-title">{props.title}</span>
                  <span className="book-author">by {props.author}</span>
                </div>
                <span className="book-description">Description: <br /> {props.desc}</span>
                <div className="book-icons">
                  <Icon onClick={() => setFavorite(!favorite)} toggle={favorite} type='favorite'/>
                </div>
              </div>
      </span>
    );
}

export default Book;