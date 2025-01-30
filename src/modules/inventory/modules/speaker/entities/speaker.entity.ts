import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  model: string;

  @Column('text', {
    nullable: false,
  })
  brand: string;

  @Column('int', {
    nullable: false,
  })
  quantity: number;

  @Column('text', {
    nullable: false,
  })
  category: string;

  @Column('text', {
    nullable: false,
  })
  audioCategory: string;

  @Column('text', {
    nullable: false,
  })
  speakerType: string;

  @Column('int', {
    nullable: false,
  })
  power: number;

  @Column('int', {
    nullable: false,
  })
  diameter: number;

  @Column('text', {
    nullable: false,
  })
  energyConnection: string;

  @Column('text', {
    nullable: false,
  })
  audioConnection: number;
}
