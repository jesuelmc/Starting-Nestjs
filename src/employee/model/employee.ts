import { AggregateRoot } from '@nestjs/cqrs';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeCreatedEvent } from '../events/impl/employee-created.event';

@Entity()
export class Employee extends AggregateRoot {
  constructor(id: number) {
    super();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  middleName: string;

  @ApiProperty()
  @Column()
  dob: string;

  @ApiProperty()
  @Column()
  ssn: string;

  sendMessage() {
    console.log('works');
    this.apply(new EmployeeCreatedEvent(5));
  }
}
