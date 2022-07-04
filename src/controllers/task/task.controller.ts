import { Controller, Body, Post, UseGuards, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskService } from 'src/services/task/task.service';
import { Tasks as TaskDto } from 'src/dto/TaskDto';
import { Tasks } from 'src/model/task.entity';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: TaskDto) {
    return await this.taskService.create(data);
  }

  @Get()
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll(): Promise<Tasks[]> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findById(@Param('id') id: string): Promise<Tasks> {
    return await this.taskService.findById(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully update.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Param('id') id: string, @Body() modal: TaskDto) {
    return await this.taskService.update(id, modal);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'The record delete successfully.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('id') id: string) {
    return await this.taskService.delete(id);
  }
}
