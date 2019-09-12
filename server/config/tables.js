import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connSring = process.env.DB_URL;
const pool = new Pool({
  connectionString: connSring,
});

const createTable = async () => {
  const usersTable = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL NOT NULL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    address TEXT NOT NULL,
    bio TEXT NOT NULL,
    occupation TEXT NOT NULL,
    expertise TEXT NOT NULL,
    isadmin BOOLEAN DEFAULT false,
    ismentee BOOLEAN DEFAULT true
  )`;

  
  const sessions = `
  CREATE TABLE IF NOT EXISTS session(
    sessionId NUMERIC PRIMARY KEY UNIQUE,
    mentorId INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    menteeId NUMERIC NOT NULL,
    questions TEXT NOT NULL,
    menteeEmail TEXT NOT NULL,
    status TEXT NOT NULL
  )`;

  const reviews = `
  CREATE TABLE IF NOT EXISTS review(
    sessionId INTEGER NOT NULL REFERENCES session(sessionId) ON DELETE CASCADE,
    mentorFullName TEXT NOT NULL,
    score NUMERIC NOT NULL,
    menteeFullName TEXT NOT NULL,
    remark TEXT NOT NULL 
  )`;

  const dummy = [
    `INSERT INTO users(firstname, lastname, email, password, address, bio, occupation, expertise, isadmin, ismentee) VALUES('jordan','kayinamura', 'jordankayinamura@gmail.com','$2b$10$dOeOInD3VRzVB2R6hE9qiuFCTcOVRcY4vGR7e3aZPusNdAi92ST3a', 'kigali','I am not a mentor', 'software enginering', 'information', 'true','false')`,
    
    `INSERT INTO users(firstname, lastname, email, password, address, bio, occupation, expertise, isadmin, ismentee) VALUES('john','doe','john.doe@gmail.com','$2b$10$dOeOInD3VRzVB2R6hE9qiuFCTcOVRcY4vGR7e3aZPusNdAi92ST3a','west','I am a mentor', 'software developer','business', 'false','false')`,

    `INSERT INTO users(firstname, lastname, email, password, address, bio, occupation, expertise, isadmin, ismentee) VALUES('Jordan', 'Manzi', 'jordan1@gmail.com', ' $2b$10$dOeOInD3VRzVB2R6hE9qiuFCTcOVRcY4vGR7e3aZPusNdAi92ST3a','USA', 'I want to be the best', 'Actor', 'Directing', 'false', 'false')`,
  ]

  await pool.query(usersTable);
  await pool.query(sessions);
  await pool.query(reviews);

  for(const dum of dummy) {
    await pool.query(dum);
  }
}

createTable(); 