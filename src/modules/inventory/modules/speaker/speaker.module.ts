import { Module } from '@nestjs/common';
import { SpeakerService } from './speaker.service';
import { SpeakerController } from './speaker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker } from './entities/speaker.entity';
import { AuthModule } from 'src/modules/auth/auth.module';
@Module({
  controllers: [SpeakerController],
  providers: [SpeakerService],
  imports: [TypeOrmModule.forFeature([Speaker]), AuthModule],
})
export class SpeakerModule {}
