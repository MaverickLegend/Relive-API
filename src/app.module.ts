import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from './modules/inventory/inventory.module';
import { MicrophoneModule } from './modules/inventory/modules/microphone/microphone.module';
import { SpeakerModule } from './modules/inventory/modules/speaker/speaker.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './common/common.module';
import { AudioConsoleModule } from './modules/inventory/modules/audio-console/audio-console.module';
import { LightModule } from './modules/inventory/modules/light/light.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';

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
    TasksModule,
    UsersModule,
  ],
})
export class AppModule {}
