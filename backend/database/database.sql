-- MySQL dump 10.13  Distrib 8.2.0, for macos13 (arm64)
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

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `competence` (
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
    (10, 'trello')
ON DUPLICATE KEY UPDATE
    `id` = VALUES(`id`),
    `name` = VALUES(`name`);

/*!40000 ALTER TABLE `competence` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `course`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `course` (
    `id` int NOT NULL AUTO_INCREMENT, `level` varchar(100) NOT NULL, `domaine` varchar(100) NOT NULL, `name` varchar(100) NOT NULL, `date_begin` date NOT NULL, `date_end` date NOT NULL, `description` text, `cv_id` int DEFAULT NULL, PRIMARY KEY (`id`), KEY `cv_id` (`cv_id`), CONSTRAINT `course_ibfk_1` FOREIGN KEY (`cv_id`) REFERENCES `cv` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */
;
/*!40000 ALTER TABLE `course` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `cv`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `cv` (
    `id` int NOT NULL AUTO_INCREMENT, `user_id` int DEFAULT NULL, PRIMARY KEY (`id`), KEY `user_id` (`user_id`), CONSTRAINT `cv_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

CREATE TABLE upload (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, url VARCHAR(255) NOT NULL
);

INSERT INTO
    upload
VALUES ("1", "test.png")
    --
    -- Dumping data for table `cv`
    --

LOCK TABLES `cv` WRITE;
/*!40000 ALTER TABLE `cv` DISABLE KEYS */
;

INSERT INTO
    `cv`
VALUES (1, 1)
ON DUPLICATE KEY UPDATE
    `id` = VALUES(`id`),
    `user_id` = VALUES(`user_id`);
/*!40000 ALTER TABLE `cv` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `experience`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `experience` (
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
/*!40000 ALTER TABLE `experience` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `offer`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `offer` (
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
    )
ON DUPLICATE KEY UPDATE
    id = VALUES(id),
    title = VALUES(title),
    company = VALUES(company),
    type = VALUES(type),
    city = VALUES(city),
    mission = VALUES(mission),
    search_profile = VALUES(search_profile),
    work_place = VALUES(work_place),
    salary = VALUES(salary),
    info = VALUES(info),
    email = VALUES(email);
/*!40000 ALTER TABLE `offer` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `offer_competence`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `offer_competence` (
    `id` int NOT NULL AUTO_INCREMENT, `offer_id` int NOT NULL, `competence_id` int NOT NULL, PRIMARY KEY (`id`), KEY `offer_id` (`offer_id`), KEY `competence_id` (`competence_id`), CONSTRAINT `offer_competence_ibfk_1` FOREIGN KEY (`offer_id`) REFERENCES `offer` (`id`), CONSTRAINT `offer_competence_ibfk_2` FOREIGN KEY (`competence_id`) REFERENCES `competence` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
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
VALUES (1, 1, 1),
    (2, 1, 3),
    (3, 4, 1),
    (4, 1, 5)
ON DUPLICATE KEY UPDATE
    id = VALUES(id),
    offer_id = VALUES(offer_id),
    competence_id = VALUES(competence_id);
/*!40000 ALTER TABLE `offer_competence` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `upload`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */
;
/*!40000 ALTER TABLE `upload` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `user`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `user` (
    `id` int NOT NULL AUTO_INCREMENT, `picture` VARCHAR(255) NOT NULL DEFAULT 'https://placehold.co/600x400/EEE/31343C', `firstname` varchar(100) NOT NULL, `lastname` varchar(100) NOT NULL, `phone` varchar(100) NOT NULL, `email` varchar(100) NOT NULL, `address` varchar(155) NOT NULL, `password` varchar(100) NOT NULL, `is_admin` tinyint(1) NOT NULL, PRIMARY KEY (`id`), UNIQUE KEY `email` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
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
        1, 'Marie', 'Delaire', '06 22 17 02 31', 'marie@gmail.com', '30 rue roger Salengro', '$2b$05$Cbb2hCn6SYQtpfi4fBuSjewAUWr7G3EkwPhlN2DvbERfVqnYuDGZe', 1
    )
ON DUPLICATE KEY UPDATE
    id = VALUES(id),
    firstname = VALUES(firstname),
    lastname = VALUES(lastname),
    phone = VALUES(phone),
    email = VALUES(email),
    address = VALUES(address),
    password = VALUES(password),
    is_admin = VALUES(is_admin);
/*!40000 ALTER TABLE `user` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `user_competence`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE if not exists `user_competence` (
    `id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `competence_id` int NOT NULL, PRIMARY KEY (`id`), KEY `user_id` (`user_id`), KEY `competence_id` (`competence_id`), CONSTRAINT `user_competence_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`), CONSTRAINT `user_competence_ibfk_2` FOREIGN KEY (`competence_id`) REFERENCES `competence` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
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
VALUES (1, 1, 1),
    (4, 1, 2),
    (5, 1, 3)
ON DUPLICATE KEY UPDATE
    id = VALUES(id),
    user_id = VALUES(user_id),
    competence_id = VALUES(competence_id);
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

-- Dump completed on 2024-01-29 14:59:12