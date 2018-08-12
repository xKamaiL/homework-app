import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBu5pwiqYN3oFN5u-AdJC8PJBSIgSWxnfc',
  authDomain: 'homework-xkamail.firebaseapp.com',
  databaseURL: 'https://homework-xkamail.firebaseio.com',
  projectId: 'homework-xkamail',
  storageBucket: 'homework-xkamail.appspot.com',
  messagingSenderId: '732205483665'
};

firebase.initializeApp(config);
export const database = firebase.database();
export { firebase };
