import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmployeeCommand } from './create-employee.command';
import { Repository } from 'typeorm';
import { Employee } from 'src/employee/model/employee';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeHandler implements ICommandHandler<CreateEmployeeCommand> {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private publisher: EventPublisher,
  ) {
  }

  async execute(command: CreateEmployeeCommand): Promise<Employee> {
    const employee = await this.employeeRepository.save(command.payload);
    const instance = new Employee(employee.id);
    instance.sendMessage();
    console.log('ssss');
    instance.commit();
    return instance;
  }
}
