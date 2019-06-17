import { EmployeService } from './interface/employe-service.interface';

const { createClient } = require('grpc-kit');
const employeService: EmployeService = createClient(
  {
    protoPath: 'src/grpc/employe.proto',
    packageName: 'employe',
    serviceName: 'EmployeService',
    options: {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  },
  '0.0.0.0:3001'
);

export { employeService };
