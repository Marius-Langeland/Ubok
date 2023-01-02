import React, { useState } from 'react'
import Book from '../components/Book'
import './collections.scss'

class BookList{
    creator: string = "Curator";
    img: string = "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2022/02/synthetic3.png";
    date: string = "16.12.2022";
    desc: string = "Description";
    tags: string[] = [""];
    bookISBNs: number[] = [];
    json: any = [{}];
}

let collectionList = [
    new BookList(),
    new BookList(),
]

function updateCollection(collection: number, setCollection: any){
    collectionList[collection].json = [];
    for (let i = 0; i < collectionList[collection].bookISBNs.length; i++) {
        const element = collectionList[collection].bookISBNs[i];
        fetch(`https://www.googleapis.com/books/v1/volumes?q=+isbn:${element}&key=AIzaSyCMGge0lBhkgYa8vBIKTlziBXoylhNWK4M`)
        .then((response) => response.json())
        .then((json) => {
            collectionList[collection].json.push(json);
            setCollection(collectionList);
        });
    }
}

function CollectionComponent(props: any){
    return(
        <div className="collection">
            <div className="curator-info">
                <img className='collection-profile' src={props.collection.img} alt={props.collection.creator} />
                <span className='collection-name'>{props.collection.creator}</span>
                <span className="collection-desc">{props.collection.desc}</span>
            </div>

            {props.collection.json.map((item: any, i: number) => <Book key={i}/>)}
        </div>
    );
}

function Collections(){
    let [collections, setCollections] = useState(collectionList);

    collectionList[0].bookISBNs.push(9781405294522);
    for (let i = 0; i < collections.length; i++) {
        updateCollection(i, setCollections);

        console.log(collections[i].json)
    }

    return(
        <section className="collection-groups">
            {collections.map((item, i) => <CollectionComponent collection={item} key={i}/>)}
        </section>
    );
}


export default Collections;