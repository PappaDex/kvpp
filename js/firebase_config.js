// Inicijalizacija Firebase-a

const cityConfig = {
  
  apiKey: "AIzaSyBqnScVtyNG52fA216L456y5gZymSMM2jM",
  authDomain: "kvputnickiprijevoz.firebaseapp.com",
  databaseURL: "https://kvputnickiprijevoz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kvputnickiprijevoz",
  storageBucket: "kvputnickiprijevoz.appspot.com",
  messagingSenderId: "1011061768446",
  appId: "1:1011061768446:web:52f721a010cd970935e5af"
  
};



firebase.initializeApp(cityConfig);

// Kreiranje objekta Firebase baze
var oDb = firebase.database();
var oDbcitya = oDb.ref('cities');
var oDbusera= oDb.ref('users');