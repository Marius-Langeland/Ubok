import React from 'react'
import BookCover from './BookCover'

function Collage(props: any){
    return(
        <div className="collage" id={props.id}>
            <h3>Collage</h3>
            <div className="carousell">
                {props.bookList.map((book : any, i : number) => <BookCover book={book} key={i}/>)}
            </div>
        </div>
    );
}

export default Collage;