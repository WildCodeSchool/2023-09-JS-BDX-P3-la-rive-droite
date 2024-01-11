CREATE DATABASE IF NOT EXISTS externatic_db;

-- Sélectionner la base de données
USE externatic_db;

DROP TABLE IF EXISTS user;
-- Créer la table "user"
CREATE TABLE
    user (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        address VARCHAR(155) NOT NULL,
        competence VARCHAR(100),
        password VARCHAR(100) NOT NULL,
        is_admin BOOL NOT NULL,
        UNIQUE (email)
    );

DROP TABLE IF EXISTS competence;

CREATE TABLE
    competence (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        confirmed BOOL
    );

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

CREATE TABLE
    cv (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES user(id)
    );

DROP TABLE IF EXISTS experience;

CREATE TABLE
    experience (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        company VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        is_working BOOL,
        date_begin DATE NOT NULL,
        date_end DATE,
        description TEXT,
        cv_id INT NOT NULL,
        FOREIGN KEY (cv_id) REFERENCES cv(id)
    );

DROP TABLE IF EXISTS course;

CREATE TABLE
    course (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        level VARCHAR(100) NOT NULL,
        domaine VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        date_begin DATE NOT NULL,
        date_end DATE NOT NULL,
        description TEXT,
        cv_id INT,
        FOREIGN KEY (cv_id) REFERENCES cv(id)
    );

DROP TABLE IF EXISTS offer;

CREATE TABLE
    offer (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        company VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        mission TEXT NOT NULL,
        search_profile VARCHAR(100) NOT NULL,
        work_place VARCHAR(100) NOT NULL,
        salary VARCHAR(100) NOT NULL,
        info TEXT NOT NULL,
        email VARCHAR(100) NOT NULL
    );

-- Insérer des données dans la table "user"

-- Insertion manquante pour la table "offer"
INSERT INTO
    offer (
        title,
        company,
        type,
        city,
        mission,
        search_profile,
        work_place,
        salary,
        info,
        email
    )
VALUES (
    "Developpeur Web Front End",
    "Invo'Tech",
    "CDD",
    "Bordeaux",
    "Tous les 2 ou 3 mois, de nouveaux projets en mode Agile sur les dernières stacks technologiques, toujours effectuées depuis notre plateau Factory pour progresser et développer vos compétences. 15% du temps consacré à des journées de partage technique, exploration, hack time rythmées par nos tribus Web, Mobile, Cloud... Journée de la Factory tous les mois : se retrouver physiquement en sortant des missions pour profiter et explorer ensemble ! Conférences privées organisées par Apple France, Microsoft Des participations à des conférences locales, nationales, internationales (WWDC, AWS Summit) Notre équipe de Chiefs Happiness Officiers bienveillants et surmotivés (animations, défis d'équipe) : Jeux de sociétés tous les midis, dans les locaux, events d'équipe mensuels, vrai bon café gratuit et illimité, baby-foot, mario-kart sur switch Construire un avenir positif en mettant le digital au service de l'humain La possibilité de développer votre expertise Web ou bien de monter en compétences aussi sur Android, sur iOS ou sur la xR (Unity / Unreal Engine) avec les experts de l'équipe Évoluer dans une entreprise qui encourage l'audace, la curiosité et l'envie d'entreprendre",
    "Junior",
    "Présent",
    "35k €/an",
    "Ce que nous vous proposons : Un accord télétravail pour télétravailler jusqu'à 2 jours par semaine selon vos missions. Un package avantages intéressant : une mutuelle, un CSE, des titres restaurants, un accord d'intéressement, des primes vacances et cooptation. Un accompagnement individualisé avec un mentor.",
    "marie@externatic.fr"
), (
    "Développeur Front-End",
    "Diffusez",
    "CDD",
    "Lille",
    "S’approprier le besoin métier Développement front-end Connaissance du W3C Intégrer fidèlement sur base d'une maquette Les missions seront réalisées sous la supervision du Responsable de Projet puis en autonomie selon les opportunités et l’évolution des compétences.",
    "Junior",
    "Présent",
    "25k €/an",
    "Ce que nous vous proposons : En étude d'informatique Autonome et organisé(e), tu es doté(e) d’un bon esprit d’analyse et d’innovation Esprit de synthèse, Réactivité, autonomie, rigueur et organisation Curieux, Esprit d'équipe, Respect des délais imposés.",
    "marie@externatic.fr"
);

-- Créer la table "user_competence"
CREATE TABLE
    user_competence (
        user_id INT,
        competence_id INT,
        PRIMARY KEY (user_id, competence_id),
        FOREIGN KEY (user_id) REFERENCES user(id),
        FOREIGN KEY (competence_id) REFERENCES competence(id)
    );