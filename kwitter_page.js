
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyAYW99AT0huwda-OaEi57lh2-vxtB0jW0Y",
  authDomain: "kwitter-6f31e.firebaseapp.com",
  databaseURL: "https://kwitter-6f31e.firebaseio.com",
  projectId: "kwitter-6f31e",
  storageBucket: "kwitter-6f31e.appspot.com",
  messagingSenderId: "97485171473",
  appId: "1:97485171473:web:632563a45872d181347ab0",
  measurementId: "G-56F7YT6VVM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

name_user = localStorage.getItem("user");
document.getElementById("member").innerHTML = name_user;

function addroom(){
   add_room = document.getElementById("room").value;
   firebase.database().ref("/").child(add_room).update({
         purpose: "adding roomname"
   });
   
   localStorage.setItem("room_name", add_room);
   window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
     console.log("Room name - "+ Room_names);
     row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row; 

  //End code
  });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user");
window.location = "index.html";
}