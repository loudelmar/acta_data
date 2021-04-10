<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT DISTINCT empleados.email AS Mail,
inscriptos.dni AS dni,
personas.nombre AS nombre,
personas.apellido AS apellido,
inscriptos.fecha_nacimiento AS fechaNacimiento,
sectores_trabajo.nombre AS sectorTrabajo,
pregs_seguridad.preg_seguridad AS preguntaSeguridad,
pregs_seguridad.respuesta AS respuestaPreguntaSeguridad,
empleados.archivo_empleado AS fotoEmpleado
FROM empleados
INNER JOIN inscriptos ON inscriptos.id_nacido=empleados.id_nacido
INNER JOIN personas ON personas.id_persona=empleados.id_persona
INNER JOIN sectores_trabajo ON sectores_trabajo.id_sector_trabajo=empleados.id_sector_trabajo
INNER JOIN pregs_seguridad ON pregs_seguridad.id_preg_seguridad=empleados.id_preg_seguridad
ORDER BY empleados.id_empleado");

$json_res = array();

while($f = $res->fetch_object()){
    array_push($json_res, $f);
}

echo json_encode($json_res);
?>