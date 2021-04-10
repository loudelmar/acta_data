<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT locali.nombre
                        FROM localidades AS locali
                        INNER JOIN departamentos ON departamentos.id=locali.id_departamento
                        ORDER BY locali.nombre");
$json_res = array();

while($f = $res->fetch_object()){
    array_push($json_res, $f);
}

echo json_encode($json_res);
?>