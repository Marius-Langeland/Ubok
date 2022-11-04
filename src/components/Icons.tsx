import React from 'react';
import './component.scss'

function Icon(props : any){
    return (
        <span onClick={props.onClick} 
              className={`material-symbols-outlined ${props.type}-icon${props.toggle ? " enabled" : ""} `}>
          {props.type}
        </span>
    );
}
export default Icon;