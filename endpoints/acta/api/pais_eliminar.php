<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>

<?php
include('conexion.php');

# TODO: auth + delete policy check
# TODO: sanitize params
# TODO: improve response

# Get the param
@$id=$_REQUEST['id'];

# TODO: check if the country should be deleted (just if there is no province associated to it)

# Execute delete and print error if any
$sql = "DELETE FROM `paises` WHERE id_pais='$id'";
if ($mysqli->query($sql) === false) {
	echo json_encode(array('error' => $mysqli->error));
	$mysqli->close();
	exit();
}

# Return success if everything went fine
echo json_encode(array('success' => true));
$mysqli->close();
?>