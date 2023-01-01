import './collections.scss';
import React from 'react';

function CollectionFacade(props: any){
    return(
        <div className='collection-facade'>
            <img className='shadow' src={props.url} alt="" />
            <p>{props.description}</p>
        </div>
    );
}

function Collections(props: any){
    return(
        <section className="collection-section shadow">
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059210905390428222/Geezmo_Book_cover._Teal_theme._Doorway._Detailed._76187bc2-6e36-4fb5-863f-6bc680da1acc.png' description='Test collection'/>
        </section>
    );
}

export default Collections;