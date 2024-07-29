import { Injectable } from '@nestjs/common';
// import { CreateInventoryDto } from './dto/create-inventory.dto';
// import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { Microphone } from 'src/microphone/entities/microphone.entity';
import { Speaker } from 'src/speaker/entities/speaker.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @InjectRepository(Microphone)
    private microphoneRepository: Repository<Microphone>,
    @InjectRepository(Speaker)
    private speakerRepository: Repository<Speaker>,
  ) {}

  async getInventory() {
    const microphones = await this.microphoneRepository.find();
    const altavoces = await this.speakerRepository.find();
    // Añadir repositorios restantes

    const inventory = [
      ...microphones.map((item) => ({ ...item, itemType: 'Microphone' })),
      ...altavoces.map((item) => ({ ...item, itemType: 'Speaker' })),
      // Mapear el resto de los items
    ];

    return inventory;
  }

  async getItemDetails(id: string, itemType: string) {
    let details;
    switch (itemType) {
      case 'Microphone':
        details = await this.microphoneRepository.findOne({ where: { id } });
        break;
      case 'Speaker':
        details = await this.speakerRepository.findOne({ where: { id } });
        break;
      // Añade otros casos si es necesario
      default:
        throw new Error(`Item type ${itemType} not recognized`);
    }

    if (!details) {
      throw new Error(`Item with ID ${id} not found`);
    }

    return details;
  }
}
