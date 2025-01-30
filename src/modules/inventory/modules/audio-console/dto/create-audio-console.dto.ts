import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateAudioConsoleDto {
  @IsString()
  @MinLength(1)
  model: string;

  @IsString()
  @MinLength(1)
  brand: string;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsString()
  category: string;

  @IsString()
  audioCategory: string;

  @IsString()
  consoleType: string;

  @IsInt()
  @IsPositive()
  numberOfChannels: number;
}
