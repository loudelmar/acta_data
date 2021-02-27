<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

$id_persona=$_REQUEST['id_persona'];

#Params
$res = $mysqli->query("SELECT DISTINCT inscriptos.dni AS dni,
                                       personas.nombre AS nombre,
                                       personas.apellido AS apellido,
                                       generos.nombre AS genero,
                                       inscriptos.fecha_nacimiento AS fechaNacimiento,
                                       actas.fecha_inscripcion_nacido AS fechaInscripcion,
                                       departamentos.nombre AS departamento,
                                       localidades.nombre AS localidad,
                                       inscriptos.barrio AS barrio,
                                       inscriptos.calle AS calle,
                                       inscriptos.numero_calle AS numero,
                                       actas.id_obstetra AS obstetra,
                                       clinicas.nombre AS clinica,
                                       clinicas.publico AS publica,
                                       inscriptos.id_madre AS madre,
                                       inscriptos.id_padre AS padre,
                                       actas.archivo_acta AS fotoActa
                        FROM inscriptos
                        INNER JOIN actas ON actas.id_nacido=inscriptos.id
                        INNER JOIN personas ON personas.id=actas.id_nacido
                        INNER JOIN generos ON generos.id=inscriptos.id_genero
                        INNER JOIN localidades ON localidades.id=inscriptos.id_localidad
                        INNER JOIN departamentos ON departamentos.id=localidades.id_departamento
                        INNER JOIN clinicas ON clinicas.id=actas.id_clinica
                        ORDER BY personas.apellido");

echo json_encode($res->fetch_object());
?>