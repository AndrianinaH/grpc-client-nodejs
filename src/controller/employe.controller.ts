import { Request, Response } from 'express';

// const serviceImpl: employe.EmployeService = new EmployeService();

const employeController = {
  getDefault(req: Request, res: Response) {
    res.send('grpc client');
  },

  grpcConsume(req: Request, res: Response) {
    // const serviceEmp = employe.

    res.send('grpc called !');
  }
};

export { employeController };
