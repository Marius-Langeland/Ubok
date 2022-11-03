import React from 'react';
import './Book-page.scss'

function BookPage(props: any){
    let link = localStorage.getItem('item-selection');
    if(link == null)
        return <></>

    
    
    return(
        <section className='book-page'>
                <img src="" alt="" />
        </section>
    );
}

export default BookPage;