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

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("Message").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("Message").value="";
}