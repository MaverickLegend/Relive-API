import { Microphone } from 'src/microphone/entities/microphone.entity';
import { Speaker } from 'src/speaker/entities/speaker.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  model: string;

  @Column('text', { nullable: false })
  brand: string;

  @Column('int', { nullable: false })
  quantity: number;

  @Column('text', { nullable: false })
  category: string;

  @OneToOne(() => Microphone)
  @JoinColumn()
  microphone: Microphone;

  @OneToOne(() => Speaker)
  @JoinColumn()
  speaker: Speaker;
}
