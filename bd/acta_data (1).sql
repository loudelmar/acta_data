-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-04-2021 a las 23:53:34
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acta_data`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actas`
--

DROP TABLE IF EXISTS `actas`;
CREATE TABLE IF NOT EXISTS `actas` (
  `id_acta` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inscripcion_nacido` date NOT NULL,
  `id_obstetra` int(11) NOT NULL,
  `id_clinica` int(11) NOT NULL,
  `archivo_acta` int(11) NOT NULL,
  `id_nacido` int(11) NOT NULL,
  PRIMARY KEY (`id_acta`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `actas`
--

INSERT INTO `actas` (`id_acta`, `fecha_inscripcion_nacido`, `id_obstetra`, `id_clinica`, `archivo_acta`, `id_nacido`) VALUES
(1, '1998-02-17', 4, 1, 123456, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clinicas`
--

DROP TABLE IF EXISTS `clinicas`;
CREATE TABLE IF NOT EXISTS `clinicas` (
  `id_clinica` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `publico` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_clinica`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clinicas`
--

INSERT INTO `clinicas` (`id_clinica`, `nombre`, `publico`) VALUES
(1, 'Maternidad Privada', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
CREATE TABLE IF NOT EXISTS `departamentos` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_provincia` int(11) NOT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id_departamento`, `nombre`, `id_provincia`) VALUES
(1, 'Capital', 1),
(2, 'Castro Barros', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `id_nacido` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `id_sector_trabajo` int(11) NOT NULL,
  `archivo_empleado` int(11) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  `id_preg_seguridad` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `id_nacido`, `id_persona`, `id_sector_trabajo`, `archivo_empleado`, `contraseña`, `id_preg_seguridad`, `email`) VALUES
(1, 3, 6, 1, 1, 'xdxdxd', 2, 'empleadoregistro@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

DROP TABLE IF EXISTS `generos`;
CREATE TABLE IF NOT EXISTS `generos` (
  `id_genero` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  PRIMARY KEY (`id_genero`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id_genero`, `nombre`) VALUES
(1, 'Femenino'),
(2, 'Masculino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscriptos`
--

DROP TABLE IF EXISTS `inscriptos`;
CREATE TABLE IF NOT EXISTS `inscriptos` (
  `id_nacido` int(11) NOT NULL AUTO_INCREMENT,
  `dni` int(11) NOT NULL,
  `id_genero` int(11) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `id_localidad` int(11) NOT NULL,
  `barrio` varchar(500) NOT NULL,
  `calle` varchar(200) NOT NULL,
  `numero_calle` varchar(30) NOT NULL,
  `id_padre` int(11) NOT NULL,
  `id_madre` int(11) NOT NULL,
  PRIMARY KEY (`id_nacido`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `inscriptos`
--

INSERT INTO `inscriptos` (`id_nacido`, `dni`, `id_genero`, `fecha_nacimiento`, `id_localidad`, `barrio`, `calle`, `numero_calle`, `id_padre`, `id_madre`) VALUES
(1, 40775265, 1, '1998-02-17', 1, '', 'Jarilla', '1575', 4, 2),
(2, 23963589, 1, '1974-06-24', 1, '', 'Jarilla', '1575', 0, 0),
(4, 23670990, 2, '1974-01-07', 1, '', 'Jarilla', '1575', 0, 0),
(5, 12345678, 2, '1974-10-24', 1, '', '', '', 0, 0),
(6, 12345678, 1, '1998-02-17', 1, 'Shincal', 'Siempre Viva', '123', 1, 1),
(3, 12345678, 2, '1986-10-24', 2, 'Shincal', 'Cardon', '332', 5, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidades`
--

DROP TABLE IF EXISTS `localidades`;
CREATE TABLE IF NOT EXISTS `localidades` (
  `id_localidad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_departamento` int(11) NOT NULL,
  PRIMARY KEY (`id_localidad`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `localidades`
--

INSERT INTO `localidades` (`id_localidad`, `nombre`, `id_departamento`) VALUES
(1, 'La Rioja', 1),
(2, 'Anillaco', 2),
(3, 'San Blas de los Sauces', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obstetras`
--

DROP TABLE IF EXISTS `obstetras`;
CREATE TABLE IF NOT EXISTS `obstetras` (
  `id_persona` int(11) NOT NULL,
  PRIMARY KEY (`id_persona`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `obstetras`
--

INSERT INTO `obstetras` (`id_persona`) VALUES
(3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

DROP TABLE IF EXISTS `paises`;
CREATE TABLE IF NOT EXISTS `paises` (
  `id_pais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id_pais`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id_pais`, `nombre`) VALUES
(1, 'Argentina'),
(2, 'Chile');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

DROP TABLE IF EXISTS `personas`;
CREATE TABLE IF NOT EXISTS `personas` (
  `id_persona` int(11) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id_persona`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_persona`, `apellido`, `nombre`) VALUES
(1, 'Lede', 'Lourdes del Mar'),
(2, 'Mansilla', 'Susana'),
(3, 'Obstetra', 'Privado'),
(6, 'Potrerillo', 'Carlos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregs_seguridad`
--

DROP TABLE IF EXISTS `pregs_seguridad`;
CREATE TABLE IF NOT EXISTS `pregs_seguridad` (
  `id_preg_seguridad` int(11) NOT NULL AUTO_INCREMENT,
  `preg_seguridad` varchar(1000) NOT NULL,
  `respuesta` varchar(1000) NOT NULL,
  PRIMARY KEY (`id_preg_seguridad`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pregs_seguridad`
--

INSERT INTO `pregs_seguridad` (`id_preg_seguridad`, `preg_seguridad`, `respuesta`) VALUES
(1, '¿En qué año ingresaste al Registro Civil?', '2015'),
(2, '¿Cuál es la fecha de la última carga?', '17 de Febrero');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

DROP TABLE IF EXISTS `provincias`;
CREATE TABLE IF NOT EXISTS `provincias` (
  `id_provincia` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_pais` int(11) NOT NULL,
  PRIMARY KEY (`id_provincia`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id_provincia`, `nombre`, `id_pais`) VALUES
(1, 'La Rioja', 1),
(2, 'Catamarca', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sectores_trabajo`
--

DROP TABLE IF EXISTS `sectores_trabajo`;
CREATE TABLE IF NOT EXISTS `sectores_trabajo` (
  `id_sector_trabajo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id_sector_trabajo`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sectores_trabajo`
--

INSERT INTO `sectores_trabajo` (`id_sector_trabajo`, `nombre`) VALUES
(1, 'Encargado del Archivo'),
(2, 'Empleado del Archivo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
