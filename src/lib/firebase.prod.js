import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDEDW5soT0_EGCrN0DNEI0fzSc1aWY5emA",
  authDomain: "netflix-clone-9bceb.firebaseapp.com",
  projectId: "netflix-clone-9bceb",
  storageBucket: "netflix-clone-9bceb.appspot.com",
  messagingSenderId: "669505839441",
  appId: "1:669505839441:web:f701fb0f0dc279147d7370"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };