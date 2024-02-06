-- MySQL dump 10.13  Distrib 8.2.0, for macos13 (x86_64)
--
-- Host: localhost    Database: externatic_db
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8mb4 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Table structure for table `competence`
--

DROP TABLE IF EXISTS `competence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `competence` (
    `id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) DEFAULT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `competence`
--

LOCK TABLES `competence` WRITE;
/*!40000 ALTER TABLE `competence` DISABLE KEYS */
;

INSERT INTO
    `competence`
VALUES (1, 'html'),
    (2, 'css'),
    (3, 'javascript'),
    (4, 'angular'),
    (5, 'react'),
    (6, 'php'),
    (7, 'symphony'),
    (8, 'git'),
    (9, 'github'),
    (10, 'trello');
/*!40000 ALTER TABLE `competence` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `course` (
    `id` int NOT NULL AUTO_INCREMENT, `level` varchar(100) NOT NULL, `domaine` varchar(100) NOT NULL, `name` varchar(100) NOT NULL, `date_begin` date NOT NULL, `date_end` date NOT NULL, `description` text, `cv_id` int DEFAULT NULL, PRIMARY KEY (`id`), KEY `cv_id` (`cv_id`), CONSTRAINT `course_ibfk_1` FOREIGN KEY (`cv_id`) REFERENCES `cv` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */
;

INSERT INTO
    `course`
VALUES (
        1, 'Master 2', 'oçuzefoizj', 'oizjef', '2023-09-06', '2024-02-23', 'ziejfoizejpoizfje', 4
    );
/*!40000 ALTER TABLE `course` ENABLE KEYS */
;
UNLOCK TABLES;

--
-- Table structure for table `cv`
--

DROP TABLE IF EXISTS `cv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `cv` (
    `id` int NOT NULL AUTO_INCREMENT, `user_id` int DEFAULT NULL, PRIMARY KEY (`id`), KEY `user_id` (`user_id`), CONSTRAINT `cv_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `cv`
--

LOCK TABLES `cv` WRITE;
/*!40000 ALTER TABLE `cv` DISABLE KEYS */
;

INSERT INTO `cv` VALUES (3, 28), (4, 29);
/*!40000 ALTER TABLE `cv` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `experience` (
    `id` int NOT NULL AUTO_INCREMENT, `title` varchar(100) NOT NULL, `company` varchar(100) NOT NULL, `city` varchar(100) NOT NULL, `type` varchar(100) NOT NULL, `is_working` tinyint(1) DEFAULT NULL, `date_begin` date NOT NULL, `date_end` date DEFAULT NULL, `description` text, `cv_id` int NOT NULL, PRIMARY KEY (`id`), KEY `cv_id` (`cv_id`), CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`cv_id`) REFERENCES `cv` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */
;

INSERT INTO
    `experience`
VALUES (
        1, 'azrg', 'iegusrh', 'ouzgrh', 'alternance', 0, '2023-06-14', '2023-12-20', 'qmoirzjomrzigj', 4
    );
/*!40000 ALTER TABLE `experience` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `offer` (
    `id` int NOT NULL AUTO_INCREMENT, `title` varchar(100) NOT NULL, `company` varchar(100) NOT NULL, `type` varchar(100) NOT NULL, `city` varchar(100) NOT NULL, `mission` text NOT NULL, `search_profile` varchar(100) NOT NULL, `work_place` varchar(100) NOT NULL, `salary` varchar(100) NOT NULL, `info` text NOT NULL, `email` varchar(100) NOT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */
;

INSERT INTO
    `offer`
VALUES (
        1, 'Developpeur Web Front End', 'Inov\'Tech', 'CDD', 'Bordeaux', 'Tous les 2 ou 3 mois, de nouveaux projets en mode Agile sur les dernières stacks technologiques, toujours effectuées depuis notre plateau Factory pour progresser et développer vos compétences. 15% du temps consacré à des journées de partage technique, exploration, hack time rythmées par nos tribus Web, Mobile, Cloud... Journée de la Factory tous les mois : se retrouver physiquement en sortant des missions pour profiter et explorer ensemble ! Conférences privées organisées par Apple France, Microsoft Des participations à des conférences locales, nationales, internationales (WWDC, AWS Summit) Notre équipe de Chiefs Happiness Officiers bienveillants et surmotivés (animations, défis d\'équipe) : Jeux de sociétés tous les midis, dans les locaux, events d\'équipe mensuels, vrai bon café gratuit et illimité, baby-foot, mario-kart sur switch Construire un avenir positif en mettant le digital au service de l\'humain La possibilité de développer votre expertise Web ou bien de monter en compétences aussi sur Android, sur iOS ou sur la xR (Unity / Unreal Engine) avec les experts de l\'équipe Évoluer dans une entreprise qui encourage l\'audace, la curiosité et l\'envie d\'entreprendre', 'Junior', 'Présent', '35k €/an', 'Ce que nous vous proposons : Un accord télétravail pour télétravailler jusqu\'à 2 jours par semaine selon vos missions. Un package avantages intéressant : une mutuelle, un CSE, des titres restaurants, un accord d\'intéressement, des primes vacances et cooptation. Un accompagnement individualisé avec un mentor.', 'marie@externatic.fr'
    ),
    (
        2, 'Développeur Front-End', 'Diffusez', 'CDD', 'Lille', 'S\'approprier le besoin métier Développement front-end Connaissance du W3C Intégrer fidèlement sur base d\'une maquette Les missions seront réalisées sous la supervision du Responsable de Projet puis en autonomie selon les opportunités et l\'évolution des compétences.', 'Junior', 'Présent', '25k €/an', 'Ce que nous vous proposons : En étude d\'informatique Autonome et organisé(e), tu es doté(e) d\'un bon esprit d\'analyse et d\'innovation Esprit de synthèse, Réactivité, autonomie, rigueur et organisation Curieux, Esprit d\'équipe, Respect des délais imposés.', 'marie@externatic.fr'
    ),
    (
        3, 'Développeur Web Junior', 'SASU MADE IN SURVEYS', 'CDD', 'Lille', 'Nous recherchons une personne motivée et dynamique avec :\n    Un an d\'expérience,\n    De solides compétences en PHP,\n    La maitrise de MySQL, l\'intégration HTML - CSS,\n    La maitrise de JQuery,\n    Un bon niveau d\'anglais technique\n.........Tu te retrouves dans le profil de poste ? Alors envoie nous ta candidature :-).', 'Junior', 'Présent', '25k €/an', 'Mis Group, c\'est une équipe à taille humaine, jeune et dynamique, située en plein centre de Lille. Nous apportons notre expertise à des cabinets d\'études marketing à travers des solutions d\'études : études quantitatives en ligne, recrutements de consommateurs, locations de salles pour des réunions de consommateurs, réalisation de visites mystères, réalisation de tests de produits…', 'marie@externatic.fr'
    ),
    (
        4, 'STAGE DEVELOPPEUR WEB Web', 'Massy Production', 'CDD', 'Bordeaux', '- Connaissance des langages de programmation web tels que HTML5, CSS, JavaScript\n    - Connaissance des principaux Framework et bibliothèque web\n    - Forte motivation à apprendre et à se développer professionnellement.', 'Junior', 'Présent', '25k €/an', 'Nous recherchons un Stagiaire Développeur Web (H/F) pour rejoindre notre équipe dynamique. En tant que stagiaire, chez l\'association Nouvelle Voix, vous aurez l\'opportunité de mettre en pratique votre créativité et être force de proposition en terme de design ux/ui.', 'marie@externatic.fr'
    ),
    (
        5, 'Développeur informatique', 'Armée de Terre', 'CDI', 'Bordeaux', 'Vos qualités : très méthodique, goût prononcé pour la technologie, réactif\n    À partir du bac\n    Homme ou femme, de 18 à 29 ans\n    Nationalité française, en règle avec les obligations du service national JDC et jouissant de ses droits civiques.', 'Junior', 'Présent', '25k €/an', 'Votre spécialité consiste à développer des logiciels au profit du ministère des Armées au sein d\'un centre de développement. Sous la conduite d\'un chef de projet, vous assurez la maintenance d\'applications existantes et vous concevez de nouveaux logiciels liés aux besoins des armées. Vous soutenez les forces déployées depuis le territoire national et vous pouvez éventuellement être projetés sur des postes en dehors de votre compétence principale de développeur. Au bout de 4 à 6 ans, vous pouvez évoluer vers les métiers de la cybersécurité.', 'marie@externatic.fr'
    );
/*!40000 ALTER TABLE `offer` ENABLE KEYS */
;

UNLOCK TABLES;

INSERT INTO
    `offer`
VALUES (
        10, 'Développeur Web React', 'ReactInnovate Solutions', 'CDI', 'Toulouse', 'ReactInnovate Solutions, société axée sur le développement React, cherche un Développeur Web React pour rejoindre notre équipe à Toulouse en CDI. En tant que Développeur Web React, vous serez responsable de la conception et du développement d\'interfaces utilisateur modernes et réactives.Vous travaillerez sur des projets innovants et collaborerez avec d\'autres développeurs pour créer des applications web performantes.', 'Expérimenté', 'Présent', '45k €/an', 'Ce que nous vous proposons : Un environnement de travail dynamique, des projets variés, des opportunités d\'évolution, et la chance de contribuer à la création d\'applications web innovantes.', 'recrutement@reactinnovate.com'
    );

--
-- Table structure for table `offer_competence`
--

DROP TABLE IF EXISTS `offer_competence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `offer_competence` (
    `id` int NOT NULL AUTO_INCREMENT, `offer_id` int NOT NULL, `competence_id` int NOT NULL, PRIMARY KEY (`id`), KEY `offer_id` (`offer_id`), KEY `competence_id` (`competence_id`), CONSTRAINT `offer_competence_ibfk_1` FOREIGN KEY (`offer_id`) REFERENCES `offer` (`id`), CONSTRAINT `offer_competence_ibfk_2` FOREIGN KEY (`competence_id`) REFERENCES `competence` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `offer_competence`
--

LOCK TABLES `offer_competence` WRITE;
/*!40000 ALTER TABLE `offer_competence` DISABLE KEYS */
;

INSERT INTO
    `offer_competence`
VALUES (6, 2, 1),
    (7, 2, 2),
    (8, 2, 3),
    (9, 2, 8),
    (10, 2, 9),
    (11, 2, 10),
    (12, 3, 1),
    (13, 3, 2),
    (14, 3, 3),
    (15, 3, 5),
    (16, 3, 7),
    (17, 3, 9),
    (18, 4, 1),
    (19, 4, 2),
    (20, 4, 4),
    (21, 4, 5),
    (22, 4, 8),
    (23, 5, 1),
    (24, 5, 2),
    (25, 5, 3),
    (26, 5, 6),
    (27, 5, 10),
    (28, 6, 1),
    (29, 6, 2),
    (30, 6, 4),
    (31, 6, 5),
    (32, 6, 7),
    (33, 6, 9),
    (34, 7, 1),
    (35, 7, 2),
    (36, 7, 3),
    (37, 7, 6),
    (38, 7, 7),
    (39, 7, 10),
    (40, 8, 1),
    (41, 8, 2),
    (42, 8, 3),
    (43, 8, 6),
    (44, 8, 9),
    (45, 8, 10),
    (46, 9, 1),
    (47, 9, 2),
    (48, 9, 3),
    (49, 9, 4),
    (50, 9, 6),
    (51, 9, 8),
    (52, 9, 9),
    (53, 9, 10),
    (54, 10, 1),
    (55, 10, 2),
    (56, 10, 3),
    (57, 10, 4),
    (58, 10, 7),
    (59, 10, 10);
/*!40000 ALTER TABLE `offer_competence` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `upload`
--

DROP TABLE IF EXISTS `upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `upload` (
    `id` int NOT NULL AUTO_INCREMENT, `url` varchar(255) NOT NULL, PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 37 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */
;

INSERT INTO
    `upload`
VALUES (1, 'test.png'),
    (
        15, 'uploads/44a90d6d90e2afbe89185d37e4d207fa.avif'
    ),
    (
        16, 'uploads/6305ef1909aaad277d9d0ea07717bb78.avif'
    ),
    (
        17, 'uploads/366614fd2999c51d8f7808c0619709c3.avif'
    ),
    (
        18, 'uploads/fc076cdd697749f8c5deb2f3c73254aa.avif'
    ),
    (
        19, 'uploads/579a979806c57e081b51ec01d91d895d.avif'
    ),
    (
        20, 'uploads/81978fa5d090c0e82e0cef86518d24ce.jpeg'
    ),
    (
        21, 'uploads/b51ede05c59aa5900da8286712f9cd84.avif'
    ),
    (
        22, 'uploads/474a7514e8c7f819be7507aaafdff0ac.avif'
    ),
    (
        23, 'uploads/a5b936d5021ad4e39b9fdde854516e54.jpeg'
    ),
    (
        24, 'uploads/8bbfcd96a630d4ce737a4595f554f291.avif'
    ),
    (
        25, 'uploads/5da8f58d0cf48662aaaef896e9da8fb8.jpeg'
    ),
    (
        26, 'uploads/3a606ee834062c494bb58d354e1b5281.avif'
    ),
    (
        27, 'uploads/18a2b06a7d7d11fa4cb419c85c69dd6b.jpeg'
    ),
    (
        28, 'uploads/bac313a477d3df550b1dc138ec983476.avif'
    ),
    (
        29, 'uploads/b11e12541f8b4bfceb386bd252876ffc.jpeg'
    ),
    (
        30, 'uploads/b6912486e646108866b8aa6e59cb8322.avif'
    ),
    (
        31, 'uploads/2b043441e714585af2af8e6662d4f8c0.jpeg'
    ),
    (
        32, 'uploads/b890731359acf2afdc624ed850b66ef2.avif'
    ),
    (
        33, 'uploads/6ca3e2c31997691c97d7f3819ad56990.jpeg'
    ),
    (
        34, 'uploads/880a1fe38eb6b3f6757e77d54703af6a.avif'
    ),
    (
        35, 'uploads/f7be666dcbbacb3e7375791f133d0c9a.jpeg'
    ),
    (
        36, 'uploads/05d0d336a101ed3b078b4153b7378bf8.avif'
    );
/*!40000 ALTER TABLE `upload` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT, `firstname` varchar(100) NOT NULL, `lastname` varchar(100) NOT NULL, `phone` varchar(100) NOT NULL, `email` varchar(100) NOT NULL, `address` varchar(155) NOT NULL, `password` varchar(100) NOT NULL, `is_admin` tinyint(1) NOT NULL, `upload_url` varchar(255) NOT NULL, PRIMARY KEY (`id`), UNIQUE KEY `email` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 30 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */
;

INSERT INTO
    `user`
VALUES (
        1, 'johny', 'demo', '06 87 27 48 94', 'john.doe@externatic.com', '45 rue des cocotiers, Perpignan, 66100', '$2b$05$qmUzhYqnfbiQyfY0NZXaueKkDbInhO4pzZGuLnTT5JAUq5BJgdbeK', 0, 'loremipsul-mdolor'
    ),
    (
        28, 'erftgyhuj', 'rfghj', 'rftgyhuj', 'adrien.russo@gmail.com', 'dcfvgbh', '$2b$05$8K8lbcHYqN5jZqO8mFzLW.YC8n4yVcIjk8fyz18Ud/vgkMVmfhR/i', 0, ''
    ),
    (
        29, 'cass', 'cassiergegr', '098320498', 'cass@gmail.com', 'ç!\"\'(è rye àéç\"!àçé', '$2b$05$AnyuQBLohvbHr79KdBOj9OWmJfpu8ulSY2G2LQgqz/whDlSy1qKbq', 0, 'uploads/05d0d336a101ed3b078b4153b7378bf8.avif'
    );
/*!40000 ALTER TABLE `user` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `user_competence`
--

DROP TABLE IF EXISTS `user_competence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `user_competence` (
    `id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `competence_id` int NOT NULL, PRIMARY KEY (`id`), KEY `user_id` (`user_id`), KEY `competence_id` (`competence_id`), CONSTRAINT `user_competence_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`), CONSTRAINT `user_competence_ibfk_2` FOREIGN KEY (`competence_id`) REFERENCES `competence` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 26 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `user_competence`
--

LOCK TABLES `user_competence` WRITE;
/*!40000 ALTER TABLE `user_competence` DISABLE KEYS */
;

INSERT INTO
    `user_competence`
VALUES (2, 28, 1),
    (3, 28, 2),
    (4, 28, 3),
    (19, 29, 1),
    (20, 29, 2),
    (21, 29, 3),
    (22, 29, 5),
    (23, 29, 8),
    (24, 29, 9),
    (25, 29, 10);
/*!40000 ALTER TABLE `user_competence` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping routines for database 'externatic_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2024-02-04 18:55:20