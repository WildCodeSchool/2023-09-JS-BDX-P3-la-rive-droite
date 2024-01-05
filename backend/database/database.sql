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

-- DROP TABLE user;