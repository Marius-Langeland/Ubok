import React, {useState, useEffect} from 'react'
import Icon from '../components/Icons'
import Book from '../components/Books'
import BookPage from '../pages/Book-page';

let books = [
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
  
  function Result(props: any){
    const [layout, setLayout] = useState(JSON.parse(localStorage.getItem('layout') ?? JSON.stringify("layout-grid")));
    const [inspectedBook, setInspectedBook] = useState(-1);

    useEffect(() => {
      localStorage.setItem('layout', JSON.stringify(layout));
    }, [layout]);
    
    let bookNodes = books.map((book, i) => <Book inspect={() => setInspectedBook(i)} key={book.id} book={book} />);
  
    let isInspecting = () => (inspectedBook >= 0 && inspectedBook < books.length);

    return(
      <>
        <div className={`results ${layout}`}>
            {bookNodes}
        </div>

        <BookPage book={isInspecting() ? books[inspectedBook] : {}} hide={() => setInspectedBook(-1)} hidden={!isInspecting()} />
      </>
    );
  }

  export default Result;