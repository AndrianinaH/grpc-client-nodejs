import { Request, Response } from 'express';
import { nestController } from './nest.controller';
import { employe } from '../grpc/service';
import grpc, { GrpcObject } from 'grpc';
import { join } from 'path';
const client = new grpc.Client(
  'localhost:3001',
  grpc.credentials.createInsecure()
);

function passThrough(argument: any) {
  return argument;
}
const rpcImpl = function(method: any, requestData: any, callback: any) {
  /* Conventionally in gRPC, the request path looks like 
     "/package.names.ServiceName/MethodName/", 
     so getPath would generate that from the method */
  const path = `/service/${method}`;
  // Using passThrough as the serialize and deserialize functions
  client.makeUnaryRequest(
    path,
    passThrough,
    passThrough,
    requestData,
    null,
    null,
    callback
  );
};

const PROTO_PATH = join(process.cwd(), './src/grpc/employe.proto');

const protoDescriptor: any = grpc.load(PROTO_PATH);
console.log(protoDescriptor);
const EmployeService = protoDescriptor.employe.EmployeService.service;
console.log('-------------------------------EmployeService');
console.log(EmployeService);

// const serviceImpl: employe.EmployeService = new EmployeService();
// const serviceImpl: employe.EmployeService = employe.EmployeService.create(
//   rpcImpl
// );

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
