import * as dotenv from 'dotenv';
import express from 'express';
import { employeController } from './controller/employe.controller';

dotenv.config();

const app = express();
app.use('/grpcFindAll', function(req, res) {
  employeController.grpcFindAll(req, res);
});

app.use('/grpcFindOne', function(req, res) {
  employeController.grpcFindOne(req, res);
});

app.use('/grpcCreate', function(req, res) {
  employeController.grpcCreate(req, res);
});

app.use('/grpcUpdate', function(req, res) {
  employeController.grpcUpdate(req, res);
});

app.use('/grpcDelete', function(req, res) {
  employeController.grpcDelete(req, res);
});

app.get('/', function(req, res) {
  employeController.getDefault(req, res);
});

app.listen(3000, () => {
  console.log(`Express server app listening on port 3000!`);
});
