import React, {useState, useEffect} from 'react'
import Book from '../components/Books'
import './filtering.scss'
import '../theme.css'
import Icon from '../components/Icons';
import { json } from 'stream/consumers';

class BookClass{
  id: number = 0;
  title: string = "Title";
  author: string = "Author";
  coverSrc: string = "Cover";
  desc: string = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate numquam eum ipsum quasi? Inventore, ab. Eos unde accusantium impedit nostrum amet repudiandae repellat officiis? Quidem modi iste sequi in veniam?
  Rem amet, laboriosam eius eum consequatur maiores id iste vel quisquam quasi voluptatem officia qui sint! Dolores perspiciatis dignissimos magni reprehenderit eaque? Harum facilis temporibus alias voluptas reiciendis perspiciatis nostrum.
  Nisi harum provident animi repellendus repudiandae laudantium assumenda laboriosam ab quaerat id quibusdam praesentium suscipit at, doloribus optio sequi! Repellendus ea id, quibusdam earum reiciendis optio ut! Voluptatem, ad quod.
  Aperiam distinctio incidunt voluptatem, consequuntur deserunt ipsam dignissimos possimus quos, recusandae aspernatur illum! Laboriosam dolorem eligendi natus ut, voluptate blanditiis quidem in, aperiam ratione facilis iusto modi dolorum, officia nihil.`;
  published_ddmmyy: number[] = [];
  fav: boolean = false;
}

class Collection{
  creator = {
    name: "Jonas John Jonasson jr.",
    img: "",
  };
  books: string[] = [];
  description: string = "Description";
  title: string = "Title";
}

let defaultCollections : Collection[] = [
  {
    creator: {
      name: "Marius Langeland",
      img: ""
    },
    description: "",
    title: "",
    books: ["9788242956309"]
  }
];

let defaultBooks: BookClass[] = [
  {
    id: 0,
    author: "Jude Combs",
    title: "Quality Design",
    coverSrc: "https://www.adobe.com/express/create/cover/media_1a1c99c9bbc4c5bd26974a96b19b1cdaee9bc866c.jpeg?width=400&format=jpeg&optimize=medium",
    desc: "The quick brown fox",
    published_ddmmyy: [28, 4, 2017],
    fav: false
  },
  {
    id: 1,
    author: "Fiona Staples, Brian E. Vaughan",
    title: "Saga Vol. 3",
    coverSrc: "https://www.writersandartists.co.uk/sites/default/files/advice/old/admin_1-asset-5afa9df219116.JPG",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate numquam eum ipsum quasi? Inventore, ab. Eos unde accusantium impedit nostrum amet repudiandae repellat officiis? Quidem modi iste sequi in veniam?
    Rem amet, laboriosam eius eum consequatur maiores id iste vel quisquam quasi voluptatem officia qui sint! Dolores perspiciatis dignissimos magni reprehenderit eaque? Harum facilis temporibus alias voluptas reiciendis perspiciatis nostrum.
    Nisi harum provident animi repellendus repudiandae laudantium assumenda laboriosam ab quaerat id quibusdam praesentium suscipit at, doloribus optio sequi! Repellendus ea id, quibusdam earum reiciendis optio ut! Voluptatem, ad quod.
    Aperiam distinctio incidunt voluptatem, consequuntur deserunt ipsam dignissimos possimus quos, recusandae aspernatur illum! Laboriosam dolorem eligendi natus ut, voluptate blanditiis quidem in, aperiam ratione facilis iusto modi dolorum, officia nihil.`,
    published_ddmmyy: [10, 9, 2012],
    fav: false
  },
];

let filters = {
  sort: {by: '', ascending: true},
  query: 'Røyken_vgs',
  tags: [''],
  page: 0,
  size: 10,
}

function parse_nbdotno_book(metadata: any){
  let book = new BookClass();
  book.id = metadata.id;
  book.title = metadata.metadata.title;
  book.coverSrc = metadata._links.thumbnail_large??"";
  return book;
} 
function parse_api_nb_dot_no(setPage: any){
  fetch(`https://api.nb.no/catalog/v1/search?mediaTypeOrder=b%C3%B8ker%2Caviser%2Cbilder&mediaTypeSize=3&q=${filters.query}&searchType=FULL_TEXT_SEARCH&digitalAccessibleOnly=true&fragments=2&fragSize=500&profile=wwwnbno&page=${filters.page}&size=0&sort=string`)
  .then((response) => response.json())
  .then((json) => {
    let page: any = [{}];
    for (let i = 0; i < json._embedded.mediaTypeResults.length; i++) {
      const e0 = json._embedded.mediaTypeResults[i];
      for (let j = 0; j < json._embedded.mediaTypeResults[i].result._embedded.items.length; j++) {
        const metadata = json._embedded.mediaTypeResults[i].result._embedded.items[j];

        page.push(parse_nbdotno_book(metadata))

        if(page.length>11)
          break;
      }
      if(page.length>9)
        break;
    }

    setPage(page);
  });
}
function searchBook(id: string){
  fetch(`https://api.nb.no/catalog/v1/items?q=${id}&searchType=FULL_TEXT_SEARCH&fragments=2&fragSize=500&profile=wwwnbno&page=0&size=10`)
  .then((response) => response.json())
  .then((json) => {
    const data = parse_nbdotno_book(json._embedded.mediaTypeResults[0].result._embedded.items[0]);
    return <Book book={data}/>
  });
}

function Filtering(props: any){

  function handleSubmit(e: any){
    props.setQuery(e.target[0].value);
    e.preventDefault();
  }

  return(
    <div className="menu">
      <div className="tags"></div>
      <div className='menu-icon'><Icon type="settings" /></div>
      <form action="" onSubmit={e => handleSubmit(e)}>
        <input type="text" name="" id="" placeholder='Søk tittel, forfatter, kategori...' />
      </form>
      <div className='menu-icon'><Icon type="search" /></div>
    </div>
  )
}

function Collections(props: any){
  return(
    <section className='collections'>
      {
        props.collection.map((item: Collection) => 
          <div className="collection-instance">
            {item.books.map((bookID: string) => 
              <>
                {searchBook(bookID)};
              </>
            )}

            <img src={item.creator.img} alt="" />
            <span className="collection-creator">{item.creator.name}</span>
            <span className="collection-description">{item.description}</span>
          </div>
        )
      }
    </section>
  );
}
  
function Result(){
  const [collections, setCollections] = useState(defaultCollections)
  const [page, setPage] = useState(defaultBooks);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if(query != ""){
      filters.query = query;
      parse_api_nb_dot_no(setPage);
    }
  }, [query]);

  while(page.length < 6)
    page.push(new BookClass());
  
  let bookNodes = page.map((book, i) => <Book key={book.id} book={book} visible={book.title!="Title" && book.author!="Author"} />);
  
  return(
    <main>
      <Filtering setQuery={setQuery}/>
      <Collections collection={collections}/>

      <section className="query-results">
        <div className={`results layout-list`}>{bookNodes}</div>
      </section>

    </main>
  );
}

export default Result;