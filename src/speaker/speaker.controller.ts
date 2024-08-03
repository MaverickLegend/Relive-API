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
import { SpeakerService } from './speaker.service';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interface/valid-roles';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';
// import { UpdateSpeakerDto } from './dto/update-speaker.dto';

@Controller('speaker')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}

  @Post()
  // @Auth(ValidRoles.admin)
  create(@Body() createSpeakerDto: CreateSpeakerDto) {
    return this.speakerService.create(createSpeakerDto);
  }

  @Get()
  // @Auth()
  findAll() {
    return this.speakerService.findAll();
  }

  @Get(':id')
  // @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.speakerService.findOne(id);
  }

  @Patch(':id')
  // @Auth(ValidRoles.admin)
  update(@Param('id') id: string, @Body() updateSpeakerDto: UpdateSpeakerDto) {
    return this.speakerService.update(id, updateSpeakerDto);
  }

  @Delete(':id')
  // @Auth(ValidRoles.admin)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.speakerService.remove(id);
  }
}
