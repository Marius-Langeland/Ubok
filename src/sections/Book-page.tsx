import React from 'react';
import Icon from '../components/Icons';
import './Book-page.scss'

function BookPage(props: any){
    let link = localStorage.getItem('item-selection');
    
    return(
        <section className='book-page'>
            <div className='tools'>
                <Icon type='close' />
            </div>
            <img id='book-cover' src={props.coverSrc} alt="Book cover" />
            <h3>{props.title}</h3>
        </section>
    );
}

export default BookPage;