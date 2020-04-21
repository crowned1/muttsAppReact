import * as React from 'react';
import {ReactComponent as DefaultIcon } from '../../assets/defaultIcon.svg'
import './IconImage.css'

export default function IconImage(props) {
  return (
    <div id="self-image" className="img-wrap">
      {props.photo ? 
        <img src={props.photo} alt="My icon image" /> :
        <DefaultIcon />
      }
    </div>
  );
};