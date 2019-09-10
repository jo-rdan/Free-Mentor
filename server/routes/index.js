import express from 'express';
import userRoute from './userRoutes';
import adminRoute from './adminRoutes';

const index = express();

index.use('/api/v2/auth/', userRoute);
index.use('/api/v2/', userRoute);
index.use('/api/v2/', adminRoute);
index.use('*', (req, res) => {
  return res.status(405).send({ status: 405, error: 'Incorrect route, use the correct route(POST)' });
});

export default index;