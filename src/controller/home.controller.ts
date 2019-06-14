import { Request, Response } from 'express';

const employeController = {
  getDefault(req: Request, res: Response) {
    res.send('Hello World!fff');
  }
};

export { employeController };
