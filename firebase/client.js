import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBok1jgF_XdUBIgSa_425IlbC7q_OQuyrw",
  authDomain: "devter-67d8d.firebaseapp.com",
  projectId: "devter-67d8d",
  storageBucket: "devter-67d8d.appspot.com",
  messagingSenderId: "205319048749",
  appId: "1:205319048749:web:de6e3602a99573e4b832a4",
  measurementId: "G-80QT095HZJ",
};
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const mapUserFromFirebaseAuthTuUser = (user) => {
  const { email, photoURL } = user;
  return { email, photoURL };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = mapUserFromFirebaseAuthTuUser(user);
    onChange(normalizeUser);
  });
};

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(gitHubProvider)
    .then(mapUserFromFirebaseAuthTuUser);
};
