import { Module } from '@nestjs/common';
import { AudioConsoleService } from './audio-console.service';
import { AudioConsoleController } from './audio-console.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AudioConsole } from './entities/audio-console.entity';

@Module({
  controllers: [AudioConsoleController],
  providers: [AudioConsoleService],
  imports: [TypeOrmModule.forFeature([AudioConsole]), AuthModule],
})
export class AudioConsoleModule {}
