
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQbdaIFkpB5JH8zI5dGc_fe_3sqw4XDnU",
  authDomain: "codelab-ce3a0.firebaseapp.com",
  databaseURL: "https://codelab-ce3a0.firebaseio.com",
  projectId: "codelab-ce3a0",
  storageBucket: "codelab-ce3a0.appspot.com",
  messagingSenderId: "381950604305",
  appId: "1:381950604305:web:41fb3cfae83c1196066db0",
  measurementId: "G-CVQ5RHTX8D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();

firebase.auth.Auth.Persistence.LOCAL;


$("#btn-login").click(function()
{

  var email = $("#email").val();
  var password = $("#password").val();

  if (email != "" && password != "")
  {

    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      window.alert("Message : " + errorMessage);

    });
  }
  else{
    window.alert("please enter your info");
  }
});



$("#btn-signup").click(function()
{

  var email = $("#email").val();
  var password = $("#password").val();
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var myList = $("#myList").val();



  if (email != "" && password != "")
  {

    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      window.alert("Message : " + errorMessage);

    });
  }
  else{
    window.alert("please enter your info");
  }
});

$("#btn-logout").click(function()
{
  firebase.auth().signOut();
});


/*

var userId = document.getElementById('userId')

var db = firebase.database();
var rootRef = db.ref('users');

function writeData() {
var autoId = rootRef.push().key
rootRef.child(autoId).set({
Username: document.getElementById("usernameField").value,
password:  document.getElementById("passwordField").value,
});
getData();
}

function getData() {

rootRef.orderByKey().on('value', snapshot => {
console.log(snapshot.val());
})

db.ref('/users/').once('value', function(snapshot){
snapshot.forEach(function(childSnapshot)
{

var childData = childSnapshot.val();
console.log(childData);
console.log();
document.getElementById("data").innerHTML = childData ['Username'] + `, ` + childData['password'];
})
})
}
getData();

*/
