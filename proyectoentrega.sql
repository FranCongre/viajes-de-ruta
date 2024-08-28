-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 28-08-2024 a las 15:36:45
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proyectoentrega`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consejos`
--

CREATE TABLE IF NOT EXISTS `consejos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `texto` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `consejos`
--

INSERT INTO `consejos` (`id`, `titulo`, `subtitulo`, `texto`) VALUES
(2, '¡Antes de salir, lee esto!', 'Como planear una salida con tu grupo.', 'Para disfrutar de salidas en moto, considera los siguientes consejos:\r\n\r\nPlanifica la ruta: Asegúrate de tener una idea clara del recorrido y los lugares de interés.\r\nRealiza paradas y descansos: No te excedas en las distancias diarias, sobre todo si estás de turismo; es importante descansar y disfrutar del viaje.\r\nRevisa tu moto: Antes de salir, chequea que tu moto esté en buenas condiciones, incluyendo frenos, luces y neumáticos.\r\nEquipaje ligero: Lleva solo lo esencial para no sobrecargar la moto.\r\nEquípate adecuadamente: Usa ropa y equipo de seguridad apropiado como casco, chaqueta y guantes.\r\nRecuerda siempre verificar la información de seguridad y las condiciones del clima antes de salir.'),
(5, 'hola', 'como', 'estas?  prueba asdsadsad ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencias`
--

CREATE TABLE IF NOT EXISTS `experiencias` (
  `id` int(80) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `texto` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Volcado de datos para la tabla `experiencias`
--

INSERT INTO `experiencias` (`id`, `titulo`, `texto`, `img_id`) VALUES
(12, 'kakakakakaka', ' kakakakakakakaaka', 'cqt20oa3emlil31h4hoq'),
(13, 'Hola', ' como estas?', 'caivpoy07noa58q7ppl5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Franco', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Flor', 'd93591bdf7860e1e4ee2fca799911215');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
