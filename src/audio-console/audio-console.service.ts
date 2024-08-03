import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAudioConsoleDto } from './dto/create-audio-console.dto';
import { UpdateAudioConsoleDto } from './dto/update-audio-console.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AudioConsole } from './entities/audio-console.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AudioConsoleService {
  constructor(
    @InjectRepository(AudioConsole)
    private readonly audioConsoleRepository: Repository<AudioConsole>,
  ) {}

  async create(createAudioConsoleDto: CreateAudioConsoleDto) {
    try {
      const audioConsole = this.audioConsoleRepository.create(
        createAudioConsoleDto,
      );
      await this.audioConsoleRepository.save(audioConsole);
      return audioConsole;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Error creating audioConsole');
    }
  }

  findAll() {
    return this.audioConsoleRepository.find({});
  }

  async findOne(id: string) {
    const audioConsole = await this.audioConsoleRepository.findOneBy({ id });
    if (!audioConsole) {
      throw new NotFoundException(`AudioConsole with id ${id} not found`);
    }
    return audioConsole;
  }

  async update(id: string, updateAudioConsoleDto: UpdateAudioConsoleDto) {
    const audioConsole = await this.audioConsoleRepository.preload({
      id: id,
      ...updateAudioConsoleDto,
    });
    if (!audioConsole) {
      throw new NotFoundException(`AudioConsole with id ${id} not found`);
    }
    try {
      await this.audioConsoleRepository.save(audioConsole);
      return audioConsole;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async remove(id: string) {
    const audioConsole = await this.findOne(id);
    await this.audioConsoleRepository.remove(audioConsole);
  }
}
