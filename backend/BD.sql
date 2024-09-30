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
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.alunos: ~1 rows (aproximadamente)
INSERT INTO `alunos` (`id`, `user`, `senha`) VALUES
	(34, 'Duda', '123');

-- Copiando estrutura para tabela trabalho final.professors
CREATE TABLE IF NOT EXISTS `professors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.professors: ~1 rows (aproximadamente)
INSERT INTO `professors` (`id`, `user`, `senha`) VALUES
	(8, 'Prof. Zé', '1234');

-- Copiando estrutura para tabela trabalho final.provas
CREATE TABLE IF NOT EXISTS `provas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  `consulta` varchar(50) NOT NULL DEFAULT '0',
  `ferramentas` varchar(50) NOT NULL DEFAULT '0',
  `quaisfer` varchar(100) DEFAULT '0',
  `especificacoes` text NOT NULL,
  `tempo` varchar(50) NOT NULL DEFAULT '0',
  `data` date NOT NULL,
  `turma` text NOT NULL,
  `disciplina` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.provas: ~2 rows (aproximadamente)
INSERT INTO `provas` (`id`, `tipo`, `consulta`, `ferramentas`, `quaisfer`, `especificacoes`, `tempo`, `data`, `turma`, `disciplina`) VALUES
	(7, 'Escrita', 'Não', 'Sim', 'Calculadora', 'A prova será sobre as aplicações da fórmula de Bhaskara.', '1 aula', '2024-10-07', '1°1, 1°2, 1°3, 1°4 e 1°5', 'Matemática'),
	(8, 'Escrita', 'Sim', 'Não', '----', 'A prova será um questionário sobre as regiões, estados, siglas e capitais do Brasil.', '2 aulas', '0000-00-00', '2°1, 2°2, 2°3 e 2°4', 'Geografia');

-- Copiando estrutura para tabela trabalho final.trabalhos
CREATE TABLE IF NOT EXISTS `trabalhos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  `cab` varchar(50) NOT NULL DEFAULT '0',
  `infocab` varchar(100) DEFAULT '0',
  `titulo` varchar(100) NOT NULL DEFAULT '0',
  `assunto` text NOT NULL,
  `explicacao` text NOT NULL,
  `referencia` varchar(50) NOT NULL DEFAULT '0',
  `ap` varchar(50) NOT NULL DEFAULT '0',
  `detap` text DEFAULT NULL,
  `dataentrega` date NOT NULL,
  `dataap` date DEFAULT NULL,
  `turma` text NOT NULL,
  `disciplina` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_nopad_ci;

-- Copiando dados para a tabela trabalho final.trabalhos: ~2 rows (aproximadamente)
INSERT INTO `trabalhos` (`id`, `tipo`, `cab`, `infocab`, `titulo`, `assunto`, `explicacao`, `referencia`, `ap`, `detap`, `dataentrega`, `dataap`, `turma`, `disciplina`) VALUES
	(9, 'Pesquisa escrita', 'Sim', 'Escola, nome, data e disciplina', 'As Jacqueries', 'Revoltas Jacqueries', 'Texto contendo as motivações, o que foram e quando começaram as revoltas Jacqueries.', 'Sim', 'Não', '', '2024-09-25', '2024-10-17', '2°1, 2°2, 2°3 e 2°4', 'História'),
	(10, 'Trabalho artístico e cartaz', 'Não', '--', 'Escultura Indígena', 'Arte indígena brasileira', 'Os alunos devem replicar as esculturas indígenas em sala de aula e fazer um cartaz sobre o quê essa arte significa para o povo indígena e por que a realizam desse jeito.', 'Não', 'Sim', 'A desenvoltura, aprofundamento e entendimento dos alunos sobre o trabalho será avaliada. Não é permitida leitura.', '2024-10-16', '2024-10-16', '2°1 e 2°2', 'Artes');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
