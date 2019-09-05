/* eslint-disable */
import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes';
import adminRoute from './routes/adminRoutes';
import bodyparser from 'body-parser';

dotenv.config();
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/api/v1/auth/', userRoute);
app.use('/api/v1/', userRoute);
app.use('/api/v1/', adminRoute);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.use('*', (req,res) => {
  return res.status(405).send({status: 405, error: 'Incorrect route, use the correct route(POST)'});
});
export default app;