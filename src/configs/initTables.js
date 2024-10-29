const pool = require("../services/db");

const SQLSTATEMENT = `
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS FitnessChallenge;
DROP TABLE IF EXISTS UserCompletion;

CREATE TABLE User (
 user_id INT AUTO_INCREMENT PRIMARY KEY,
 username TEXT,
 points INT
);

CREATE TABLE FitnessChallenge (
    challenge_id INT AUTO_INCREMENT PRIMARY KEY,
    creator_id INT NOT NULL,
    challenge TEXT NOT NULL,
    points INT NOT NULL
);

CREATE TABLE UserCompletion (
    complete_id INT AUTO_INCREMENT PRIMARY KEY,
    challenge_id INT NOT NULL,
    user_id INT NOT NULL,
    completed BOOL NOT NULL,
    completion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    details TEXT
);

INSERT INTO FitnessChallenge (creator_id,	challenge,	points)
VALUES 
(	1,	'Complete 2.4km within 15 minutes',	50),
(	1,	'Cycle around the island for at least 50km',	100),
(	2,	'Complete a full marathon (42.2km)',	200),
(	2,	'Hold a plank for 5 minutes',	50),
(	2,	'Perform 100 push-ups in one session',	75);

`
pool.query(SQLSTATEMENT, (error, results, fields) => {
    if (error) {
      console.error("Error creating tables:", error);
    } else {
      console.log("Tables created successfully:", results);
    }
    process.exit();
  });