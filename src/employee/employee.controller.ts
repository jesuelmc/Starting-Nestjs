import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { CreateEmployeeCommand } from './commands/create-employee/create-employee.command';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {

  constructor(
    private employeeService: EmployeeService,
    private readonly commandBus: CommandBus) {
  }

  @Get('/all')
  async getEmployeeList(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async getEmployee(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  addEmployee(@Body() employee: CreateEmployeeDto): Promise<Employee> {
    return this.commandBus.execute(new CreateEmployeeCommand(employee));
  }

  @Post('/2')
  addEmployee2(@Body() employee: Employee): string {
    return this.employeeService.save(employee);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: number): string {
    this.employeeService.remove(id);
    return 'employee removed';
  }

  @Patch(':id')
  updateEmployee(@Param('id') id: number, @Body() employee: Employee): Promise<Employee> {
    return this.employeeService.update(id, employee);
  }
}
