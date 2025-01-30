import { Controller, Get, Param, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
// import { Auth } from 'src/auth/decorators';
// import { CreateInventoryDto } from './dto/create-inventory.dto';
// import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller('inventory')
// @Auth()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  async getInventory() {
    return this.inventoryService.getInventory();
  }

  @Get(':id')
  async getItemDetails(
    @Param('id') id: string,
    @Query('itemType') itemType: string,
  ) {
    return this.inventoryService.getItemDetails(id, itemType);
  }
}
