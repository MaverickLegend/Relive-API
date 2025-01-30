import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateLightDto {
  @IsString()
  @MinLength(1)
  model: string;

  @IsString()
  brand: string;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsString()
  category: string;

  @IsString()
  lightningCategory: string;

  @IsString()
  bulbType: string;

  @IsString()
  focusType: string;

  @IsInt()
  amperage: number;

  @IsInt()
  wattage: number;

  @IsString()
  energyConnection: string;
}
