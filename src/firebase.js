import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBXoAwDBP2Nha51zNsLrnFvXwZFYdzgb_4",
    authDomain: "extras-bdd97.firebaseapp.com",
    projectId: "extras-bdd97",
    storageBucket: "extras-bdd97.appspot.com",
    messagingSenderId: "625381562624",
    appId: "1:625381562624:web:d9bb13614cb9b74aa2bbe5",
    measurementId: "G-N80GD0ZLLF"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  
  export default db;