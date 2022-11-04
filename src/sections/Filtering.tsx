import React from 'react'
import Icon from '../components/Icons'
import Tick from '../components/Ticks'

function Filtering(){

    function Search(){
      return(
        <div className="search-input">
          <Icon type='search'/>
          <input type="text" name='search-text' className='search-text' placeholder='Search title, author, topic...'/>
        </div>
      );
    }
  
    function Categories(){
      return(
        <div className="category-input">
          <Icon type='filter_list'/>
          <div className="category-list">
            <Tick text='Non-fiction'/>
            <Tick text='Action'/>
            <Tick text='History'/>
            <Tick text='Drawing'/>
            <Tick text='Autobiography'/>
            <Tick text='Childhood'/>
            <Tick text='School'/>
          </div>
        </div>
      );
    }
  
    return(
      <section className="filtering">
        <Search/>
        <Categories/>
      </section>
    );
  }

export default Filtering;