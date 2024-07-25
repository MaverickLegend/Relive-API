import { Module } from '@nestjs/common';
import { MicrophoneService } from './microphone.service';
import { MicrophoneController } from './microphone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Microphone } from './entities/microphone.entity';

@Module({
  controllers: [MicrophoneController],
  providers: [MicrophoneService],
  imports: [TypeOrmModule.forFeature([Microphone])],
})
export class MicrophoneModule {}
