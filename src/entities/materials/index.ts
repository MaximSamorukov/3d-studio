import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'materials' })
export class MaterialsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'float' })
  density!: number;

  @Column({ type: 'integer' })
  price_per_kg!: number;
}
