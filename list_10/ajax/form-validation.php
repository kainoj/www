<?php
header( "Cache-Control: max-age=-1" );

$ok = "valid";


	if( !empty($_POST["login"]) && strcmp($_POST["login"], "log") == 0 ) {
		echo $ok;
		return;
	}

	if( !empty($_POST["pw"]) && strcmp($_POST["pw"],$_POST["pw2"]) == 0) {
		echo $ok;
		return;
	}

	if (preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$_POST["bdate"])) {
		echo $ok;
		return;
	}


	echo "invalid";





/*
if($_POST["password"] != $_POST["password2"]) {
	$msg = $msg . "Passwords dotn match:(<br/>";
}

if (preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$_POST["date"])) {
    $msg = $msg . "Invalid date<br/>";
}*/

// $_POST["login"] != ""

//echo $_POST["login"];
?>