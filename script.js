window.addEventListener("load", function(){

var provider = new firebase.auth.GithubAuthProvider();    
    
var autBtn = document.getElementById("autBtn");
var logoutBtn = document.getElementById("logoutBtn");    
    
    
firebase.auth().signInWithPopup(provider)
.then(function(result) {
	// Om autentisering lyckas, så finns användarinfo i user
	let user = result.user;
});
    
    
firebase.auth().signOut()
.then(function(result) {
	// Utloggning lyckades
})
.catch(function(error) {
	// Utloggning misslyckades
});
    
    
    
    
    
    
    
});