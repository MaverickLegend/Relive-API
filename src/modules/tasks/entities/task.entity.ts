import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column('text', {
    nullable: false,
  })
  title: string;

  @Column('text', {
    nullable: false,
  })
  description: string;

  @Column('text', {
    nullable: false,
  })
  assigned_to: string;

  @Column('text', { nullable: false })
  status: string;

  @Column('text', { nullable: false })
  urgency: string;

  @Column({ default: false })
  archived: boolean;
}
