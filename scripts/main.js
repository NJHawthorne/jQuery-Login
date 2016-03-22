//Setting up a constructor for my two objects
function UserLogin (username, password) {
	this.username = username;
	this.password = password;
}

var usernameInput = $('.usernameInput');
var passwordInput = $('.passwordInput');

//Creating both objects for aaron's login and admin's login
var aaron = new UserLogin('aaron@theironyard.com', 'password123');
var admin = new UserLogin('admin@google.com', 'pandas');

//Making sure everything worked with the constructor
console.log(aaron);
console.log(admin);

//Starting the event handler to verify information
$('.loginBtn').on('submit', function() {

});

function redirect () {
	window.location.replace("http://www.facebook.com");
}