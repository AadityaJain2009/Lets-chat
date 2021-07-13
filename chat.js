var firebaseConfig = {
  apiKey: "AIzaSyCi-2D04Z-AGlvq9FouTTyqpq-lTlT_Sh8",
  authDomain: "let-s-chat-app-88489.firebaseapp.com",
  databaseURL: "https://let-s-chat-app-88489-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-app-88489",
  storageBucket: "let-s-chat-app-88489.appspot.com",
  messagingSenderId: "625985593232",
  appId: "1:625985593232:web:789a7f60cf5edd83ff9d15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
 var user_name="";
  user_name = localStorage.getItem("user_name");
    document.getElementById("nameuser").innerHTML = "Welcome  " + user_name + "!!";
    console.log("concatination success");

    function getData() 
    {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    
      

    //End code
    });});}
    getData();

    function addRoom(){
    
      item = document.getElementById("room_name").value;
      localStorage.setItem("room_name",item);
      console.log("Adding room name to storage success");
  }

  function logout(){
    window.location ="index.html";
    console.log("logout success");
  }