import firebase from 'firebase';
const firebaseConfig = {
	apiKey: "AIzaSyBTEwEjouqI-RlF8ClZTz7cpAnpTVMAPrs",
	authDomain: "formlistreact.firebaseapp.com",
	projectId: "formlistreact",
	storageBucket: "formlistreact.appspot.com",
	messagingSenderId: "232821786612",
	appId: "1:232821786612:web:0720dad683667cbe07dba1",
	measurementId: "G-9NJPZTE1EZ"
  };
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export {storage}