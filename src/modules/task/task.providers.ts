import { Tasks } from '../../model/task.entity';

export const taskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useValue: Tasks,
  },
];
