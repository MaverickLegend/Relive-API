import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLightDto } from './dto/create-light.dto';
import { UpdateLightDto } from './dto/update-light.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Light } from './entities/light.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LightService {
  constructor(
    @InjectRepository(Light)
    private readonly lightRepository: Repository<Light>,
  ) {}
  async create(createLightDto: CreateLightDto) {
    try {
      const light = this.lightRepository.create(createLightDto);
      await this.lightRepository.save(light);
      return light;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Error creating light');
    }
  }

  findAll() {
    return this.lightRepository.find({});
  }

  async findOne(id: string) {
    const light = await this.lightRepository.findOneBy({ id });
    if (!light) {
      throw new NotFoundException(`Light with id ${id} not found`);
    }
    return light;
  }

  async update(id: string, updateLightDto: UpdateLightDto) {
    const light = await this.lightRepository.preload({
      id: id,
      ...updateLightDto,
    });

    if (!light) {
      throw new NotFoundException(`Light with id ${id} not found`);
    }
    try {
      await this.lightRepository.save(light);
      return light;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async remove(id: string) {
    const light = await this.findOne(id);
    await this.lightRepository.remove(light);
  }
}
