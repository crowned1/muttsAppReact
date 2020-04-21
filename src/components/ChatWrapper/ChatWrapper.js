import * as React from 'react';
import { Message } from '../Message/Message.js'
import './ChatWrapper.css'

export default function ChatWrapper(props) {
    let { clickedChat, currentMessages } = props;
    let msgsReversed = currentMessages.reverse();

    if (!clickedChat) {
        return <div className="chat-container">Click on a chat to get messages</div>;
    } else {
        if(currentMessages.length === 0){
            return <div className="chat-container">Loading...</div>;
        } else {
            return (
                <div id="chat-bubble-wrapper" className="chat-container">
                    {msgsReversed.map( messageObj => (
                        <Message messageObj={messageObj} />
                    ))}
                </div>
            )
        }
    }
};