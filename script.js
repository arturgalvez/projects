var database = [
	{
		username: "artur",
		password: "galvez"
	},
	{
		username: "maria",
		password: "galvez"
	},
	{
		username: "gabi",
		password: "galvez"
	}
];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "so tired of all this videos"
	},
	{
		username: "Sally",
		timeline: "jS is so boring"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false; 
}
		
function signIn(username, password){			
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
}
}

var userNamePrompt = prompt("what's your username");
var passwordPrompt = prompt("whats your password");	


signIn(userNamePrompt, passwordPrompt);