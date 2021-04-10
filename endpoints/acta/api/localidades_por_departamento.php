<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT localidades.nombre
    FROM localidades
    INNER JOIN departamentos ON departamentos.id_departamento=localidades.id_departamento
    ORDER BY localidades.nombre
");
$json_res = array();

while ($f = $res->fetch_object()) {
    array_push($json_res, $f);
}

echo json_encode($json_res);
?>