window.addEventListener("load", function() {
    
    
	var provider = new firebase.auth.GithubAuthProvider();
	var autBtn = document.getElementById("autBtn");
	var logoutBtn = document.getElementById("logoutBtn");
	var infoText = document.getElementById("infotext");
	var infoTextFail = document.getElementById("infotextFail");
    
    
	//logoutBtn.style.display = "none";
    
    
	/**** log in knapp ****/
	autBtn.addEventListener("click", function(event) {
		firebase.auth().signInWithPopup(provider).then(function(result) {
			// Om autentisering lyckas, så finns användarinfo i user
			let user = result.user;
			if (user.displayName == null) {
				infoText.innerHTML = `Du är inloggad som ${user.email}`;
			} else {
				infoText.innerHTML = `Du är inloggad som ${user.displayName}`;
			};
		});
		autBtn.style.display = "none";
		logoutBtn.style.display = "inherit";
	});
    
    
	/**** logout knapp ****/
	logoutBtn.addEventListener("click", function(event) {
		firebase.auth().signInWithPopup(provider)
		firebase.auth().signOut().then(function(result) {
			// Utloggning lyckades
            console.log("utloggning lyckades");
            infoText.innerHTML = `Du är inte inloggad`;
            
		}).catch(function(error) {
			console.log("utloggning misslyckades");
			infoTextFail.innerHTML = "Utloggning misslyckades";
		});
		infoText.innerHTML = "";
		autBtn.style.display = "inherit";
		logoutBtn.style.display = "none";
	});
    
    
    
});