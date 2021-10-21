import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmployeeCommand } from './create-employee.command';
import { Repository } from 'typeorm';
import { Employee } from 'src/employee/model/employee';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeHandler implements ICommandHandler<CreateEmployeeCommand> {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async execute(command: CreateEmployeeCommand): Promise<Employee> {
    return this.employeeRepository.save(command.payload);
  }
}