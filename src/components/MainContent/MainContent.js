import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import MainChat from '../MainChat/MainChat'
import './MainContent.css';

function MainContent(props) {
  let {
    chatPreviewClick,
    clickedChat,
    currentMessages
  } = props
  return (
    <div className="main-content">
        <Sidebar chatPreviewClick={chatPreviewClick} />
        <MainChat 
          clickedChat={clickedChat}
          currentMessages={currentMessages}
        />
    </div>
  );
}

export default MainContent;
