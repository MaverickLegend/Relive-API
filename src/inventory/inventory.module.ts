import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Microphone } from 'src/microphone/entities/microphone.entity';
import { Speaker } from 'src/speaker/entities/speaker.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AudioConsole } from 'src/audio-console/entities/audio-console.entity';
import { Light } from 'src/light/entities/light.entity';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [
    TypeOrmModule.forFeature([
      Inventory,
      Microphone,
      Speaker,
      AudioConsole,
      Light,
    ]),
    AuthModule,
  ],
})
export class InventoryModule {}
