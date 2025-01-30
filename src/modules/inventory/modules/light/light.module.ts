import { Module } from '@nestjs/common';
import { LightService } from './light.service';
import { LightController } from './light.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Light } from './entities/light.entity';

@Module({
  controllers: [LightController],
  providers: [LightService],
  imports: [TypeOrmModule.forFeature([Light])],
})
export class LightModule {}
