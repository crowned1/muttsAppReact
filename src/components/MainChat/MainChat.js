import * as React from 'react';
import SvgIcon from '../SvgIcon/SvgIcon'
import ChatWrapper from '../ChatWrapper/ChatWrapper'
import {ReactComponent as Smiley} from '../../assets/Smiley.svg'
import {ReactComponent as Microphone} from '../../assets/Microphone.svg'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import './MainChat.css'

export default function MainChat(props) {

    let {clickedChat, currentMessages} = props;

    return (
        <div className="main-chat">
            <ChatWrapper clickedChat={clickedChat} currentMessages={currentMessages}/>
            <div className="message-box">
                <SvgIcon icon={{ name: "smiley", icon: Smiley }} />
                <NewMessageForm />
                <SvgIcon icon={{ name: "microphone", icon: Microphone }} />
            </div>
        </div>
    );
}
