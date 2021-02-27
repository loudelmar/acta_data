<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT DISTINCT personas.apellido AS apellido,
personas.nombre AS nombre,
inscriptos.dni AS dni,
inscriptos.fecha_nacimiento AS fechaNacimiento,
departamentos.nombre AS departamento,
localidades.nombre AS localidad 
FROM inscriptos
INNER JOIN actas ON actas.id_nacido=inscriptos.id
INNER JOIN personas ON personas.id=actas.id_nacido
INNER JOIN localidades ON localidades.id=inscriptos.id_localidad
INNER JOIN departamentos ON departamentos.id=localidades.id_departamento
ORDER BY personas.apellido");

$json_res = array();

while($f = $res->fetch_object()){
    array_push($json_res, $f);
}

echo json_encode($json_res);

?>