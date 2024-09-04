-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 04-09-2024 a las 02:55:42
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
(2, '¡Antes de salir, lee esto!', 'Como planear una salida con tu grupo.', ' Para disfrutar de salidas en moto, considera los siguientes consejos:\r\n<br>\r\n1. Preparación Antes de la Salida\r\nRevisión de la Motocicleta: Antes de cada salida, realiza una inspección rápida de tu moto. Verifica los niveles de aceite, refrigerante y combustible. Asegúrate de que los frenos, luces y señales funcionen correctamente.\r\nEquipamiento de Seguridad: Usa siempre un casco homologado y considera usar otros elementos de protección como chaquetas, guantes, pantalones y botas diseñados para motociclistas. Esto no solo te protege en caso de accidente, sino que también te brinda comodidad durante el viaje.\r\n<br>\r\n2. Planificación de la Ruta\r\nElige la Ruta: Planifica tu ruta con antelación. Considera el tráfico, las condiciones climáticas y el tipo de carretera. Las carreteras secundarias suelen ser más agradables y menos congestionadas que las autopistas.\r\nParadas Programadas: Si planeas un viaje largo, programa paradas para descansar, hidratarte y estirar las piernas. Esto es crucial para mantener la concentración y evitar la fatiga.\r\n<br>\r\n3. Conducción Segura\r\nPosición de Conducción: Mantén una postura cómoda y relajada. Asegúrate de que tus pies estén en los estribos y tus manos en el manillar. Esto te permitirá reaccionar rápidamente ante cualquier situación.\r\nMantén la Distancia: Mantén una distancia segura con otros vehículos. Esto te dará tiempo para reaccionar ante cualquier imprevisto, como frenadas bruscas o cambios de carril inesperados.\r\nAnticipación: Observa el tráfico y anticipa las acciones de otros conductores. Mantente alerta a las señales de tráfico, peatones y ciclistas.\r\n<br>\r\n4. Condiciones Climáticas\r\nClima Adverso: Si las condiciones climáticas son malas (lluvia, nieve, niebla), considera posponer tu salida. Si decides salir, ajusta tu velocidad y mantén una mayor distancia de seguridad.\r\nCalzado y Ropa: Usa ropa adecuada para el clima. En días fríos, asegúrate de llevar capas que te mantengan caliente. En días calurosos, opta por ropa ventilada y ligera.\r\n<br>\r\n5. Comportamiento en la Carretera\r\nSeñalización: Usa siempre las señales de giro y asegúrate de que otros conductores te vean. Esto es especialmente importante en intersecciones y al cambiar de carril.\r\nEvita Distracciones: Mantén la concentración en la carretera. Evita usar el teléfono móvil o cualquier otra distracción mientras conduces.\r\nConducción en Grupo: Si viajas con otros motociclistas, establece un orden y mantén una formación adecuada. Mantén una distancia segura entre las motos y comunica cualquier cambio de dirección o velocidad.\r\n<br>\r\n6. Manejo de Emergencias\r\nFrenado: Practica el frenado suave y controlado. Usa ambos frenos (delantero y trasero) para detenerte de manera efectiva.\r\nEvasión: Si necesitas esquivar un obstáculo, inclina la moto en la dirección opuesta y mantén la calma. Evita movimientos bruscos que puedan desestabilizar la moto.\r\n<br>\r\n7. Al Finalizar el Viaje\r\nRevisión Post-Viaje: Después de cada salida, revisa tu moto nuevamente. Verifica el estado de los neumáticos, frenos y cualquier otro componente que pueda haber sufrido desgaste durante el viaje.\r\nLimpieza: Limpia tu moto para eliminar suciedad y residuos. Esto no solo mejora su apariencia, sino que también ayuda a prevenir la corrosión.\r\n<br>'),
(5, 'Cuidados para tener en cuenta', 'Para un adecuado mantenimiento de tu motocicleta, considera los siguientes consejos:', ' <br>\r\n1. Inspección de Neumáticos\r\nPresión: Verifica la presión de los neumáticos al menos una vez al mes. La presión adecuada se encuentra en el manual del propietario o en una etiqueta en la motocicleta.\r\nDesgaste: Revisa el desgaste de la banda de rodadura. Si las ranuras están desgastadas, es hora de reemplazarlos. También busca cortes o burbujas en los neumáticos.\r\n<br>\r\n2. Cambio de Aceite\r\nFrecuencia: Cambia el aceite y el filtro de aceite cada 5,000 kilómetros o según lo recomendado por el fabricante.\r\nTipo de aceite: Utiliza el tipo de aceite especificado en el manual del propietario. Asegúrate de que el aceite esté en el nivel adecuado antes de cada viaje.\r\n<br>\r\n3. Sistema de Frenos\r\nPastillas de freno: Inspecciona las pastillas de freno cada 1,000 kilómetros. Si están desgastadas, cámbialas inmediatamente.\r\nLíquido de frenos: Revisa el nivel del líquido de frenos y cámbialo cada dos años para asegurar un rendimiento óptimo.\r\n4. Filtro de Aire\r\n<br>\r\nLimpieza: Limpia el filtro de aire cada 10,000 kilómetros. Si es de papel, cámbialo si está sucio.\r\nRendimiento: Un filtro limpio mejora la eficiencia del combustible y el rendimiento del motor.\r\n<br>\r\n5. Revisión de Líquidos\r\nRefrigerante: Verifica el nivel del refrigerante y asegúrate de que no haya fugas. Cambia el refrigerante cada dos años.\r\nLíquido de transmisión: Revisa el nivel y la calidad del líquido de transmisión, especialmente en motocicletas con transmisión automática.\r\n<br>\r\n6. Cadena y Transmisión\r\nLubricación: Lubrica la cadena cada 500 kilómetros y ajusta la tensión según las especificaciones del fabricante.\r\nRevisión: Inspecciona la cadena y los piñones por desgaste y reemplázalos si es necesario.\r\n<br>\r\n7. Batería\r\nCarga: Revisa la carga de la batería regularmente. Limpia los terminales y asegúrate de que estén bien conectados.\r\nReemplazo: Cambia la batería cada 2-3 años o si notas que la motocicleta tiene dificultades para arrancar.\r\n<br>\r\n8. Luces y Señales\r\nFuncionamiento: Verifica que todas las luces, incluyendo faros, luces de freno y señales de giro, funcionen correctamente.\r\nLimpieza: Limpia las lentes de las luces para asegurar una buena visibilidad.\r\n<br>\r\n9. Limpieza General\r\nLimpieza: Lava la motocicleta regularmente para eliminar suciedad y residuos. Usa productos específicos para motocicletas.\r\nProtección: Aplica cera o sellador para proteger la pintura y los componentes metálicos.\r\n<br>\r\n10. Revisión General\r\nInspección: Realiza una inspección general de la motocicleta cada 10,000 kilómetros. Esto incluye revisar el chasis, suspensión y componentes eléctricos.\r\nManual del propietario: Siempre consulta el manual del propietario para seguir las recomendaciones específicas del fabricante.\r\nConclusión ');

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=41 ;

--
-- Volcado de datos para la tabla `experiencias`
--

INSERT INTO `experiencias` (`id`, `titulo`, `texto`, `img_id`) VALUES
(40, 'Salida de Cordoba - Mendoza', '     Un viaje en moto de Córdoba a Mendoza, pasando por Alta Gracia, Copina, Mina Clavero, Villa Dolores, RN20, San Luis, Punta de Médano, Encon y finalmente llegando al Valle de Uco, es una experiencia llena de paisajes impresionantes y momentos memorables. Aquí te presento un relato de cómo fué travesía: ... Ver mas >>>\r\n', 'qhqb9jowzl2wh4bmf2sr'),
(37, 'Titulo', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea\r\n              dolore esse numquam laboriosam soluta similique ad placeat\r\n              minima impedit, iure quasi quam facere vel quos eius harum\r\n              cupiditate animi commodi!', 'jpnhiv9suvgodom0ay3h'),
(36, 'Titulo!', '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea\r\n              dolore esse numquam laboriosam soluta similique ad placeat\r\n              minima impedit, iure quasi quam facere vel quos eius harum\r\n              cupiditate animi commodi!  ', 'guzif1w4sq1c72ontjcf');

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
