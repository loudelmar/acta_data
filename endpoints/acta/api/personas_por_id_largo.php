<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

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
INNER JOIN actas ON actas.id_nacido=inscriptos.id_nacido
INNER JOIN personas ON personas.id_persona=actas.id_nacido
INNER JOIN generos ON generos.id_genero=inscriptos.id_genero
INNER JOIN localidades ON localidades.id_localidad=inscriptos.id_localidad
INNER JOIN departamentos ON departamentos.id_departamento=localidades.id_departamento
INNER JOIN clinicas ON clinicas.id_clinica=actas.id_clinica
ORDER BY personas.apellido");

$json_res = array();

while($f = $res->fetch_object()){
    array_push($json_res, $f);
}

echo json_encode($json_res);

?>