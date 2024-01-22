CREATE DATABASE IF NOT EXISTS externatic_db;

-- Sélectionner la base de données
USE externatic_db;

DROP TABLE IF EXISTS user;
-- Créer la table "user"
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(100) NOT NULL, lastname VARCHAR(100) NOT NULL, phone VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL, address VARCHAR(155) NOT NULL, password VARCHAR(100) NOT NULL, is_admin BOOL NOT NULL, UNIQUE (email)
);

-- INSERT INTO user (
--     firstname,
--     lastname,
--     phone,
--     email,
--     address,
--     password
-- -- )
-- DROP TABLE IF EXISTS competence;

-- DELETE TABLE competence;

-- CREATE TABLE competence (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100)
-- );

-- INSERT INTO
--     competence (name)
-- values ("html"),
--     ("css"),
--     ("javascript"),
--     ("angular"),
--     ("react"),
--     ("php"),
--     ("symphony"),
--     ("git"),
--     ("github"),
--     ("trello");

-- CREATE
-- TABLE
-- competence (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     -- name VARCHAR(100),
--     html TEXT,
--     css TEXT,
--     javascript TEXT,
--     angular TEXT,
--     react TEXT,
--     php TEXT,
--     symphony TEXT,
--     git TEXT,
--     github TEXT,
--     trello TEXT
-- );
DROP TABLE IF EXISTS cv;

CREATE TABLE cv (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES user (id)
);

DROP TABLE IF EXISTS experience;

CREATE TABLE experience (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100) NOT NULL, company VARCHAR(100) NOT NULL, city VARCHAR(100) NOT NULL, type VARCHAR(100) NOT NULL, is_working BOOL, date_begin DATE NOT NULL, date_end DATE, description TEXT, cv_id INT NOT NULL, FOREIGN KEY (cv_id) REFERENCES cv (id)
);

DROP TABLE IF EXISTS course;

CREATE TABLE course (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, level VARCHAR(100) NOT NULL, domaine VARCHAR(100) NOT NULL, name VARCHAR(100) NOT NULL, date_begin DATE NOT NULL, date_end DATE NOT NULL, description TEXT, cv_id INT, FOREIGN KEY (cv_id) REFERENCES cv (id)
);

DROP TABLE IF EXISTS offer;

CREATE TABLE offer (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, title VARCHAR(100) NOT NULL, company VARCHAR(100) NOT NULL, type VARCHAR(100) NOT NULL, city VARCHAR(100) NOT NULL, mission TEXT NOT NULL, search_profile VARCHAR(100) NOT NULL, work_place VARCHAR(100) NOT NULL, salary VARCHAR(100) NOT NULL, info TEXT NOT NULL, email VARCHAR(100) NOT NULL
);

-- Insérer des données dans la table "user"

-- Insertion manquante pour la table "offer"
INSERT INTO
    offer (
        title, company, type, city, mission, search_profile, work_place, salary, info, email
    )
