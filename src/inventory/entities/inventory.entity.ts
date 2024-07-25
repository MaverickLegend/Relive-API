import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  model: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  label: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  brand: string;

  @Column('number', {
    unique: true,
    nullable: false,
  })
  quantity: number;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  category: string;
}
