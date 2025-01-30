import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    try {
      const task = this.taskRepository.create(createTaskDto);
      await this.taskRepository.save(task);
      return task;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Error creating task');
    }
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find({});
  }

  findArchived(): Promise<Task[]> {
    return this.taskRepository.find({ where: { archived: true } });
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.preload({
      id: id,
      ...updateTaskDto,
    });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    try {
      await this.taskRepository.save(task);
      return task;
    } catch (error) {
      console.log(error);
      throw new BadGatewayException(error);
    }
  }

  async remove(id: string) {
    const task = await this.findOne(id);
    await this.taskRepository.remove(task);
  }
}