VALUES (
        "Developpeur Web Front End", "Inov'Tech", "CDD", "Bordeaux", "Tous les 2 ou 3 mois, de nouveaux projets en mode Agile sur les dernières stacks technologiques, toujours effectuées depuis notre plateau Factory pour progresser et développer vos compétences. 15% du temps consacré à des journées de partage technique, exploration, hack time rythmées par nos tribus Web, Mobile, Cloud... Journée de la Factory tous les mois : se retrouver physiquement en sortant des missions pour profiter et explorer ensemble ! Conférences privées organisées par Apple France, Microsoft Des participations à des conférences locales, nationales, internationales (WWDC, AWS Summit) Notre équipe de Chiefs Happiness Officiers bienveillants et surmotivés (animations, défis d'équipe) : Jeux de sociétés tous les midis, dans les locaux, events d'équipe mensuels, vrai bon café gratuit et illimité, baby-foot, mario-kart sur switch Construire un avenir positif en mettant le digital au service de l'humain La possibilité de développer votre expertise Web ou bien de monter en compétences aussi sur Android, sur iOS ou sur la xR (Unity / Unreal Engine) avec les experts de l'équipe Évoluer dans une entreprise qui encourage l'audace, la curiosité et l'envie d'entreprendre", "Junior", "Présent", "35k €/an", "Ce que nous vous proposons : Un accord télétravail pour télétravailler jusqu'à 2 jours par semaine selon vos missions. Un package avantages intéressant : une mutuelle, un CSE, des titres restaurants, un accord d'intéressement, des primes vacances et cooptation. Un accompagnement individualisé avec un mentor.", "marie@externatic.fr"
    ),
    (
        "Développeur Front-End", "Diffusez", "CDD", "Lille", "S'approprier le besoin métier Développement front-end Connaissance du W3C Intégrer fidèlement sur base d'une maquette Les missions seront réalisées sous la supervision du Responsable de Projet puis en autonomie selon les opportunités et l'évolution des compétences.", "Junior", "Présent", "25k €/an", "Ce que nous vous proposons : En étude d'informatique Autonome et organisé(e), tu es doté(e) d'un bon esprit d'analyse et d'innovation Esprit de synthèse, Réactivité, autonomie, rigueur et organisation Curieux, Esprit d'équipe, Respect des délais imposés.", "marie@externatic.fr"
    ),
    (
        "Développeur Web Junior", "SASU MADE IN SURVEYS", "CDD", "Lille", "Nous recherchons une personne motivée et dynamique avec :
    Un an d'expérience,
    De solides compétences en PHP,
    La maitrise de MySQL, l'intégration HTML - CSS,
    La maitrise de JQuery,
    Un bon niveau d'anglais technique
.........Tu te retrouves dans le profil de poste ? Alors envoie nous ta candidature :-).", "Junior", "Présent", "25k €/an", "Mis Group, c'est une équipe à taille humaine, jeune et dynamique, située en plein centre de Lille. Nous apportons notre expertise à des cabinets d'études marketing à travers des solutions d'études : études quantitatives en ligne, recrutements de consommateurs, locations de salles pour des réunions de consommateurs, réalisation de visites mystères, réalisation de tests de produits…", "marie@externatic.fr"
    ),
    (
        "STAGE DEVELOPPEUR WEB Web", "Massy Production", "CDD", "Bordeaux", "- Connaissance des langages de programmation web tels que HTML5, CSS, JavaScript
    - Connaissance des principaux Framework et bibliothèque web
    - Forte motivation à apprendre et à se développer professionnellement.", "Junior", "Présent", "25k €/an", "Nous recherchons un Stagiaire Développeur Web (H/F) pour rejoindre notre équipe dynamique. En tant que stagiaire, chez l'association Nouvelle Voix, vous aurez l'opportunité de mettre en pratique votre créativité et être force de proposition en terme de design ux/ui.", "marie@externatic.fr"
    ),
    (
        "Développeur informatique", "Armée de Terre", "CDI", "Bordeaux", "Vos qualités : très méthodique, goût prononcé pour la technologie, réactif
    À partir du bac
    Homme ou femme, de 18 à 29 ans
    Nationalité française, en règle avec les obligations du service national JDC et jouissant de ses droits civiques.", "Junior", "Présent", "25k €/an", "Votre spécialité consiste à développer des logiciels au profit du ministère des Armées au sein d'un centre de développement. Sous la conduite d'un chef de projet, vous assurez la maintenance d'applications existantes et vous concevez de nouveaux logiciels liés aux besoins des armées. Vous soutenez les forces déployées depuis le territoire national et vous pouvez éventuellement être projetés sur des postes en dehors de votre compétence principale de développeur. Au bout de 4 à 6 ans, vous pouvez évoluer vers les métiers de la cybersécurité.", "marie@externatic.fr"
    );

DROP TABLE IF EXISTS user_competence;
-- Créer la table "user_competence"

CREATE TABLE user_competence (
    user_id INT, html BOOLEAN, css BOOLEAN, javascript BOOLEAN, angular BOOLEAN, react BOOLEAN, php BOOLEAN, symphony BOOLEAN, git BOOLEAN, github BOOLEAN, trello BOOLEAN
);

DROP TABLE IF EXISTS upload;

CREATE TABLE upload (
    id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT, url varchar(255) NOT NULL, unique (url), created_at timestamp default CURRENT_TIMESTAMP
);