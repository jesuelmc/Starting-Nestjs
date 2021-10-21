import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './model/employee';

@Injectable()
export class EmployeeService {
  constructor(
      @InjectRepository(Employee)
      private employeeRepository: Repository<Employee>,
    ) {}
  
  save(employee:Employee): string {
    this.employeeRepository.save(employee);
    return 'save';
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  update(id: number ,employee:Employee): Promise<Employee>{
    this.employeeRepository.update(id,employee);
    return this.employeeRepository.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
