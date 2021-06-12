<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
?>
<?php
include('conexion.php');

#Params
$res = $mysqli->query("SELECT 
        inscriptos.dni,
        inscriptos.fecha_nacimiento as fechaNacimiento,
        personas.apellido, 
        personas.nombre,
        actas.fecha_inscripcion_nacido as fechaInscripcion,
        localidades.nombre as localidad,
        departamentos.nombre as departamento,
        clinicas.nombre as clinica
    FROM actas
    INNER JOIN personas ON personas.id_persona=actas.id_nacido
    INNER JOIN inscriptos ON personas.id_persona=inscriptos.id_nacido
    INNER JOIN generos ON generos.id_genero=inscriptos.id_genero
    INNER JOIN localidades ON localidades.id_localidad=inscriptos.id_localidad
    INNER JOIN departamentos ON departamentos.id_departamento=localidades.id_departamento
    INNER JOIN clinicas ON clinicas.id_clinica=actas.id_clinica
    ORDER BY personas.apellido, personas.nombre
");

$json_res = array();

while ($f = $res->fetch_object()) {
    array_push($json_res, $f);
}

echo json_encode($json_res);
?>