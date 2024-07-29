import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Microphone } from 'src/microphone/entities/microphone.entity';
import { Speaker } from 'src/speaker/entities/speaker.entity';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [TypeOrmModule.forFeature([Inventory, Microphone, Speaker])],
})
export class InventoryModule {}
