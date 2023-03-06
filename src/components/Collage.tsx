import React, {useEffect, useState} from 'react'
import BookCover from './BookCover'
import { Work } from "../utils/forrigebokAPI"
import { forrigebokFetcher } from "../utils/fetchForrigebok"

async function Collage(props: any){

    const [works, setWorks] = useState<Work[]>();

    return(
        <div className="collage" id={props.id}>
            <h3>Collage</h3>
            <div className="carousell">
                {props.bookList.map((work : Work, i : number) => <BookCover work={work} key={i}/>)}
            </div>
        </div>
    );
}

export default Collage;