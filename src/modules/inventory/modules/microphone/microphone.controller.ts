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
import { MicrophoneService } from './microphone.service';
import { CreateMicrophoneDto } from './dto/create-microphone.dto';
import { UpdateMicrophoneDto } from './dto/update-microphone.dto';
import { Auth } from 'src/modules/auth/decorators';
import { ValidRoles } from 'src/modules/auth/interface/valid-roles';

@Controller('microphone')
export class MicrophoneController {
  constructor(private readonly microphoneService: MicrophoneService) {}

  @Post()
  // @Auth(ValidRoles.admin)
  create(@Body() createMicrophoneDto: CreateMicrophoneDto) {
    return this.microphoneService.create(createMicrophoneDto);
  }

  @Get()
  // @Auth()
  findAll() {
    return this.microphoneService.findAll();
  }

  @Get(':id')
  // @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.microphoneService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMicrophoneDto: UpdateMicrophoneDto,
  ) {
    return this.microphoneService.update(id, updateMicrophoneDto);
  }
  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.microphoneService.remove(id);
  }
}
