import React from 'react';
import {auth} from './../firebase/firebase.utils';


function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recevied';
    
    return (
      <>
        <div className={`message ${messageClass}`}>
          <img src={photoURL} alt='profile pic'/>
          <p>{text}</p>
        </div>
      </>
    )
  
}
export default ChatMessage;