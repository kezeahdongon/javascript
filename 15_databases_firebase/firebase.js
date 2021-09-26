import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getFirestore, collection, doc, addDoc, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsbIwLSUDbAiscuapPwCRq34OjiP8RPdc",
  authDomain: "udemy-project-ca139.firebaseapp.com",
  projectId: "udemy-project-ca139",
  storageBucket: "udemy-project-ca139.appspot.com",
  messagingSenderId: "864407147735",
  appId: "1:864407147735:web:d8157efd31c760d9228c92",
  measurementId: "G-QS8MG64DM9"
};

// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);
// INITIALIZE FIRESTORE
const db = getFirestore();

// ADD DATA
async function addNewNote(name, content) {
  try {
    const docRef = await addDoc(collection(db, "notes"), {
      name: name,
      content: content
    });
    console.log("Document Id: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/*
addNewNote("Hello", "World");
addNewNote("Hello", "World");
addNewNote("Hello", "World");
addNewNote("Hello", "World");
addNewNote("Hello", "World");
*/

// READ DATA
async function getNotes() {
  const querySnapshot = await getDocs(collection(db, "notes"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id);
    console.log(doc.data());
  });
}

getNotes();

// DELETE DATA
async function deleteNote() {
  await deleteDoc(doc(db, "notes", "AxJEUoR4Ohjon4Fn9vn4"));
}
deleteNote()
