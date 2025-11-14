import 'server-only';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'services' })
export class ServicesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  title!: string;

  @Column({ type: 'varchar', length: 100 })
  alias!: string;

  @Column({ type: 'integer' })
  price!: number;
}
