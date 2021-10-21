import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee';

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService){}

    @Get('/all')
    async getEmployeeList(): Promise<Employee[]>{
        return this.employeeService.findAll();
    }

    @Get(':id')
    async getEmployee(@Param('id') id: number): Promise<Employee>{
        return this.employeeService.findOne(id);
    }

    @Post()
    addEmployee(@Body() employee: Employee): string{
        return this.employeeService.save(employee);
    } 

    @Delete(':id')
    deleteEmployee(@Param('id') id: number): string {
        this.employeeService.remove(id);
        return 'employee removed';
    }

    @Patch(':id')
    updateEmployee(@Param('id') id: number, @Body() employee:Employee): Promise<Employee>{
        return this.employeeService.update(id, employee);
    }

}
