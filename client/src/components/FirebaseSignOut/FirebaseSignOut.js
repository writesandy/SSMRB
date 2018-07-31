import React from 'react';

import { auth } from '../../firebase';

const FirebaseSignOut = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default FirebaseSignOut;