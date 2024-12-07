import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBg1lhseKHmuJXH2iFmx-yFNEB93DjBLg",
  authDomain: "catch-of-the-day-greg-3c853.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-greg-3c853-default-rtdb.firebaseio.com",
  appId: "1:246539484759:web:e745447b7e23799c93ed12"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
