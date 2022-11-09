import React from 'react';
import Icon from '../components/Icons';
import './Book-page.scss'

function BookPage(props: any){
    return(
        <section className={`book-page ${props.hidden ? ' hidden' : ''}`}>
            <div className='tools'>
                <Icon type='close' onClick={props.hide}/>
            </div>
            <img id='book-cover' src={props.book.coverSrc} alt="Book cover" />
            <h3>{props.book.title}</h3>
        </section>
    );
}

export default BookPage;