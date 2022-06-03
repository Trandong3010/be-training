import { Module } from '@nestjs/common';
import { TaskService } from '../../services/task/task.service';
import { TaskController } from '../../controllers/task/task.controller';
import { taskProviders } from './task.providers';

@Module({
  providers: [TaskService, ...taskProviders],
  controllers: [TaskController],
})
export class TaskModule {}
