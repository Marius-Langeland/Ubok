import React, { useState } from 'react';
import Icon from './Icons';
import './book.scss'

function Book(props: any){
    const [favorite, setFavorite] = useState(props.book.fav);

    return(
      <span className="book">
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
    
    return(
      <span className="book">
        <img onClick={props.inspect} src={props.book.coverSrc} alt={`${props.book.title} by ${props.book.author}`} />
          <div className="book-title-author">
            <span onClick={props.inspect} className="book-title">{props.book.title}</span>
              <span> by <span onClick={props.inspect} className="book-author">{props.book.author}</span>
            </span>
          </div>
          <div className="book-icons">
            <Icon onClick={() => setFavorite(!favorite)} toggle={favorite} type='favorite'/>
            <Icon type="delete"/>
          </div>
          {
            props.book.desc != undefined
            ? <>
                <span className="book-description">{props.book.desc}
                  <div className="book-description-bg"></div>
                </span>
              </>
            : <></>
          }
      </span>
    );

    
}

export default Book;