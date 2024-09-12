-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para trabalho final
CREATE DATABASE IF NOT EXISTS `trabalho final` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_nopad_ci */;
USE `trabalho final`;

-- Copiando estrutura para tabela trabalho final.alunos
CREATE TABLE IF NOT EXISTS `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `senha` (`senha`) USING BTREE,
  UNIQUE KEY `user` (`user`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.alunos: ~2 rows (aproximadamente)
INSERT INTO `alunos` (`id`, `user`, `senha`) VALUES
	(1, 'Zézinho', ''),
	(2, '41452', '543'),
	(3, 'gabriel', '1602');

-- Copiando estrutura para tabela trabalho final.professors
CREATE TABLE IF NOT EXISTS `professors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `user` (`user`) USING BTREE,
  UNIQUE KEY `senha` (`senha`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.professors: ~3 rows (aproximadamente)
INSERT INTO `professors` (`id`, `user`, `senha`) VALUES
	(1, 'Jeuri', 'Karlmarxislove'),
	(2, '4145', '54'),
	(3, '41452', '543');

-- Copiando estrutura para tabela trabalho final.provas
CREATE TABLE IF NOT EXISTS `provas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  `consulta` varchar(50) NOT NULL DEFAULT '0',
  `ferramentas` varchar(50) NOT NULL DEFAULT '0',
  `quaisfer` varchar(50) DEFAULT '0',
  `especificacoes` text NOT NULL,
  `tempo` varchar(50) NOT NULL DEFAULT '0',
  `data` date NOT NULL,
  `turma` decimal(20,6) NOT NULL DEFAULT 0.000000,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.provas: ~0 rows (aproximadamente)
INSERT INTO `provas` (`id`, `tipo`, `consulta`, `ferramentas`, `quaisfer`, `especificacoes`, `tempo`, `data`, `turma`) VALUES
	(1, 'Escrita', 'Sim', '0', 'Dicionário', 'Assuntos: Comidas em alemão. Especificações: não tem :)', 'uma aula', '0000-00-00', 2.100000);

-- Copiando estrutura para tabela trabalho final.trabalhos
CREATE TABLE IF NOT EXISTS `trabalhos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  `cab` varchar(50) NOT NULL DEFAULT '0',
  `infocab` varchar(50) DEFAULT '0',
  `titulo` varchar(50) NOT NULL DEFAULT '0',
  `assunto` varchar(50) NOT NULL DEFAULT '0',
  `explicacao` text NOT NULL,
  `referencia` varchar(50) NOT NULL DEFAULT '0',
  `ap` varchar(50) NOT NULL DEFAULT '0',
  `detap` text DEFAULT NULL,
  `dataentrega` date NOT NULL,
  `dataap` date DEFAULT NULL,
  `turma` decimal(20,6) NOT NULL DEFAULT 0.000000,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.trabalhos: ~0 rows (aproximadamente)
INSERT INTO `trabalhos` (`id`, `tipo`, `cab`, `infocab`, `titulo`, `assunto`, `explicacao`, `referencia`, `ap`, `detap`, `dataentrega`, `dataap`, `turma`) VALUES
	(1, 'Slides', 'Sim', 'Nome, turma, data', 'Como Roubar um Banco: Guia Prático do Prudaz', 'Ensine os aluninhos a roubar um banco, bem passo a', 'Trabalho autoexlicativo, eficiência dos métodos será avaliada', 'Não', 'Sim', 'A nota depende do sucesso do assalto com base na explicação', '0000-00-00', '0000-00-00', 2.100000);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
