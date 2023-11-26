import firebase from "firebase";
import "firebase/firestore";



firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider , storage}
export default db
