import Icon from '../components/Icons';
import React, {useState} from 'react';
import './collections.scss';

function CollectionFacade(props: any){
    let width = props.width ?? 1;
    let tabIndex = props.key != undefined ? props.key * 2 : -1;

    return(
        <div className={`collection-facade shadow`} style={{gridColumn: `span ${width}`}}>
            <img src={props.url} alt="" style={{aspectRatio: width == 1 ? '2/3' : '3/2'}}/>
            <div className="facade-image-mask" tabIndex={tabIndex - 1}>
                <div className='facade-image-top'>
                    <span className="facade-editor"></span>
                    <span className="facade-title">{props.title}</span>
                </div>
                
                <div className="facade-description">
                    <span>{props.description}</span>
                </div>
            </div>

            <div className="facade-buttons">
                <div className="right">
                    <div className="facade-open" tabIndex={tabIndex}>Åpne</div>
                </div>
                
                <div className="facade-hide">
                    <Icon type='visibility_off'/>
                </div>
            </div>
        </div>
    );
}

function Collections(props: any){
    return(
        <section className="collection-section shadow">
            <div className='collection-header'>
                <h1>Collections</h1>
            </div>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1060121790258622474/Geezmo_Mandelbulb_hovering_over_the_open_ocean_12c978b4-4a5a-4ea5-8e91-f0123cf66c00.png' description='Test collection' title='Test title' date="27 Mai, 2020" width={2}/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059599395055751178/Geezmo_Large_and_glowing_runic_sphere_lying_on_a_spiraling_trod_b3ca8c60-48b9-4b53-9a5e-310dfe06f5c3.png' description='Test collection' title='Test title' date="27 Mai, 2020"/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059590610434134046/Geezmo_abstract_illustration_fb20c988-0999-4e4f-b881-3d0913ceb89a.png' description='Test collection' title='Test title' date="27 Mai, 2020"/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059592445169500190/Geezmo_Poster_of_wizard_and_robot_in_the_style_of_Wes_Anderson._3bab3a6b-f758-4153-ba51-056fd3b50dac.png' description='Test collection' title='Test title' date="27 Mai, 2020"/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059594171058487477/Geezmo_Line_art_doodle_of_a_whimsical_penguin._Simple_illustrat_717975a6-009d-4b2a-a066-0db0416ec2f5.png' description='Test collection' title='Test title' date="27 Mai, 2020"/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059594799121969202/Geezmo_Stylized_portrait_of_Winston_Churchill_in_a_Soviet_Union_7253ef74-055c-4a71-bc50-ea14e6cb87dc.png' description='Test collection' title='Test title' date="27 Mai, 2020"/>
            <CollectionFacade url='https://cdn.discordapp.com/attachments/1058068137783865465/1059598496681967786/Geezmo_Isometric_terrain_illustrations_bc8c7cdd-49d5-4752-972e-1d797ee13299.png' description='Test collection' title='Test title' date="27 Mai, 2020"/>
        </section>
    );
}

export default Collections;