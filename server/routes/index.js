import express from 'express';
import swaggerJson from 'swagger-ui-express';
import userRoute from './userRoutes';
import adminRoute from './adminRoutes';
import swagger from '../../swagger.json';
import swaggers from 'swagger-ui-express';

const index = express();
index.use('/apiDocs', swaggers.serve, swaggers.setup(swagger));
index.use('/api/v2/auth/', userRoute);
index.use('/api/v2/', userRoute);
index.use('/api/v2/', adminRoute);
index.use('*', (req, res) => res.status(405).send({ status: 405, error: 'Incorrect route, use the correct route(POST)' }));

export default index;
