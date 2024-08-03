import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMicrophoneDto } from './dto/create-microphone.dto';
import { UpdateMicrophoneDto } from './dto/update-microphone.dto';
import { Repository } from 'typeorm';
import { Microphone } from './entities/microphone.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MicrophoneService {
  constructor(
    @InjectRepository(Microphone)
    private readonly microphoneRepository: Repository<Microphone>,
  ) {}

  async create(createMicrophoneDto: CreateMicrophoneDto) {
    try {
      const microphone = this.microphoneRepository.create(createMicrophoneDto);
      await this.microphoneRepository.save(microphone);
      return microphone;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Error creating microphone');
    }
  }

  findAll() {
    return this.microphoneRepository.find({});
  }

  async findOne(id: string) {
    const microphone = await this.microphoneRepository.findOneBy({ id });
    if (!microphone) {
      throw new NotFoundException(`Microphone with id ${id} not found`);
    }
    return microphone;
  }

  async update(id: string, updateMicrophoneDto: UpdateMicrophoneDto) {
    const microphone = await this.microphoneRepository.preload({
      id: id,
      ...updateMicrophoneDto,
    });

    if (!microphone) {
      throw new NotFoundException(`Microphone with id ${id} not found`);
    }
    try {
      await this.microphoneRepository.save(microphone);
      return microphone;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async remove(id: string) {
    const microphone = await this.findOne(id);
    await this.microphoneRepository.remove(microphone);
  }
}
