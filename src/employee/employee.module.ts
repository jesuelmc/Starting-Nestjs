import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events/handlers';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]),CqrsModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    ...CommandHandlers,
    ...EventHandlers]
})
export class EmployeeModule {}
