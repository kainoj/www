
$(document).ready(function() {
	var okLogin = false;
	var okPws = false;
	var okDate = false;

	function formIsValid() {
		if( okLogin && okPws && okDate ) 
			$("#sub").css("visibility", "visible");
		else 
			$("#sub").css("visibility", "hidden");
	}
	
	$("#login").focusout(function() {
		$.post("form-validation.php", 
			{ 
				login: $("#login").val() 
			},
			function(data,status,xhr) {
				if( data == "valid" ) {
					$("#login").css("background-color", "#c7ffad");
					okLogin = true;
				}
				else {
					$("#login").css("background-color", "#ffdbd1");
					okLogin = false;
				}
				formIsValid();
				console.log("Login is " + data);
			// console.log(status);
			//	console.log(xhr);
			//	$("#info").html(data);
		})
	});

	$("#pw2").focusout(function() {
		$.post("form-validation.php", 
			{
				pw:  $("#pw").val(), 
				pw2: $("#pw2").val(), 
			},

			function(data,status,xhr) {
				if( data == "valid" ) {
					$("#pw").css("background-color", "#c7ffad");
					$("#pw2").css("background-color", "#c7ffad");
					$("#info").html("Passwords match.");
					okPws = true;
				}
				else {
					$("#pw").css("background-color", "#ffdbd1");
					$("#pw2").css("background-color", "#ffdbd1");
					$("#info").html("Passwords don't match.");
					okPws = false;
				}
				formIsValid();
				console.log("Passwords are " + data);
			
		})
	});

$("#birthDate").focusout(function() {
		$.post("form-validation.php", 
			{
			 bdate: $("#birthDate").val() 
			},
			function(data,status,xhr) {
				if( data == "valid" ) {
					$("#birthDate").css("background-color", "#c7ffad");
					okDate = true;
				}
				else {
					$("#birthDate").css("background-color", "#ffdbd1");
					okDate = false;
				}
				formIsValid();
				console.log("Britdate is " + data);
		})
	});
	


});
