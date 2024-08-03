import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Light {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  model: string;

  @Column('text')
  brand: string;

  @Column('int')
  quantity: number;

  @Column('text')
  category: string;

  @Column('text')
  lightningCategory: string;

  @Column('text')
  bulbType: string;

  @Column('text')
  focusType: string;

  @Column('int')
  amperage: number;

  @Column('int')
  wattage: number;

  @Column('text')
  energyConnection: string;
}
