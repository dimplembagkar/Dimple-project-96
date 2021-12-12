// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj52qwO-Ng6MsaAaqc2rXC4OqZt01w5iw",
  authDomain: "let-chat-web-app-e1413.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-e1413-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-e1413",
  storageBucket: "let-chat-web-app-e1413.appspot.com",
  messagingSenderId: "883917690872",
  appId: "1:883917690872:web:b3f70e2f7b3efb9a99280d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("User_name");
  document.getElementById("User_name").innerHTML="Welcome"+user_name+"!";

  function addRoom()
  {
      room_name=document.getElementById("room_name").value;
      firebase.databse().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
  }

  function getData() {firebase.databse().ref("/").on('value', 
  function(snapshot){document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room name"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location.replace("kwitter_page.html");
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}