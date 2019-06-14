import * as dotenv from 'dotenv';
import express from 'express';
import { employeController } from './controller/employe.controller';

dotenv.config();

const app = express();
app.use('/grpc', function(req, res) {
  employeController.grpcConsume(req, res);
});

app.get('/', function(req, res) {
  employeController.getDefault(req, res);
});

app.listen(3000, () => {
  console.log(`Express server app listening on port 3000!`);
});
