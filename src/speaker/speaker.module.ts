import { Module } from '@nestjs/common';
import { SpeakerService } from './speaker.service';
import { SpeakerController } from './speaker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker } from './entities/speaker.entity';
@Module({
  controllers: [SpeakerController],
  providers: [SpeakerService],
  imports: [TypeOrmModule.forFeature([Speaker])],
})
export class SpeakerModule {}
