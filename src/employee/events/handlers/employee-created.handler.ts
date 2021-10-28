import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { EmployeeCreatedEvent } from "../impl/employee-created.event";

@EventsHandler(EmployeeCreatedEvent)
export class EmployeeCreatedHandler implements IEventHandler<EmployeeCreatedEvent> {
    handle(event: EmployeeCreatedEvent) {
        console.log('Employee Created Event');
      }
}