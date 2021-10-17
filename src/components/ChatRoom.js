import React, {useRef, useState} from 'react';
import ChatMessage from './ChatMessage';
import {firebase, auth, firestore} from './../firebase/firebase.utils';
import { useCollectionData } from 'react-firebase-hooks/firestore';


function ChatRoom() {
    const dummy = useRef();
    
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault();
      const {uid, photoURL} = auth.currentUser;
  
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
      setFormValue('');
      dummy.current.scrollIntoView({behavior: 'smooth'})
  
    }
    return (
      <>
        <main>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
        </main>
  
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder='say something nice'/>
          <button type='submit' disabled={!formValue}>Send</button>
        </form>
      </>
    )
  
};
export default ChatRoom;