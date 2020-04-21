import * as React from 'react';
import IconImage from '../IconImage/IconImage'
import './ChatPreview.css'

export const ChatPreview = ({chat, action}) => {
    let { 
        chat_name,
        last_message,
        photo_url,
        chat_id,
        sender_id,
        date_sent
        } = chat;
        
    return (
        <div className="message-preview-box" data-chat_id={chat_id} data-sender_id={sender_id} onClick={action}>
            <IconImage photo={photo_url} />
            <div className="message-text-wrap">
                <p>{chat_name}</p>
                <p>{last_message}</p>
            </div>
            <div className="date-wrap">
                <p>{new Date(date_sent).toLocaleDateString()}</p>
            </div>
        </div>
    );
};