//Setting up a constructor for my two objects
function UserLogin (email, password) {
	this.email = email;
	this.password = password;
}

//Creating both objects for aaron's login and admin's login
var aaron = new UserLogin('aaron@theironyard.com', 'password123');
var admin = new UserLogin('admin@google.com', 'pandas');

//Setting up the event listener that runs this entire page
$('button').on('click', function(e) {
	e.preventDefault;
	//Creating the variables for the email input and password input
	var emailAddress = $('.emailInput');
	var password = $('.passwordInput');

	//Setting up the if statement that determines if any error messages should pop up for the email
	if(!emailAddress.val().split('').includes('@') || !emailAddress.val()) {
		$('.emailError').html('Please enter a valid email address.');
	} else if (emailAddress.val() !== aaron.email && emailAddress.val() !== admin.email) {
		$('.emailError').html('This email was not found. Please try again.');
	}
	//Setting up the if statement that determines if any error messages should pop up for the password
	if(!password.val()) {
		$('.passwordError').html('Please enter a valid password');
	}
	else if (password.val() !== aaron.password && password.val() !== admin.password) {
		$('.passwordError').html('This password was incorrect. Please try again.');
	}
	//Setting up the if statement that determines if aaron can log in and what to do when he does
	if(emailAddress.val() === aaron.email && password.val() === aaron.password) {
		console.log('It worked');
		$('.emailError').html('');
		$('.passwordError').html('');
		window.location = 'http://theironyard.com';

	}
	//Setting up the if statement that determines if the admin can log in and what to do when it does
	if (emailAddress.val() === admin.email && password.val() === admin.password) {
		console.log('It worked');
		$('.emailError').html('');
		$('.passwordError').html('');
		window.location = 'http://theironyard.com';
	}
});