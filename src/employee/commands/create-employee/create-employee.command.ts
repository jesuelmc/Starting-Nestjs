import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';

export class CreateEmployeeCommand {
  constructor(public payload: CreateEmployeeDto) {
  }
}
