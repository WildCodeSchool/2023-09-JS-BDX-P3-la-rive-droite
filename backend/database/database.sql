CREATE DATABASE externatic_db;

-- Sélectionner la base de données
USE externatic_db;

-- Créer la table "user"
CREATE TABLE
    user (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        address VARCHAR(155) NOT NULL,
        competence VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        is_admin BOOL NOT NULL,
        UNIQUE (email)
    );

CREATE TABLE
    competence (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL
    );

DROP table competence;

CREATE TABLE
    user_competence (
        user_id INT NOT NULL,
        competence_id INT NOT NULL,
        PRIMARY KEY (user_id, competence_id),
        FOREIGN KEY (user_id) REFERENCES user(id),
        FOREIGN KEY (competence_id) REFERENCES competence(id),
        UNIQUE (user_id, competence_id)
    );

CREATE TABLE
    experience (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        company VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        is_working BOOL,
        date_begin DATE,
        date_end DATE,
        description TEXT
    );

CREATE TABLE
    course (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        level VARCHAR(100) NOT NULL,
        domaine VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        date_begin DATE NOT NULL,
        date_end DATE NOT NULL,
        description TEXT
    );

DROP TABLE offer;
DROP TABLE course;

CREATE TABLE
    offer (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        company VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        mission VARCHAR(100) NOT NULL,
        search_profile VARCHAR(100) NOT NULL,
        work_place VARCHAR(100) NOT NULL,
        salary VARCHAR(100) NOT NULL,
        info TEXT NOT NULL,
        email VARCHAR(100) NOT NULL
    );

-- Insérer des données dans la table "user"
INSERT INTO
    user (
        firstname,
        lastname,
        phone,
        email,
        address,
        competence,
        password,
        is_admin
    )
VALUES (
        'Frédérique',
        'Druet',
        '0473728392',
        'fredd@externatic.fr',
        '46 boulevard Alfred Musset',
        'HTML',
        '1234',
        0
    ), (
        'Cassiopée',
        'Laurie',
        '0382938473',
        'Cass@externatic.fr',
        '1 rue de la rue',
        'html',
        '1234',
        0
    ), (
        'Marie',
        'Delaire',
        '0638203818',
        'Marie@externatic.fr',
        '1 rue de la rue',
        'html',
        '1234',
        0
    ), (
        'Nassime',
        'Harmach',
        '03748274827',
        'Nassime@externatic.fr',
        '1 rue de la rue',
        'html',
        '1234',
        1
    );

DROP TABLE user;