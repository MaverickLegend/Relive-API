import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Microphone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
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
  micType: string;

  @Column('text', {
    nullable: false,
  })
  polarPattern: string;
}
