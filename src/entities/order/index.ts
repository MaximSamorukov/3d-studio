import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  //Index,
} from 'typeorm';

@Entity({ name: 'print_orders' })
export class PrintOrderEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', nullable: true })
  file_path!: string | null;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  //@Index()
  @Column({ type: 'varchar', length: 50 })
  phone!: string;

  //@Index()
  @Column({ type: 'varchar', length: 255 })
  email!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  plastic_type!: string | null;

  @Column({ type: 'varchar', length: 20, nullable: true })
  color!: string | null;

  @Column({ type: 'boolean', default: false })
  with_postprocessing!: boolean;

  @Column({ type: 'text', nullable: true })
  comment!: string | null;

  //@Index()
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;
}
