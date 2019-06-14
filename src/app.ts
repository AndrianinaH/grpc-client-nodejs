import * as dotenv from 'dotenv';
import express from 'express';
import ExpressRotuer from './express.router';

dotenv.config();

const app = express();
const expressRoutes = new ExpressRotuer(app);
expressRoutes.init();

app.listen(3000, () => {
  console.log(`Express server app listening on port 3000!`);
});
