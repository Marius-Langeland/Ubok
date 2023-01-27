import Icon from './Icons'

function CollectionFacade(props: any){
    let width = props.width ?? 1;
    let tabIndex = props.key != undefined ? props.key * 2 : -1;

    return(
        <div className={`collection-facade shadow`} style={{gridColumn: `span ${width}`}}>
            <img src={props.url} alt="" style={{aspectRatio: width == 1 ? '2/3' : '3/2'}}/>
            <div className="facade-image-mask" tabIndex={tabIndex - 1}>
                <div className='facade-image-top'>
                    <span tabIndex={-1} className="facade-editor" onClick={function(){}}/>
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

function CollectionHidden(){
    
}

function CollectionF(props: any){
    return(
        <>
        <span className='facade-profile'>
            
        </span>
        </>
    );
}

export default CollectionFacade;