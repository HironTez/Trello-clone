import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
import { TasksController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.model';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [TasksService],
    controllers: [TasksController],
})
export class TaskModule { }