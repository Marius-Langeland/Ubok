import React, {useState, useEffect} from 'react'
import Icon from '../components/Icons'
import Tick from '../components/Ticks'

class Filters{
  tags: string[];
  search: string;
  
  constructor(){
    this.tags = ['ds'];
    this.search = "";
  }
}

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
      let [filter, setFilter] = useState(new Filters());

      useEffect(() => {
        localStorage.setItem('filters', JSON.stringify(filter));
      }, filter);

      return(
        <div className="category-input">
          <Icon type='filter_list'/>
          <div className="category-list">
            {filter.tags.map((tag: string) => <Tick text={tag}/>)}
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