import React, {useState, useEffect} from 'react'
import Icon from '../components/Icons'
import Tick from '../components/Ticks'
import Result from './Result';

function Filtering(){

    let [tags, setTags] = useState(JSON.parse(localStorage.getItem('tags') ?? '[]'));
    useEffect(() => {
      localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags]);

    function Search(props: any){
      return(
        <div className="search-input">
          <Icon type='search'/>
          
          <form action="" onSubmit={(e) => {
              e.preventDefault();
              props.setTags((prev: any) => prev);
            }}>
            <input type="text" name='search-text' className='search-text' placeholder='Search   title, author, topic...'/>
          </form>

        </div>
      );
    }
  
    function Categories(props: any){
      return(
        <div className="category-input">
          <Icon type='filter_list'/>
          <div className="category-list">
            {props.tags.map((tag: string, i: number) => <Tick key={i} text={tag} onClose={() => {
                props.setTags((prev: string[]) => prev.splice(prev.indexOf(tag), 1));
              }}/>)}
          </div>
        </div>
      );
    }
  
    return(
      <>
        <section className="filtering">
          <Search setTags={setTags}/>
          <Categories tags={tags} setTags={setTags}/>
        </section>
        <section className="results">
          <Result/>
        </section>
      </>
    );
  }

export default Filtering;