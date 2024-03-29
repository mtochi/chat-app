import React from 'react';
import {firebase, auth} from './../firebase/firebase.utils';

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
  
}

export default SignIn;

