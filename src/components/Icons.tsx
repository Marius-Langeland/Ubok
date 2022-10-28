import React from 'react';
import './component.scss'

interface IconType{
    type: string;
    toggle?: boolean;
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}
function Icon(props : IconType){
    return (
        <span onClick={props.onClick} 
              className={`material-symbols-outlined ${props.type}-icon${props.toggle ? " enabled" : ""} `}>
          {props.type}
        </span>
    );
}
export default Icon;