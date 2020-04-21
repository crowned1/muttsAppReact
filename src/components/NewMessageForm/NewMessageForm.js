import * as React from 'react'

export default function() {
    return (
        <div className="form-wrap">
            <form id="send-message" data-chat_id="">
                <input type="text" name="message" id="new-message" disabled />
            </form>
        </div>
    )
}