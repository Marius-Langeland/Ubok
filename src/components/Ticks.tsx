import React from 'react';
import Icon from './Icons';
import './component.scss';

function Tick(props : any){
    return(
      <span className="tick">
        <Icon type='do_not_disturb_on' onClick={props.onClose}/>
        <span className="category">{props.text}</span>
      </span>
    );
  }

export default Tick;