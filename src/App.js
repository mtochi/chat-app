import React from 'react';
import './App.css';
import {auth} from './firebase/firebase.utils';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">

      <header>
        <h1>⚛️🔥💬</h1>
        {user ? <SignOut/>: ''}
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
