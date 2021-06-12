<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>

<?php
include('conexion.php');

# TODO: auth + create policy check
# TODO: sanitize params
# TODO: improve response

# Get the param
@$nombre=$_REQUEST['nombre'];

# Execute insert and print error if any
if (!$mysqli -> query("INSERT IGNORE INTO `paises`(`nombre`) VALUES ('$nombre')")) {
    echo '{"error": "'.$mysqli -> error.'"}'; 
    exit();
}

# Return success if everything went fine
echo json_encode(array('success' => true));
$mysqli->close();
?>
