

//ADD YOUR FIREBASE LINKS 
const config = {
    apiKey: "AIzaSyChAXi5TRB9q_Fc_9FhRfKzM5P0bB-P9gM",
    authDomain: "kwitterp-bacfb.firebaseapp.com",
    databaseURL: "https://kwitterp-bacfb-default-rtdb.firebaseio.com",
    projectId: "kwitterp-bacfb",
    storageBucket: "kwitterp-bacfb.appspot.com",
    messagingSenderId: "1039527519705",
    appId: "1:1039527519705:web:ed4cc932bf7af366dce5c8",
    measurementId: "G-YT424PS04H"




};
// Initialize Firebase
firebase.initializeApp(config);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}


