import React, { Component } from 'react';
import { ChatPreview } from '../ChatPreview/ChatPreview';
import './Sidebar.css'

let baseUrl = 'http://demo.codingnomads.co:8082/muttsapp';
let userID = 3;

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            chats: [],
        };

    }

    // chatPreviewClick(event){
    //     console.log(event.target)
    //     let chatID = event.target.closest('.message-preview-box').dataset.chat_id;
    //     console.log(chatID)
    //     // this.setState({clickedChat: chat})
    // }

    componentDidMount() {
        fetch(`${baseUrl}/users/${userID}/chats`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        chats: result.data
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    
    render() {
        const { error, isLoaded, chats } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
            return (
                <div className="sidebar">
                    <div id="message-wrapper" className="message-preview-wrap">
                        {chats.map( chat => (
                            <ChatPreview key={chat.chat_id} chat={chat} action={this.props.chatPreviewClick}/>
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default SideBar;