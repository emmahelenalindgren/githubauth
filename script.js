window.addEventListener("load", function(){

var provider = new firebase.auth.GithubAuthProvider();    
    
var autBtn = document.getElementById("autBtn");
var logoutBtn = document.getElementById("logoutBtn");    
logoutBtn.style.display = "none";    
var infoText = document.getElementById("infotext"); 
var infoTextFail = document.getElementById("infotextFail");     
infoText.innerHTML = "";    

/**** log in knapp ****/
    
autBtn.addEventListener("click", function(event){
   firebase.auth().signInWithPopup(provider)
.then(function(result) {
	// Om autentisering lyckas, så finns användarinfo i user
	let user = result.user;
        
}); 
    autBtn.style.display = "inherit"; 
    logoutBtn.style.display = "none"; 
    infoText.innerHTML =  `Du är inloggad som ${user.displayName}`;
});    
  
    
    

/**** logout knapp ****/
       
autBtn.addEventListener("click", function(event){
   firebase.auth().signInWithPopup(provider)
firebase.auth().signOut()
.then(function(result) {
	// Utloggning lyckades
})
.catch(function(error) {
	// Utloggning misslyckades
    infoTextFail.innerHTML = "Utloggning misslyckades";
});
    autBtn.style.display = "none"; 
    logoutBtn.style.display = "inherit";  
});       
    

    
    
    
    
    
    
    
});