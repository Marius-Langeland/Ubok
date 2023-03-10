import React, {useState} from 'react'
import './bookCover.scss'

function BookCover(props: any){
    const template =
    <div onClick={props.onClick} className={`book-cover book-cover-template ${props.type}-book-cover`} id={props.id}>
        <img src="https://cdn.discordapp.com/attachments/1058068137783865465/1059590610434134046/Geezmo_abstract_illustration_fb20c988-0999-4e4f-b881-3d0913ceb89a.png" alt="" />
    </div>

    let work = props.work;

    if(props.template || !work) // Template for when book information does not load
        return template;

    work = work.simplifiedPresentationData;

    switch (props.type) {
        case "weekly":
            return(
                <div onClick={props.onClick} className="book-cover weekly-book-cover">
                    <img className='book-cover' src={work.cover} alt={`The cover of "${work.title}"`} />
                </div>
            );
        
        case "search":
            return(
                <div onClick={props.onClick} className="book-cover search-book-cover">
                    <img className='book-cover' src={work.cover} alt={`The cover of "${work.title}"`} />
                </div>
            );

        case "vote":
            return(
                <div onClick={props.onClick} className="book-cover vote-book-cover">
                    <img className='book-cover' src={work.cover} alt={`The cover of "${work.title}"`} />
                </div>
            )
        
        default:
            return template;
    }
    
    
}

export default BookCover;