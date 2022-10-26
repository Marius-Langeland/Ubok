import React from 'react';
import Icon from './Icons';

function Tick(props : any){
    return(
      <span className="tick">
        <Icon type='remove'/>
        <span className="category">{props.text}</span>
      </span>
    );
  }

export default Tick;