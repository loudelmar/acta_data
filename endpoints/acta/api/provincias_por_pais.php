<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT provincias.nombre
    FROM provincias
    INNER JOIN paises ON paises.id_pais=provincias.id_pais
    ORDER BY provincias.nombre
");
$json_res = array();

while ($f = $res->fetch_object()) {
    array_push($json_res, $f);
}

echo json_encode($json_res);
?>