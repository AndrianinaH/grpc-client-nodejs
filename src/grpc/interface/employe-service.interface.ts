import { Observable } from 'rx';
import { Employe } from './employe.interface';
export interface EmployeService {
  findOne(data: { id: string }, callback: any): Employe;

  findAll({}, callback: any): Employe[];

  create(data: any, callback: any): Employe;

  update(data: Employe, callback: any): Employe;

  delete(data: { id: string }, callback: any): { deletedCount: number };
}
