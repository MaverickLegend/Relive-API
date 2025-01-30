import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AudioConsole {
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
  consoleType: string;

  @Column('int', {
    nullable: false,
  })
  numberOfChannels: number;
}
