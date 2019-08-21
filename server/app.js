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
app.use('/api/v1/', adminRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

export default app;
