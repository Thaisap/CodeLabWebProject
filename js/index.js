
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
    var confPassword = $("#confPassword").val();



    if (email != "" && password != "" && confPassword!= "" )
    {
        if(password == confPassword){
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error)
                         {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);

            });
        }
        else
        {
             window.alert("password does not match with confirm password");
        }
    }
    else{
        window.alert("please enter your info");
    }
});

$("#btn-logout").click(function()
                       {
    firebase.auth().signOut();
});

$("#btn-update").click(function()
                       {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var myList = $("#myList").val();
    var address = $("#address").val();
    var phone = $("#phone").val();

    var rootRef = firebase.database().ref().child("users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(firstName!="" && lastName!="" && myList!="" && address!= "" && phone!="") 
    {
        var userData = 
            {
                "phone": phone,
                "address": address,
                "firstName": firstName,
                "lastName": lastName,
                "myList": myList,
            };
        usersRef.set(userData, function(error)
                     {
            if(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);

            }
            else
            {
                window.location.href="MainPage.html";

            }

        })
    }
    else
    {
        window.alert("please enter your info");
    }



});

