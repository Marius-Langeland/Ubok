import React from 'react';

function Icon(props : any){
    return (
        <span onClick={props.onClick} 
              className={`material-symbols-outlined ${props.className}`}>
          {props.type}
        </span>
    );
}
export default Icon;