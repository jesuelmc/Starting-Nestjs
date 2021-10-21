import { ApiProperty } from "@nestjs/swagger";

export interface CreateEmployeeDto {
    firstName: string;
    lastName: string;
    middleName: string;
    dob: string;
    ssn: string;
  }