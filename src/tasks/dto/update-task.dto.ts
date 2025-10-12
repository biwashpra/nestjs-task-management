import { TaskStatus } from '../tasks.model';

export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
