import * as React from 'react'
import IconImage from '../IconImage/IconImage'
import './HeaderMain.css'
import {ReactComponent as Magnify } from '../../assets/disconnectCircle.svg'
import {ReactComponent as Clip } from '../../assets/message.svg'
import {ReactComponent as ThreeVerticalDots } from '../../assets/threeVerticalDots.svg'
import SvgIcon from '../SvgIcon/SvgIcon'

export default function HeaderMain( {photoUrl, chatName} ) {
    
    const icons = [ 
        {name: "magnify", icon: Magnify},
        {name: "clip", icon: Clip},
        {name: "dots", icon: ThreeVerticalDots}
    ];
    
    const listItems = icons.map( icon => <li key={icon.name}><SvgIcon icon={icon} /></li> )

    let nameOfChat = chatName ? chatName : "";
    let urlOfPhoto = photoUrl ? photoUrl : "";
    
    return (
        <div id="header-main">
            <IconImage photo={urlOfPhoto}/>
             <div id="chat-name-section">
                <p id="chat-name">{nameOfChat}</p>
            </div>
            <div id="header-sidebar-icons">
                <ul>{listItems}</ul>
            </div>
        </div>
    )
}