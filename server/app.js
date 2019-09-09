import express from 'express';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import index from './routes/index';

dotenv.config();
const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/',index);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

export default app;