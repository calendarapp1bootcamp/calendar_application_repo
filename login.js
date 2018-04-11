// Initialize Firebase
var config = {
    apiKey: "AIzaSyBDV1oZpUtuz6_GfHN12fpGscXG1N8oCqw",
    authDomain: "group-calendar-app.firebaseapp.com",
    databaseURL: "https://group-calendar-app.firebaseio.com",
    projectId: "group-calendar-app",
    storageBucket: "group-calendar-app.appspot.com",
    messagingSenderId: "987306291886"
  };
  firebase.initializeApp(config);
// Basic user login
function login() {
    function newLoginHappened(user) {
        // Check if user is logged in. IF user logged in proceed to app by executing function
        if(user) {
            app(user)
        } else {
            // ELSE go to Google redirect page
            var provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithRedirect(provider)
        }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened)
}

// WORK IN PROGRESS
    function logout() {
        function newLogoutHappened(user) {
        // Check if user is logged in. IF user logged in proceed to app by executing function
            
        }
    }

function app(user) {
//user.displayName
//user.email
//user.photoURL
//user.uid

    document.getElementById("clientName").innerHTML = user.displayName
    console.log(user.photoURL)
    document.getElementById("clientPhoto").setAttribute("src",user.photoURL)
}
      