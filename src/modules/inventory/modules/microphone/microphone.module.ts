import { Module } from '@nestjs/common';
import { MicrophoneService } from './microphone.service';
import { MicrophoneController } from './microphone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Microphone } from './entities/microphone.entity';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  controllers: [MicrophoneController],
  providers: [MicrophoneService],
  imports: [TypeOrmModule.forFeature([Microphone]), AuthModule],
})
export class MicrophoneModule {}
