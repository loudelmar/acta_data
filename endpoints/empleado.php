<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

$id_persona=$_REQUEST['id_persona'];

#Params
$res = $mysqli->query("SELECT DISTINCT empleados.email AS Mail,
                                       inscriptos.dni AS DNI,
                                       personas.nombre AS Nombre,
                                       personas.apellido AS Apellido,
                                       personas.fecha_nacimiento AS Fecha_Nacimiento,
                                       sectores_trabajo.nombre AS Sector_Trabajo,
                                       pregs_seguridad.preg_seguridad AS Pregunta_Seguridad,
                                       pregs_seguridad.respuesta AS Respuesta_Pregunta_Seguridad,
                                       empleados.archivo_empleado AS Foto_Empleado
                        FROM personas JOIN empleados
                        INNER JOIN sectores_trabajo ON sectores_trabajo.id=empleados.id_sector_trabajo
                        INNER JOIN pregs_seguridad ON pregs_seguridad.id=empleados.id_preg_seguridad
                        WHERE personas.id=$id_persona");

echo json_encode($res->fetch_object());
?>