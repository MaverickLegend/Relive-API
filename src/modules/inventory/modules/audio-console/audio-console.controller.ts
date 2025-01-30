import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AudioConsoleService } from './audio-console.service';
import { CreateAudioConsoleDto } from './dto/create-audio-console.dto';
import { UpdateAudioConsoleDto } from './dto/update-audio-console.dto';

@Controller('audio-console')
export class AudioConsoleController {
  constructor(private readonly audioConsoleService: AudioConsoleService) {}

  @Post()
  create(@Body() createAudioConsoleDto: CreateAudioConsoleDto) {
    return this.audioConsoleService.create(createAudioConsoleDto);
  }

  @Get()
  findAll() {
    return this.audioConsoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.audioConsoleService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAudioConsoleDto: UpdateAudioConsoleDto,
  ) {
    return this.audioConsoleService.update(id, updateAudioConsoleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.audioConsoleService.remove(id);
  }
}
