//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBJBcJzYt4W6pco9Lc5Oc6gKhMevMJEou4",
      authDomain: "kwitter-86413.firebaseapp.com",
      databaseURL: "https://kwitter-86413-default-rtdb.firebaseio.com",
      projectId: "kwitter-86413",
      storageBucket: "kwitter-86413.appspot.com",
      messagingSenderId: "870904047141",
      appId: "1:870904047141:web:479d01b15be8785a5481cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
