import React, { useState } from 'react';
import Icon from './Icons';
import './component.scss'
import './book-list/list-layout.scss'
import './book-list/grid-layout.scss'

function Book(props: any){
    const [favorite, setFavorite] = useState(props.book.fav);

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