import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './App.css';

let baseUrl = 'http://demo.codingnomads.co:8082/muttsapp';
let userID = 3;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      clickedChat: false,
      currentMessages: [],
      currentChatInfo: {}
    }
    this.chatPreviewClick = this.chatPreviewClick.bind(this)
    this.setPreviewMessageState = this.setPreviewMessageState.bind(this)
  }

  chatPreviewClick(event) {
    console.log(event.target)
    let box = event.target.closest('.message-preview-box');
    // console.log(box.dataset.chat_id)

    let chatInfo = box.dataset;
    this.getMessages(chatInfo)
    console.log(box.querySelector('img').src)
    let currentChat = {
      photoUrl: box.querySelector('img').src,
      chatName: box.querySelector('.message-text-wrap p').innerHTML
    }

    this.setState({
      clickedChat: true,
      currentMessages: [],
      currentChatInfo: currentChat
    })
  }

  setPreviewMessageState(chat){
    this.setState({currentChatInfo: chat})
  }

  getMessages({sender_id}){
    fetch(`${baseUrl}/users/${userID}/chats/` + sender_id)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          currentMessages: data.data
        })
      })
  }


  render(){
    return (
      <Fragment>
        <Header clickedChat={this.state.currentChatInfo} />
        <MainContent 
          chatPreviewClick={this.chatPreviewClick}
          currentMessages={this.state.currentMessages}
          clickedChat={this.state.clickedChat}
        />
      </Fragment>
    );
  }
}

export default App;
