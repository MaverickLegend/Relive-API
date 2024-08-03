import { PartialType } from '@nestjs/mapped-types';
import { CreateAudioConsoleDto } from './create-audio-console.dto';

export class UpdateAudioConsoleDto extends PartialType(CreateAudioConsoleDto) {}
