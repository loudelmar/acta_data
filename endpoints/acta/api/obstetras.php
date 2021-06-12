<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT DISTINCT personas.apellido AS apellido,
                    personas.nombre AS nombre
    FROM personas
    INNER JOIN obstetras ON obstetras.id_persona=personas.id_persona
    ORDER BY personas.apellido
");

$json_res = array();

while ($f = $res->fetch_object()) {
    array_push($json_res, $f);
}

echo json_encode($json_res);

?>