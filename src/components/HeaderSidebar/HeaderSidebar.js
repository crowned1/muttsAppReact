import * as React from 'react'
import IconImage from '../IconImage/IconImage'
import SvgIcon from '../SvgIcon/SvgIcon'
import './HeaderSidebar.css'
import {ReactComponent as DisconnectedCircle } from '../../assets/disconnectCircle.svg'
import {ReactComponent as Message } from '../../assets/message.svg'
import {ReactComponent as ThreeVerticalDots } from '../../assets/threeVerticalDots.svg'

export default function HeaderSidebar() {
    const icons = [ 
        {name: "circle", icon: DisconnectedCircle},
        {name: "message", icon: Message},
        {name: "dots", icon: ThreeVerticalDots}
    ];
    const listItems = icons.map( icon => {
        return <li key={icon.name}><SvgIcon icon={ icon } /></li>
    })
    return (
        <div id="header-sidebar">
            <IconImage />
            <div id="header-sidebar-icons">
                <ul>{listItems}</ul>
            </div>
        </div>
    )
}