/* eslint-disable linebreak-style */
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use('*',(req,res) => {
  res.status(200).send({status: 200,message: 'Welcome to Free Mentors; mentors who build you up!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
  console.log(`App is listening on port ${PORT}`);
});