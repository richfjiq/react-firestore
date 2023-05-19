import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCtHrfEiZ-OUvBUR6ka2WCnU2u3bduz95g',
  authDomain: 'react-firestore-a048a.firebaseapp.com',
  projectId: 'react-firestore-a048a',
  storageBucket: 'react-firestore-a048a.appspot.com',
  messagingSenderId: '843029140067',
  appId: '1:843029140067:web:75e0d1b006c0e31dad1e56',
  measurementId: 'G-QMW1EDNKVG',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
