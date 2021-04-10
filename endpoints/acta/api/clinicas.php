<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT DISTINCT clinicas.nombre AS nombre,
clinicas.publico AS publicoprivado
FROM clinicas
ORDER BY clinicas.nombre");

$json_res = array();

while($f = $res->fetch_object()){
    array_push($json_res, $f);
}

echo json_encode($json_res);

?>