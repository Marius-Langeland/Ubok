import React, {useState, useEffect} from 'react'
import Icon from '../components/Icons'
import Tick from '../components/Ticks'
import Result from './Result';

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
      let [tags, setTags] = useState(JSON.parse(localStorage.getItem('tags') ?? '[]'));

      useEffect(() => {
        localStorage.setItem('tags', JSON.stringify(tags));
      }, [tags]);

      return(
        <div className="category-input">
          <Icon type='filter_list'/>
          <div className="category-list">
            {tags.map((tag: string, i: number) => <Tick key={i} text={tag} onClose={() => setTags(tags.splice(tags.indexOf(tag), 1))}/>)}
          </div>
        </div>
      );
    }
  
    return(
      <>
        <section className="filtering">
          <Search/>
          <Categories/>
        </section>
        <section className="results">
          <Result/>
        </section>
      </>
    );
  }

export default Filtering;