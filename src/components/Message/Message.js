// @flow 
import * as React from 'react';
let userID = 3;

export const Message = ({messageObj}) => {
    let inorout = messageObj.sender_id === userID ? "out" : "in";

    return (
        <div className={`chat-bubble ${inorout}`}>
            <p>{messageObj.message}</p>
        </div>
    );
};