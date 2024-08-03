import { Injectable } from '@nestjs/common';
// import { CreateInventoryDto } from './dto/create-inventory.dto';
// import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { Microphone } from 'src/microphone/entities/microphone.entity';
import { Speaker } from 'src/speaker/entities/speaker.entity';
import { AudioConsole } from 'src/audio-console/entities/audio-console.entity';
import { Light } from 'src/light/entities/light.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @InjectRepository(Microphone)
    private microphoneRepository: Repository<Microphone>,
    @InjectRepository(Speaker)
    private speakerRepository: Repository<Speaker>,
    @InjectRepository(AudioConsole)
    private audioConsoleRepository: Repository<AudioConsole>,
    @InjectRepository(Light)
    private lightRepository: Repository<Light>,
  ) {}

  async getInventory() {
    const microphones = await this.microphoneRepository.find();
    const speaker = await this.speakerRepository.find();
    const audioConsoles = await this.audioConsoleRepository.find();
    const lights = await this.lightRepository.find();

    // Añadir repositorios restantes

    const inventory = [
      ...microphones.map((item) => ({ ...item, itemType: 'Microphone' })),
      ...speaker.map((item) => ({ ...item, itemType: 'Speaker' })),
      ...audioConsoles.map((item) => ({ ...item, itemType: 'AudioConsole' })),
      ...lights.map((item) => ({ ...item, itemType: 'Light' })),

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
      case 'AudioConsole':
        details = await this.audioConsoleRepository.findOne({ where: { id } });
        break;
      case 'Light':
        details = await this.lightRepository.findOne({ where: { id } });
        break;
      default:
        throw new Error(`Item type ${itemType} not recognized`);
    }

    if (!details) {
      throw new Error(`Item with ID ${id} not found`);
    }

    return details;
  }
}
