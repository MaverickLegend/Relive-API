import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateSpeakerDto {
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
  speakerType: string;

  @IsInt()
  @IsPositive()
  power: number;

  @IsInt()
  @IsPositive()
  diameter: number;

  @IsString()
  energyConnection: string;

  @IsString()
  audioConnection: number;
}
