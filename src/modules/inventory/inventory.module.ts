import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Microphone } from 'src/modules/inventory/modules/microphone/entities/microphone.entity';
import { Speaker } from 'src/modules/inventory/modules/speaker/entities/speaker.entity';
import { AuthModule } from 'src/modules/auth/auth.module';
import { AudioConsole } from 'src/modules/inventory/modules/audio-console/entities/audio-console.entity';
import { Light } from 'src/modules/inventory/modules/light/entities/light.entity';

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
