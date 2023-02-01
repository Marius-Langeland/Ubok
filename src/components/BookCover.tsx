import React, {useState} from 'react'
import Api from '../utils/fetchForrigebok'

function BookCover(props: any){
    if(props.book == undefined)
        return <div className='book-cover' id={props.id}></div>

    const [book, setBook] = useState(Api({
        query: "978-82-419-6013-0",
        limit: 1,
    }));

    const [readalikes, setReadalikes] = useState(Api({
        isbn: props.isbn,
        limit: 3,
    }))

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