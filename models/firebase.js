import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = { 
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

initializeApp(firebaseConfig);

function storeHighScore(userId, score) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId).
  set(ref(db, 'users/' + userId), {
    highscore: score,
  });
}

function setupHighscoreListener(userId) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  onValue(reference, (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New high score: " + highscore);
  });
}