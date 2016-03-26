//Setting up a constructor for my two objects
function UserLogin (email, password) {
	this.email = email;
	this.password = password;
}

//Creating both objects for aaron's login and admin's login
var aaron = new UserLogin('aaron@theironyard.com', 'password123');
var admin = new UserLogin('admin@google.com', 'pandas');

function manageAaronEmail() {
	if(!$('.emailInput').val() || !$('.emailInput').val().split('').includes('@')) {
		$('.emailError').html('Please enter a valid email address');
		return false;
	} else if ($('.emailInput').val() === aaron.email) {
		$('.emailError').html('');
		return true;
	} else {
		$('.emailError').html('Your email address was not correct. Please try again');
		return false;
	}
};

function manageAdminEmail() {
	if(!$('.emailInput').val() || !$('.emailInput').val().split('').includes('@')) {
		$('.emailError').html('Please enter a valid email address');
		return false;
	} else if ($('.emailInput').val() === admin.email) {
		$('.emailError').html('');
		return true;
	} else {
		$('.emailError').html('Your email address was not correct. Please try again');
		return false;
	}
};

function manageAaronPassword() {
	if(!$('.passwordInput').val()) {
		$('.passwordError').html('Please enter a valid password');
		return false;
	} else if ($('.passwordInput').val() === aaron.password) {
		$('.passwordError').html('');
		return true;
	} else {
		$('.passwordError').html('Your password was not correct. Please try again');
		return false;
	}
};

function manageAdminPassword() {
	if(!$('.passwordInput').val()) {
		$('.passwordError').html('Please enter a valid password');
		return false;
	} else if ($('.passwordInput').val() === admin.password) {
		$('.passwordError').html('');
		return true;
	} else {
		$('.passwordError').html('Your password was not correct. Please try again');
		return false;
	}
};

$('form').submit(function(e) {
	e.preventDefault;
	var adminEmailTrue = manageAdminEmail();
	var aaronEmailTrue = manageAaronEmail();
	var adminPasswordTrue = manageAdminPassword();
	var aaronPasswordTrue = manageAaronPassword();

	if(adminPasswordTrue && adminEmailTrue) {
		console.log('It worked');
		window.location = 'https://theironyard.com';
	} else if (aaronEmailTrue && aaronPasswordTrue) {
		console.log('It worked');
		window.location = 'https://theironyard.com';
	}
});

























