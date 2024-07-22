// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBFt_ZUzDOP0inZbkVrWq5DaqrJC5caZyw",
//   authDomain: "contacts-e5a08.firebaseapp.com",
//   projectId: "contacts-e5a08",
//   storageBucket: "contacts-e5a08.appspot.com",
//   messagingSenderId: "573827644877",
//   appId: "1:573827644877:web:60459f17e163ce2cc8d884",
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export { storage };




import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvntZvrBCmt3KFRv2AwtK2MFN95ZT8upU",
  authDomain: "contact-26af8.firebaseapp.com",
  projectId: "contact-26af8",
  storageBucket: "contact-26af8.appspot.com",
  messagingSenderId: "27384600386",
  appId: "1:27384600386:web:3255c936f2bf82e0831adb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };