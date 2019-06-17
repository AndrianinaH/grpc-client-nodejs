import { Request, Response } from 'express';
import { employeService } from '../grpc/employe.service';

// const serviceImpl: employe.EmployeService = new EmployeService();

const employeController = {
  getDefault(req: Request, res: Response) {
    res.send('grpc client');
  },

  grpcFindAll(req: Request, res: Response) {
    employeService.findAll({}, (err: any, result: any) => {
      if (err) throw err;
      console.log('grpc findAll called !');
      console.log(result);
      res.json(result);
    });
  },

  grpcFindOne(req: Request, res: Response) {
    employeService.findOne(
      { id: '5d0265a41955211bfcd71b46' },
      (err: any, result: any) => {
        if (err) throw err;
        console.log('grpc findOne called !');
        console.log(result);
        res.json(result);
      }
    );
  },

  grpcCreate(req: Request, res: Response) {
    employeService.create(
      {
        nom: 'asz',
        prenom: 'asz',
        poste: 'ase',
        sexe: 'ase',
        dateNaissance: '02/15/1985',
        urlPhoto: 'ase'
      },
      (err: any, result: any) => {
        if (err) throw err;
        console.log('grpc create called !');
        console.log(result);
        res.json(result);
      }
    );
  },

  grpcUpdate(req: Request, res: Response) {
    employeService.update(
      {
        id: '5d02601d13bfda15c7d295af',
        nom: 'qqqa',
        prenom: 'qqa',
        poste: 'qqa',
        sexe: 'asqqqae',
        dateNaissance: '02/18/1985',
        urlPhoto: 'qqa'
      },
      (err: any, result: any) => {
        if (err) throw err;
        console.log('grpc update called !');
        console.log(result);
        res.json(result);
      }
    );
  },

  grpcDelete(req: Request, res: Response) {
    employeService.delete(
      {
        id: '5d07771ef731a61dc8b0ea8f'
      },
      (err: any, result: any) => {
        if (err) throw err;
        console.log('grpc delete called !');
        console.log(result);
        res.json(result);
      }
    );
  }
};

export { employeController };
