import { Request, Response } from 'express';
import { nestController } from './nest.controller';
import { employe } from '../grpc/service';
import grpc, { GrpcObject } from 'grpc';
import { join } from 'path';

const PROTO_PATH = join(process.cwd(), './src/grpc/employe.proto');

const protoDescriptor: any = grpc.load(PROTO_PATH);
console.log(protoDescriptor);
const EmployeService = protoDescriptor.employe.EmployeService.service;
console.log('-------------------------------EmployeService');
console.log(EmployeService);

const serviceImpl: employe.EmployeService = new EmployeService();
// const serviceImpl: employe.EmployeService = employe.EmployeService.create();

const employeController = {
  getDefault(req: Request, res: Response) {
    res.send('grpc client');
  },

  grpcConsume(req: Request, res: Response) {
    // const serviceEmp = employe.
    console.log('dfdsfsd');
    res.send('grpc called !');
  }
};

export { employeController };
