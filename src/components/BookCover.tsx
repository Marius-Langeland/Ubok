import React, {useState} from 'react'
import './bookCover.scss'

function BookCover(props: any){

    if(props.template == true || !props.books)
        return <div className='book-cover book-cover-template' id={props.id}>
            <img src="https://cdn.discordapp.com/attachments/1058068137783865465/1059590610434134046/Geezmo_abstract_illustration_fb20c988-0999-4e4f-b881-3d0913ceb89a.png" alt="" />
        </div>

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