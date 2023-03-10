import React, {useState} from 'react'
import './bookCover.scss'

function BookCover(props: any){
    const work = props.work;

    if(props.template || !work)
        return <div onClick={props.onClick} className='book-cover book-cover-template' id={props.id}>
            <img src="https://cdn.discordapp.com/attachments/1058068137783865465/1059590610434134046/Geezmo_abstract_illustration_fb20c988-0999-4e4f-b881-3d0913ceb89a.png" alt="" />
        </div>

    return(
        <div onClick={props.onClick} className="book-cover">
            <img className='book-cover' src={work.cover} alt={`The cover of "${work.title}"`} />
        </div>
    );
}

export default BookCover;