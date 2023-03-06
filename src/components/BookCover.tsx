import React, {useState} from 'react'

function BookCover(props: any){

    if(props.work == undefined && false)
        return <div className='book-cover-error'></div>
    
    return(
        <>
            <div className="book-cover">
                <div className="book-cover-img" style={{aspectRatio: '2/3'}} />
                
            </div>
        </>
    );
    
    return(
        <div className="book-cover" id={props.work.id}>
            <img src={props.work.simplifiedPresentationMetadata.coverImage ?? 'none'} alt={`The cover of ${props.work.simplifiedPresentationMetadata.title}`} />
            <div className="book-info">
                <span className="book-author">{props.work.simplifiedPresentationMetadata.authors}</span>
                <span className="book-description">{props.work.simplifiedPresentationMetadata.description}</span>
                <span className="book-genre">
                    {props.work.simplifiedPresentationMetadata.genre.map((e: any, i: number) => <span key={i}>{e}</span>)}
                </span>
            </div>
        </div>
    );
}

export default BookCover;