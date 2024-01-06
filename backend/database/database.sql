CREATE DATABASE externatic_db;

-- Sélectionner la base de données
USE externatic_db;

-- Créer la table "user"
CREATE TABLE
    user (
        id INT NOT NULL PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        is_admin BOOL NOT NULL
    );

CREATE TABLE
    experience (
        id INT NOT NULL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        company VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        is_working BOOL NOT NULL,
        date_begin DATE,
        date_end DATE,
        description TEXT
    );

CREATE TABLE
    course (
        id INT NOT NULL PRIMARY KEY,
        level VARCHAR(100) NOT NULL,
        domaine VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        date_begin DATE NOT NULL,
        date_end DATE NOT NULL,
        description TEXT
    );

    DROP TABLE offer;

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
        id,
        firstname,
        lastname,
        email,
        password,
        is_admin
    )
VALUES (
        1,
        'Frédérique',
        'Druet',
        'fredd@externatic.fr',
        '1234',
        0
    ), (
        2,
        'Cassiopée',
        'Laurie',
        'Cass@externatic.fr',
        '1234',
        0
    ), (
        3,
        'Marie',
        'Delaire',
        'Marie@externatic.fr',
        '1234',
        0
    ), (
        4,
        'Nassime',
        'Harmach',
        'Nassime@externatic.fr',
        '1234',
        1
    );

DROP TABLE user;