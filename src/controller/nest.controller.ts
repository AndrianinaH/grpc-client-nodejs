import { ClientGrpc, Client } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc/grpc-client.options';
import { EmployeService } from '../grpc/interface/employe-service.interface';

export class nestController {
  @Client(grpcClientOptions)
  private static client: ClientGrpc;

  public static empService: EmployeService;

  static initService() {
    this.empService = this.client.getService<EmployeService>('HeroService');
  }
}
