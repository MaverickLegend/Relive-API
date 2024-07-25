import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MicrophoneService } from './microphone.service';
import { CreateMicrophoneDto } from './dto/create-microphone.dto';
// import { UpdateMicrophoneDto } from './dto/update-microphone.dto';

@Controller('microphone')
export class MicrophoneController {
  constructor(private readonly microphoneService: MicrophoneService) {}

  @Post()
  create(@Body() createMicrophoneDto: CreateMicrophoneDto) {
    return this.microphoneService.create(createMicrophoneDto);
  }

  @Get()
  findAll() {
    return this.microphoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.microphoneService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMicrophoneDto: UpdateMicrophoneDto) {
  //   return this.microphoneService.update(+id, updateMicrophoneDto);
  // }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.microphoneService.remove(id);
  }
}