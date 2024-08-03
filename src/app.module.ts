import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from './inventory/inventory.module';
import { MicrophoneModule } from './microphone/microphone.module';
import { SpeakerModule } from './speaker/speaker.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { AudioConsoleModule } from './audio-console/audio-console.module';
import { LightModule } from './light/light.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    InventoryModule,
    MicrophoneModule,
    SpeakerModule,
    AuthModule,
    CommonModule,
    AudioConsoleModule,
    LightModule,
  ],
})
export class AppModule {}
