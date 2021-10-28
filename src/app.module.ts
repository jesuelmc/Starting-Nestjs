import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/model/employee';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    EmployeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'employee',
      entities: [Employee],
      synchronize: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
  }
}
