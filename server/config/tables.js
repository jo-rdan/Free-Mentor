/* eslint-disable*/

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

});

const createTable = async () => {
  const menteeTable = `CREATE TABLE IF NOT EXISTS mentees(
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
    mentorId INTEGER NOT NULL REFERENCES mentees(id) ON DELETE CASCADE,
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
  )`

  await pool.query(menteeTable);
  await pool.query(sessions);
  await pool.query(reviews);
}

createTable(); 