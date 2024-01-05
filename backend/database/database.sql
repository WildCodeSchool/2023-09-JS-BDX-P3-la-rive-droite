CREATE DATABASE externatic_db;

-- Sélectionner la base de données
USE externatic_db;

-- Créer la table "user"
CREATE TABLE
    user (
        id INT NOT NULL PRIMARY KEY,
        firstname VARCHAR(100),
        lastname VARCHAR(100),
        email VARCHAR(100),
        password VARCHAR(100),
        is_admin BOOL NOT NULL
    );

CREATE TABLE
    experience (
        id INT NOT NULL PRIMARY KEY,
        title VARCHAR(100),
        company VARCHAR(100),
        city VARCHAR(100),
        type VARCHAR(100),
        is_working BOOL NOT NULL,
        date_begin DATE,
        date_end DATE,
        description TEXT,
    );

CREATE TABLE
    course (
        id INT NOT NULL PRIMARY KEY,
        level VARCHAR(100),
        domaine VARCHAR(100),
        name VARCHAR(100),
        date_begin DATE,
        date_end DATE,
        description TEXT,
    );

CREATE TABLE
    offer (
        id INT NOT NULL PRIMARY KEY,
        title VARCHAR(100),
        company VARCHAR(100),
        type VARCHAR(100),
        city VARCHAR(100),
        mission VARCHAR(100),
        search_profile VARCHAR(100),
        work_place VARCHAR(100),
        salary VARCHAR(100),
        info TEXT,
        email VARCHAR(100),
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