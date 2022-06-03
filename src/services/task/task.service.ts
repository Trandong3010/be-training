import { Injectable, Inject } from '@nestjs/common';
import { Tasks } from '../../model/task.entity';
import { Tasks as TaskDto } from '../../dto/TaskDto';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private readonly taskRepository: typeof Tasks,
  ) {}

  async create(data: TaskDto): Promise<Tasks> {
    return await this.taskRepository.create<Tasks>(data);
  }

  async findById(id: string): Promise<Tasks> {
    return await this.taskRepository.findOne<Tasks>({ where: { id } });
  }

  async findAll(): Promise<Tasks> {
    return await this.taskRepository.findOne<Tasks>();
  }

  async update(id: string, data: TaskDto): Promise<Tasks> {
    await this.taskRepository.update(
      { id: id },
      {
        where: {
          title: data.title,
          description: data.description,
          date: data.date,
          hour: data.hour,
          responsable: data.responsable,
          status: data.status,
          createdAt: data.createdAt,
          createdBy: data.createdBy,
          updatedAt: new Date(),
          lastChangedBy: data.lastChangedBy,
        },
      },
    );
    const findOne = await this.findById(id);
    return findOne;
  }

  async delete(id: string) {
    return await this.taskRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
