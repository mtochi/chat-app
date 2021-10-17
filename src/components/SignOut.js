import React from 'react';
import {auth} from './../firebase/firebase.utils';

function SignOut() {
    return(
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut;