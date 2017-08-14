<?php

$servername = "localhost";
$username = "root;
$password = "";
$dbname = "vocabulary";

// Create connection
$conn = new mysqli( $servername, $username, $password, $dbname);

// Check connection
if ( $conn->connect_error ) {
	die( "Connection failed: " . $conn->connect_error );
}

$sql = "SELECT term, definition FROM terms";
$result = $conn->query( $sql );

$q = $_REQUEST[ "q" ];
while ( $row = $result->fetch_assoc() ) {
	$x = $row[ "term" ];
	$y = $row[ "definition"];
	if ((strpos(strtolower($x), strtolower($q))) > -1 || (strpos(strtolower($y), strtolower($q))) > -1)
		echo "<h4><b>".$x. "</b></h4><p>". $y. "</p><br>";
}
?>
