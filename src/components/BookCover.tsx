import React, {useState} from 'react'
import './bookCover.scss'

function BookCover(props: any){

    if(props.template == true || !props.books)
        return <div className='book-cover book-cover-template' id={props.id}>?</div>

    return(
        <div className="book-cover" id={props.id}>
            <img src={props.book.cover} alt="" />
            <div className="book-info">
                <span className="book-author">{props.book.author}</span>
                <span className="book-description">{props.book.description}</span>
                <span className="target-audience">{props.book.targetAudience}</span>
            </div>
        </div>
    );
}

export default BookCover;