import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
// import { UpdateSpeakerDto } from './dto/update-speaker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Speaker } from './entities/speaker.entity';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';

@Injectable()
export class SpeakerService {
  constructor(
    @InjectRepository(Speaker)
    private readonly speakerRepository: Repository<Speaker>,
  ) {}

  async create(createSpeakerDto: CreateSpeakerDto) {
    try {
      const speaker = this.speakerRepository.create(createSpeakerDto);
      await this.speakerRepository.save(speaker);
      return speaker;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Error creating speaker');
    }
  }

  findAll() {
    return this.speakerRepository.find({});
  }

  async findOne(id: string) {
    const speaker = await this.speakerRepository.findOneBy({ id });
    if (!speaker) {
      throw new NotFoundException(`Speaker with id ${id} not found`);
    }
    return speaker;
  }

  async update(id: string, updateSpeakerDto: UpdateSpeakerDto) {
    const speaker = await this.speakerRepository.preload({
      id: id,
      ...updateSpeakerDto,
    });

    if (!speaker) {
      throw new NotFoundException(`Speaker with id ${id} not found`);
    }
    try {
      await this.speakerRepository.save(speaker);
      return speaker;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async remove(id: string) {
    const speaker = await this.findOne(id);
    await this.speakerRepository.remove(speaker);
  }
}
